from django.shortcuts import render, HttpResponse, redirect

# Server Configurations
from Mainapp.Main_scripts import MainConfiguration

# Gene Module - Expression
from Mainapp.Main_scripts.GeneExpressionDataCurator import gene_exp_df_builder, fund_info_obtainer
from Mainapp.R_visualization import fund_plot_generator

# Gene Module - DE Analysis
from Mainapp.Main_scripts import GeneDEDataCurator
from Mainapp.R_visualization import DE_analysis_plt_generator

# TF Module
from Mainapp.Main_scripts import TFHeatmapDataCurator
from Mainapp.R_visualization import TF_heatmap_generator
from Mainapp.Main_scripts import TFHeatmapSampleConfiguration

# TE Module
from Mainapp.Main_scripts import TEBySampleDataCurator
from Mainapp.R_visualization import TE_bysample_plt_generator

# Other Components
from threading import Thread  # Enabling multi-threading support
from time import time
import re

# Celery applications
import Mainapp.tasks as celery_tasks


# ==============MODULE: HOME PAGE==============
# 1.1 HOME PAGE REDIRECTOR
def init_scr_redirect(request):
    return redirect('/HEMUdb/home')


# 1.1 HOME PAGE RENDERER
def init_scr(request):
    return render(request, 'home.html')


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
        if query_species == "coix":
            return render(request, 'gene_search_result_coix.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           })
        elif query_species == "zea":
            return render(request, 'gene_search_result_zea.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           })
        elif query_species == "sorghum":
            return render(request, 'gene_search_result_zea.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           })
        else:
            return HttpResponse("Invalid query.")


# 2.2 DGE QUERY HANDLER
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

        if group2_name == "demo":
            return render(request, 'gene_DE_report_display.html',
                          {
                              'task_destination_folder': 'demo',
                              'species_query': 'coix',
                              'group1_name': 'treatmant',
                              'group1_samples_list': '["SRR10208252", "SRR10208253", "SRR10208254"]',
                              'group2_name': 'control',
                              'group2_samples_list': '["SRR10208255", "SRR10208256", "SRR10208257"]',
                          })

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

        print(task_destination_folder)
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
                                                 MainConfiguration.query_tables('coix_te'),  # Expression matrix
                                                 )  # Detailed sample info
                elif species_by_accession == "zea":
                    exp_df = TEBySampleDataCurator.TE_exp_df_builder_sample(te_query_accession,
                                                 MainConfiguration.query_tables('zea_te'),  # Expression matrix
                                                 )  # Detailed sample info
                elif species_by_accession == "sorghum":
                    exp_df = TEBySampleDataCurator.TE_exp_df_builder_sample(te_query_accession,
                                                 MainConfiguration.query_tables('sorghum_te'),  # Expression matrix
                                                 )  # Detailed sample info
                else:
                    _error_message = "illegal query"
                TE_bysample_plt_generator.TE_bysample_plt(exp_df, te_query_accession)

            return render(request, 'TE/TE_bysample_result.html',
                          {
                              'query_list': te_query_accession_list
                          })


        elif species_by_teid:
            return HttpResponse("Querying via TE id")
        return HttpResponse("Not detected.")


# ==============MODULE: DATA BROWSER==============
# 5.1 JBROWSE2 RENDERER
def jbrowse(request):
    return render(request, 'Jbrowse/Jb_sorghum_rio.html')


# ==============MODULE: SUPP==============
# 6.1 USER GUIDE RENDERER
def user_guide(request):
    return render(request, 'user_guide.html')

# 6.2 BLAST ENTRY
