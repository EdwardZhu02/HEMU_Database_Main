from __future__ import absolute_import, unicode_literals
from celery import shared_task
from HEMU_Database_Main.celery import app
from celery import shared_task

# External Packages
import time
from Mainapp.R_visualization import DE_analysis_plt_generator

@shared_task
def DGE_plot_generator_deployer(DE_data_raw, DE_group_list, DE_group_color_list,
                             logfc_threshold, pvalue_threshold, heatmap_gene_count,
                             group1_name, group2_name):

    output_folder_name = DE_analysis_plt_generator.GeneDifferentialAnalysis(
        DE_data_raw, DE_group_list, DE_group_color_list,
        logfc_threshold, pvalue_threshold, heatmap_gene_count,
        group1_name, group2_name)

    return output_folder_name

