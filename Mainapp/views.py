from django.shortcuts import render, HttpResponse, redirect

from Mainapp.R_visualization import TF_heatmap_generator
from Mainapp.Main_scripts import MainConfiguration
from Mainapp.Main_scripts.MainDataCurator import gene_exp_df_builder, fund_info_obtainer
from Mainapp.R_visualization import fund_plot_generator
from Mainapp.Main_scripts import TFHeatmapDataCurator
from Mainapp.Main_scripts import TFHeatmapSampleConfiguration
from threading import Thread  # Enabling multi-threading support
from time import time
import re


def init_scr_redirect(request):
    return redirect('/HEMUdb/home')


def init_scr(request):
    return render(request, 'home.html')


def search_rnaseq(request):
    global exp_df, _time_consumption
    _exp_matrix = []
    _error_message = ""
    _time_consumption = 0
    _library_matchexp = re.compile(r'^SR[A-Z]\d+(;SR[A-Z]\d+)*$')
    # ';' is the separation mark for multiple libraries

    _gene_matchexp = re.compile(r'^(Cl|Zm|(SORBI_))\w+(;(Cl|Zm|(SORBI_))\w+)*$')
    # ';' is the separation mark for multiple query genes

    if request.method == 'GET':
        return render(request, 'rnaseq_search_main.html')
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
                                                 MainConfiguration.query_tables('coix_samp'))  # Detailed sample info
                elif query_species == "zea":
                    exp_df = gene_exp_df_builder(indv_query,
                                                 MainConfiguration.query_tables('zea_exp'),  # Expression matrix
                                                 MainConfiguration.query_tables('zea_samp'))  # Detailed sample info
                elif query_species == "sorghum":
                    exp_df = gene_exp_df_builder(indv_query,
                                                 MainConfiguration.query_tables('sorghum_exp'),  # Expression matrix
                                                 MainConfiguration.query_tables('sorghum_samp'))  # Detailed sample info
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
            return render(request, 'rnaseq_search_result_coix.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           })
        elif query_species == "zea":
            return render(request, 'rnaseq_search_result_zea.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           })
        elif query_species == "sorghum":
            return render(request, 'rnaseq_search_result_zea.html',
                          {'query_list': query_list,
                           'query_list_full': query_list_full,
                           'query_format': query_format,
                           'error_message': _error_message,
                           'time_consumption': _time_consumption,
                           })
        else:
            return HttpResponse("Invalid query.")


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


def init_te_scr(request):
    return render(request, 'te_mainpage.html')


def jbrowse(request):
    return render(request, 'Jbrowse/Jb_sorghum_rio.html')


def user_guide(request):
    return render(request, 'user_guide.html')
