from django.shortcuts import render, HttpResponse, redirect

# Server Configurations
from Mainapp.Main_scripts import MainConfiguration
from Mainapp.Main_scripts.site_manage import TmpFileCleaner

# Gene Module - Expression
from Mainapp.Main_scripts.GeneExpressionDataCurator import gene_exp_df_builder, fund_info_obtainer
from Mainapp.R_visualization import fund_plot_generator
from Mainapp.Main_scripts import GeneSequenceCurator
from Mainapp.Main_scripts import GoKeggDataCurator
from Mainapp.R_visualization import gokegg_enrichment_plt_generator
from Mainapp.Main_scripts.wgcna import WGCNAShinyAppHandler

# Gene Module - DE Analysis
from Mainapp.Main_scripts import GeneDEDataCurator
from Mainapp.R_visualization import DE_analysis_plt_generator

# Gene Module - WGCNA
from Mainapp.Main_scripts.wgcna import WGCNASampleGeneDataCurator

# TF Module
from Mainapp.Main_scripts import TFHeatmapDataCurator
from Mainapp.R_visualization import TF_heatmap_generator
from Mainapp.Main_scripts import TFHeatmapSampleConfiguration

# TE Module
from Mainapp.Main_scripts import TEBySampleDataCurator
from Mainapp.R_visualization import TE_expression_plt_generator
from Mainapp.Main_scripts import TEByFamilyDataCurator

# Other Components
from threading import Thread  # Enabling multi-threading support
from pathlib import Path
from time import time
import re

# Celery applications
import Mainapp.tasks as celery_tasks


# from celery.result import AsyncResult


def celery_test(request):
    task_id = celery_tasks.waste_time.delay()
    # task_result = task_id.get()
    return HttpResponse(task_id)


# ==============MODULE: HOME PAGE==============
# 1.1 HOME PAGE REDIRECTOR
def init_scr_redirect(request):
    return redirect('/HEMUdb/home')


# 1.2 HOME PAGE RENDERER
def init_scr(request):
    return render(request, 'home.html')


# 1.3 SITE MANAGER VALIDATOR & RENDERER
def site_manage(request):
    if request.method == "GET":
        return render(request, 'site_manage/site_manage_auth.html')
    elif request.method == "POST":

        if request.POST.get('clear_tmp_files') == "1":
            identity_number_deleted = int(TmpFileCleaner.clean_tmp_files())
            tmp_message = "Cleaning completed, removed %d identities." % identity_number_deleted
            return render(request, 'site_manage/site_manage_dashboard.html',
                          {'clear_tmp_files_message': tmp_message})

        # Authentication
        if str(request.POST.get('password')) == MainConfiguration.query_admin_pwd():
            return render(request, 'site_manage/site_manage_dashboard.html')
        else:
            return render(request, 'site_manage/site_manage_auth.html',
                          {'error_message': 'Password Incorrect!'})


# ==============MODULE: GENE==============
# 2.1 GENE EXPRESSION PROFILE QUERY HANDLER
def gene_exp_init(request):
    global exp_df, _time_consumption
    _exp_matrix = []
    _error_message = ""
    _time_consumption = 0
    _library_matchexp = re.compile(r'^SR[A-Z]\d+(;SR[A-Z]\d+)*$')
    # ';' is the separation mark for multiple libraries

    _gene_matchexp = re.compile(r'^(Cl|Zm|(SORBI_))\w+(;(Cl|Zm|(SORBI_))\w+)*$')
    # ';' is the separation mark for multiple query genes

    if request.method == 'GET':
        return render(request, 'gene_search_main.html')
    elif request.method == 'POST':
        query_list = request.POST.get('main_query').split(';')  # Original query data
        query_species = request.POST.get('query_species')  # Species to query
        query_format = request.POST.get('optionsRadios')  # FPKM / TPM

        query_list_full = []

        # [[gene_ID, expressed_samples, total_samples, max, min, median], [..]]
        # By default

        def query_handler(indv_query):
            global exp_df
            if re.match(_gene_matchexp, indv_query):
                if query_species == "coix":
                    exp_df = gene_exp_df_builder(indv_query,
                                                 MainConfiguration.query_tables('coix_exp'),  # Expression matrix
                                                 )  # Detailed sample info
                elif query_species == "zea":
                    exp_df = gene_exp_df_builder(indv_query,
                                                 MainConfiguration.query_tables('zea_exp'),  # Expression matrix
                                                 )  # Detailed sample info
                elif query_species == "sorghum":
                    exp_df = gene_exp_df_builder(indv_query,
                                                 MainConfiguration.query_tables('sorghum_exp'),  # Expression matrix
                                                 )  # Detailed sample info
                else:
                    _error_message = "illegal query"

                query_list_full.append(fund_info_obtainer(indv_query, exp_df, query_format))

                fund_plot_generator.overview_barplot(exp_df, indv_query, query_format, query_species)
                fund_plot_generator.tissue_specific_barplot(exp_df, indv_query, query_format, query_species)

                exp_df.to_csv("Mainapp/static/Temp_R_html/" + indv_query + "values.csv")

            if re.match(_library_matchexp, indv_query):
                return HttpResponse('Feature under development, plz wait.')

        def task_deployer(_query_list):
            threads = []
            _start = time()
            for _indv_query in query_list:
                p = Thread(target=query_handler, args=(_indv_query,))
                threads.append(p)
                p.start()

            for p in threads:
                p.join()
            _end = time()
            return str(_end - _start)[:4]

        _time_consumption = task_deployer(query_list)
        if query_species in ["coix"]:
            return render(request, 'gene_search_result_smalldata.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           'query_species': query_species,
                           'last_query': ";".join(query_list),
                           })
        elif query_species in ["zea", "sorghum"]:
            return render(request, 'gene_search_result_bigdata.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           'query_species': query_species,
                           'last_query': ";".join(query_list),
                           })
        else:
            return HttpResponse("Invalid query.")


# 2.2 GENE RAW SEQUENCE DISPLAYER
def gene_sequence_disp(request):
    if request.method == "GET":
        # gene_sequence_disp/?sp=coix&gene=Cl000001
        query_species = request.GET.get('sp')
        query_gene = request.GET.get('gene')

        if not query_species:  # Empty Variable in URL
            return redirect('/HEMUdb/home')
        if not query_gene:
            return redirect('/HEMUdb/home')

        sequence_list = GeneSequenceCurator.transcript_sequence_query(
            query_gene,
            MainConfiguration.query_geneseq_tables(query_species),
        )
        # [[TranscriptID, RawSequence, SequenceLength], [...]]
        return render(request, 'gene_expression/gene_sequence_display.html',
                      {
                          "sequence_list": sequence_list,
                      })
    elif request.method == "POST":
        seq_transfer = request.POST.get("sequence_raw")
        return render(request, 'BLAST/sequenceserver_display.html',
                      {
                          'seq_transfer': seq_transfer
                      })


# 2.3 DGE QUERY HANDLER
def gene_DE_init(request):
    global exp_sheet_name

    if request.method == 'GET':
        return render(request, 'gene_DE_main.html')
    elif request.method == 'POST':
        species_query = request.POST.get('species_query')
        logfc_threshold = request.POST.get('logfc_threshold')
        pvalue_threshold = request.POST.get('pvalue_threshold')
        heatmap_gene_count = request.POST.get('heatmap_gene_count')

        group1_samples_list = request.POST.get('group1_samples').split(";")
        group1_name = request.POST.get('group1_name')

        group2_samples_list = request.POST.get('group2_samples').split(";")
        group2_name = request.POST.get('group2_name')

        if species_query == "coix":
            exp_sheet_name = MainConfiguration.query_tables('coix_exp'),  # sheet name
        elif species_query == "zea":
            exp_sheet_name = MainConfiguration.query_tables('zea_exp'),
        elif species_query == "sorghum":
            exp_sheet_name = MainConfiguration.query_tables('sorghum_exp'),
        else:
            _error_message = "illegal query"

        DE_data_raw, DE_group_list, DE_group_color_list = GeneDEDataCurator.gene_de_df_builder(exp_sheet_name,
                                                                                               group1_samples_list,
                                                                                               group1_name,
                                                                                               group2_samples_list,
                                                                                               group2_name)

        task_destination_folder = DE_analysis_plt_generator.GeneDifferentialAnalysis(
            DE_data_raw, DE_group_list, DE_group_color_list,
            logfc_threshold, pvalue_threshold, heatmap_gene_count,
            group1_name, group2_name)

        # task_destination_folder = celery_tasks.DGE_plot_generator_deployer.delay(
        #    DE_data_raw, DE_group_list, DE_group_color_list,
        #    logfc_threshold, pvalue_threshold, heatmap_gene_count,
        #    group1_name, group2_name).get()

        # print(task_destination_folder)
        return render(request, 'gene_DE_report_display.html',
                      {
                          'task_destination_folder': task_destination_folder,
                          'species_query': species_query,
                          'group1_name': group1_name,
                          'group1_samples_list': group1_samples_list,
                          'group2_name': group2_name,
                          'group2_samples_list': group2_samples_list,
                      })


# 2.3 DGE STATIC FILE LOAD HANDLER
def load_DE_staticfile(request, identifier_name, file_name, frame_height, frame_width):
    print(identifier_name, file_name)
    return render(request, 'static_html_display.html',
                  {
                      'identifier_name': identifier_name,
                      'file_name': file_name,
                      'frame_height': frame_height,
                      'frame_width': frame_width,
                  })


# 2.4 GO/KEGG ENRICHMENT
def gokegg_enrich(request):
    if request.method == "GET":
        return render(request, 'gene_expression/gokegg_enrich.html')
    elif request.method == "POST":
        species_query = request.POST.get("query_species")
        gene_list_final = [indv_gene.rstrip("\r") for indv_gene in request.POST.get("query_gene_list").split("\n")]
        gokegg_df = GoKeggDataCurator.gene_gokegg_df_builder(gene_list_final,
                                                             MainConfiguration.query_gokegg_tables(species_query))
        plt_filename_id = gokegg_enrichment_plt_generator.gokegg_enrich_plt(gokegg_df)
        return render(request, 'gene_expression/gokegg_enrich_result.html',
                      {
                          'filename_id': plt_filename_id,
                      })


# ============MODULE: WGCNA=============
def wgcna_stage1(request):
    # global wgcna_task_id
    # wgcna_task_id = ""
    global output_app_dir

    if request.method == "GET":  # Task progress query
        if request.is_ajax():
            # task_query_result = AsyncResult(str(wgcna_task_id))
            # task_status = task_query_result.status
            try:
                shiny_instance_dir = Path(output_app_dir + "/app.R")
                if shiny_instance_dir.is_file():
                    # return HttpResponse("OK, detected " + output_app_dir + "/app.R")
                    return HttpResponse(output_app_dir.split("/")[-1])

            except NameError:  # app.R not found
                return HttpResponse("1")
        else:  # Normal HTTP request
            return render(request, 'wgcna/wgcna_step1.html')

    elif request.method == "POST":

        if request.POST.get("ID_query_verification"):  # Access existing WGCNA instance
            shiny_instance_dir = Path("/data1/Shiny_Apps/" + str(request.POST.get("ID_query")) + "/app.R")
            if shiny_instance_dir.is_file():
                return redirect("wgcna/interactive?id=" + request.POST.get("ID_query"))
            else:
                return render(request, 'wgcna/wgcna_step1.html', {
                    'error_msg_claim_instance': 'No instance found matching input. \nThis is probably due to '
                                                'instances being deleted after 24hrs of inactivity. '
                })

        species_query = request.POST.get("query_species")
        gene_list_final = [indv_gene.rstrip("\r") for indv_gene in request.POST.get("query_gene_list").split("\n")]
        accession_list_final = [indv_accession.rstrip("\r") for indv_accession in
                                request.POST.get("query_accession_list").split("\n")]
        exp_met_query = request.POST.get("query_exp_met")

        output_app_dir, output_app_dir_name = WGCNAShinyAppHandler.WGCNA_shiny_appname_generator()

        wgcna_task_id = celery_tasks.WGCNA_handler.delay(
            MainConfiguration.query_exp_tables(species_query),
            gene_list_final,
            accession_list_final,
            exp_met_query,  # FPKM / TPM
            output_app_dir,
            output_app_dir_name
        )
        return render(request, 'wgcna/wgcna_step1_result.html', {
            'shiny_app_name': output_app_dir_name,
            'dataframe_description': "Species: %s, Genes: %d, Accessions: %d" % (
                species_query, len(gene_list_final), len(accession_list_final))
        })


def wgcna_stage2(request):
    if request.method == "GET":
        # /?id=XXXXXX
        shiny_app_id = request.GET.get('id')
        if not shiny_app_id:  # Empty Variable in URL
            return redirect('wgcna')

        return render(request, 'wgcna/wgcna_step2.html', {
            'shiny_app_name': shiny_app_id,
        })


# ==============MODULE: TF==============
# 3.1 TF QUERY HANDLER
def init_tf_scr(request):
    if request.method == "GET":
        return render(request, 'tf_mainpage.html',
                      {
                          "zea_tissue_list": str(", ".join(TFHeatmapSampleConfiguration.return_sample("zea").keys())),
                      })

    elif request.method == "POST":  # Generate Heatmaps
        try:
            final_tf_fam_id = []
            final_tf_indv_id = []
            final_tissueid = []
            final_sampleid = []

            tf_query_list = request.POST.get('tf_query').split(';')
            sample_query_list = request.POST.get('sample_query').split(';')
            species_query = request.POST.get('species_query')

            # print(tf_query_list, sample_query_list, species_query)
            # Process TF query
            for indv_tf in tf_query_list:
                if str(indv_tf).startswith("fam:"):
                    final_tf_fam_id.append(str(indv_tf).lstrip("fam:"))
                elif str(indv_tf).startswith("id:"):
                    final_tf_indv_id.append(str(indv_tf).lstrip("id:"))
            final_TF_fam_list = TFHeatmapDataCurator.TF_fam_to_geneid_query(species_query, final_tf_fam_id,
                                                                            final_tf_indv_id)
            # final_TF_fam_list: [[TF_geneid, TF_family], [TF_geneid, TF_family], ...]

            # Process sample query
            for indv_sample in sample_query_list:
                if str(indv_sample).startswith("tis:"):
                    final_tissueid.append(str(indv_sample).lstrip("tis:"))
                elif str(indv_sample).startswith("sp:"):
                    final_sampleid.append(str(indv_sample).lstrip("sp:"))

            final_heatmap_df = TFHeatmapDataCurator.TF_heatmap_df_builder(species_query, final_TF_fam_list,
                                                                          final_tissueid)
            heatmap_filename = TF_heatmap_generator.TF_tpm_heatmap(final_heatmap_df)

            return render(request, 'tf_heatmap_display.html',
                          {
                              'heatmap_filename': heatmap_filename,
                              'species_query': species_query,
                              # 'confirmation_msg': confirmation_msg,
                          })
        except:
            return HttpResponse("Some error occurred, please try again.")


# ==============MODULE: TE==============
# 4.1 TE HOMEPAGE RENDERER
def te_exp_init(request):
    global exp_df

    if request.method == "GET":
        return render(request, 'TE/TE_search_main.html')
    elif request.method == "POST":
        species_by_accession = request.POST.get('species_query_accession')
        species_by_teid = request.POST.get('species_query_teid')

        if species_by_accession:  # by-sample-accession search
            te_query_accession_list = request.POST.get('te_query_accession').split(";")
            for te_query_accession in te_query_accession_list:
                if species_by_accession == "coix":
                    exp_df = TEBySampleDataCurator.TE_exp_df_builder_sample(te_query_accession,
                                                                            MainConfiguration.query_tables('coix_te'),
                                                                            # Expression matrix
                                                                            )  # Detailed sample info
                elif species_by_accession == "zea":
                    exp_df = TEBySampleDataCurator.TE_exp_df_builder_sample(te_query_accession,
                                                                            MainConfiguration.query_tables('zea_te'),
                                                                            # Expression matrix
                                                                            )  # Detailed sample info
                elif species_by_accession == "sorghum":
                    exp_df = TEBySampleDataCurator.TE_exp_df_builder_sample(te_query_accession,
                                                                            MainConfiguration.query_tables(
                                                                                'sorghum_te'),  # Expression matrix
                                                                            )  # Detailed sample info
                else:
                    _error_message = "illegal query"
                TE_expression_plt_generator.TE_bysample_plt(exp_df, te_query_accession)

            return render(request, 'TE/TE_bysample_result.html',
                          {
                              'query_list': te_query_accession_list
                          })

        elif species_by_teid:  # by-TE family ID search
            te_query_TEid_list = request.POST.get('te_query_teid').split(";")
            for te_query_TEid in te_query_TEid_list:
                if species_by_teid == "coix":
                    TE_class, TE_class_group, exp_df = TEByFamilyDataCurator.TE_exp_df_builder_family(te_query_TEid,
                                                                                                      MainConfiguration.query_tables(
                                                                                                          'coix_te'),
                                                                                                      # Expression matrix
                                                                                                      )  # Detailed sample info
                elif species_by_teid == "zea":
                    TE_class, TE_class_group, exp_df = TEByFamilyDataCurator.TE_exp_df_builder_family(te_query_TEid,
                                                                                                      MainConfiguration.query_tables(
                                                                                                          'zea_te'),
                                                                                                      # Expression matrix
                                                                                                      )  # Detailed sample info
                elif species_by_teid == "sorghum":
                    TE_class, TE_class_group, exp_df = TEByFamilyDataCurator.TE_exp_df_builder_family(te_query_TEid,
                                                                                                      MainConfiguration.query_tables(
                                                                                                          'sorghum_te'),
                                                                                                      # Expression matrix
                                                                                                      )  # Detailed sample info
                else:
                    _error_message = "illegal query"
                TE_expression_plt_generator.TE_byfamily_plt(exp_df, te_query_TEid)

            return render(request, 'TE/TE_byfamily_result.html',
                          {
                              'query_list': te_query_TEid_list
                          })

        else:
            return HttpResponse("Legal query not detected.")

def te_insertion(request):
    if request.method == "GET":
        return render(request, 'TE/TE_insertion.html')

# ==============MODULE: DATA BROWSER==============
# 5.1 JBROWSE2 RENDERER
def jbrowse(request):
    return render(request, 'Jbrowse/jbrowse_display.html')


def seqserver(request):
    if request.method == "GET":
        return render(request, 'BLAST/sequenceserver_display.html',
                      {
                          'seq_transfer': ""
                      })


# ==============MODULE: SUPP==============
# 6.1 USER GUIDE RENDERER
def user_guide(request):
    return render(request, 'user_guide.html')
