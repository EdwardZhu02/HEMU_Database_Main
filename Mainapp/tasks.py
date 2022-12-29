from __future__ import absolute_import, unicode_literals
from HEMU_Database_Main.celery import app
from celery import shared_task

# External Packages
import time
import pandas as pd
from Mainapp.Main_scripts.wgcna import WGCNASampleGeneDataCurator
from Mainapp.Main_scripts.wgcna import WGCNAShinyAppHandler


@shared_task
def waste_time():
    time.sleep(10)
    print("Run function 'waste_time' ok")


@shared_task
def WGCNA_handler(exp_sheet_name, gene_list, sample_list, expression_format, output_app_dir, output_app_dir_name):
    expression_matrix = WGCNASampleGeneDataCurator.wgcna_init_df_builder(
        exp_sheet_name,
        gene_list,
        sample_list,
        expression_format
    )

    WGCNAShinyAppHandler.WGCNA_shiny_app_creator(
        expression_matrix, pd.DataFrame([]),
        output_app_dir,
        output_app_dir_name
    )

