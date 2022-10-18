import pandas as pd
from sqlalchemy import create_engine  # creating sheet de novo
import pymysql  # appending tissue information

"""
Version 1 - splitting large expression matrices into so-called 'long' format, containing only entries:
            "gene_id", "sample_id", "fpkm", "tpm"
            and subsequently output them to a certain database sheet.

Version 2 - automatic searching of corresponding tissues and appending to each entry, new entry like:
            "gene_id", "sample_id", "fpkm", "tpm", "tissue"
            this promotes faster table lookup.
"""
# The following variables should be configured.
#expression_csv = "./Resources/Zm/Zea_mays_expression.csv"
#sampleinfo_csv = "./Resources/Zm/Zea_mays_sampleinfo.csv"
#output_sample_sheet_name = "zea_samp"
#output_expression_sheet_name = "zea_exp"

#expression_csv = "./Resources/Cl/Coix_lacryma_expression.csv"
#sampleinfo_csv = "./Resources/Cl/Coix_lacryma_sampleinfo.csv"
#output_sample_sheet_name = "coix_samp"
#output_expression_sheet_name = "coix_exp"

#expression_csv = "./Resources/Sb/Sorghum_bicolor_expression.csv"
#sampleinfo_csv = "./Resources/Sb/Sorghum_bicolor_sampleinfo.csv"
#output_sample_sheet_name = "sorghum_samp"
#output_expression_sheet_name = "sorghum_exp"

expression_csv = "./Resources/Sl/Saccharum_expression.csv"
sampleinfo_csv = "./Resources/Sl/Saccharum_sampleinfo.csv"
output_sample_sheet_name = "saccharum_samp"
output_expression_sheet_name = "saccharum_exp"

# Used for sqlalchemy engine services
sql_engine = create_engine("mysql+pymysql://root:Liuju83198431@localhost:3306/hemu_database")

sampleinfo_data = pd.read_csv(sampleinfo_csv, low_memory=False, sep=",")
sampleinfo_df = pd.DataFrame(sampleinfo_data)
expression_data = pd.read_csv(expression_csv, low_memory=False, sep=",")
expression_df = pd.DataFrame(expression_data)

def reform_expression_matrix(raw_expression_df, sample_info_df):
    sample_id_comp = []  # Non-redundant sample ids
    main_df_comp = []

    # Constructing dict
    sample_tissue_dict = {}  # sample_id -> sample_tissue
    # print(sample_info_df)
    for sample_entry in sample_info_df.index:
        sample_tissue_dict[sample_info_df.loc[sample_entry].sample_id] = str(sample_info_df.loc[sample_entry].sample_tissue).lower()
    print("Dict construction completed. Length:", len(sample_tissue_dict.keys()), sep=" ")

    try:
        df_cols = raw_expression_df.columns.tolist()
        df_cols.pop(0)  # remove name field

        for entry in df_cols:
            if entry.endswith('_FPKM'):
                sample_id_comp.append(entry.rstrip('_FPKM'))

        processed_samples = 0

        for indv_sample in sample_id_comp:  # Individual sample
            try:
                indv_sample_tissue = str(sample_tissue_dict[indv_sample])
            except KeyError:
                print("Index not found for %s, considering tissue unknown." % indv_sample)
                indv_sample_tissue = "unknown"

            for index, row in raw_expression_df.iterrows():  # Individual gene
                index_fpkm = indv_sample + '_FPKM'
                index_tpm = indv_sample + '_TPM'
                main_df_comp.append([row['Genes'], indv_sample, row[index_fpkm], row[index_tpm], indv_sample_tissue])
            processed_samples += 1
            print(processed_samples, "samples processed.", sep=" ")

    except:
        return "Exception occurred when executing transaction."

    return pd.DataFrame(main_df_comp, columns=['gene', 'sample_id', 'fpkm', 'tpm', 'tissue_type'])


print("Data load complete. Parsed Genes: %s, Parsed Samples: %s." %
      (expression_df.shape[0] - 1, int((expression_df.shape[1] - 1) / 2)))

sampleinfo_df.to_sql(name=output_sample_sheet_name, con=sql_engine, if_exists="replace")
print("Creation completed for sample database sheet")

print("Converting expression matrix and appending tissue information")
expression_df_final = reform_expression_matrix(expression_df, sampleinfo_df)
print("Completed.")

print("Creating expression sheet..")
expression_df_final.to_sql(name=output_expression_sheet_name, con=sql_engine, if_exists="replace")
print("All done")
