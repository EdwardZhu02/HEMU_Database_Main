import pandas as pd
import os

if not os.environ.get('DJANGO_SETTINGS_MODULE'):
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'HEMU_Database_Main.settings')

import django
django.setup()

from Mainapp.models import CoixSamp, CoixExp

expression_csv = "./Resources/Coix_lacryma_expression.csv"
sampleinfo_csv = "./Resources/Coix_lacryma_sampleinfo.csv"

expression_data = pd.read_csv(expression_csv, low_memory=False, sep=",")
expression_df = pd.DataFrame(expression_data)

sampleinfo_data = pd.read_csv(sampleinfo_csv, low_memory=False, sep=",")
sampleinfo_df = pd.DataFrame(sampleinfo_data)


def reform_expression_matrix(input_df):
    sample_id_comp = []  # Non-redundant sample ids
    try:
        df_cols = input_df.columns.tolist()
        df_cols.pop(0)

        for entry in df_cols:
            if entry.endswith('_FPKM'):
                sample_id_comp.append(entry.rstrip('_FPKM'))

        for index, row in input_df.iterrows():
            for indv_sample in sample_id_comp:
                index_fpkm = indv_sample + '_FPKM'
                index_tpm = indv_sample + '_TPM'
                CoixExp.objects.create(gene=row['Genes'], sample_id=indv_sample, fpkm=row[index_fpkm],
                                       tpm=row[index_tpm])

    except:
        return Exception
    print("Generation of expression sheet completed.")


def reform_sample_matrix(input_df):
    for row in input_df.iterrows():
        CoixSamp.objects.create(
            sample_id=row['sample_id'],
            sample_download_link=row['sample_download_link'],
            sample_tissue=row['sample_tissue'],
            sample_project_number=row['sample_project_number'],
            sample_description=row['sample_description'],
        )
    print("Generation of sample sheet completed.")


reform_expression_matrix(expression_df)
reform_sample_matrix(sampleinfo_df)
