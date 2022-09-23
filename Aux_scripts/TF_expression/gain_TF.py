import re
import pandas as pd
workbook1 = pd.read_csv('TPM.csv')
workbook2 = pd.read_csv('zma_test.csv')
output = pd.read_csv('output.csv',index_col='TF')
TF_col=workbook2.loc[ : , "TF"]
Gene_col=workbook1.loc[ : , "Genes"]
Sample_index=workbook1.loc[ 0, :]


TF_match=[]
final_TPM=""
final_TF_list=[]
final_line=[]
l=0

for TF in TF_col:
    for id in Gene_col:
        if TF==id:
            TF_match.append(TF)

for i in range(1, len(Gene_col)):
    TPM_row=workbook1.loc[i , :]
    for TF in TF_match:
        if TPM_row[0] == TF:
            # final_TF_list.append(TF)
            for s in range(1,len(Sample_index)):
                final_TPM=TPM_row[s]
                final_TF_list.append(final_TPM)
                s+=1
            print(final_TF_list)
            output.loc[TF] = final_TF_list
            final_TF_list = []
# print(output)
output.to_csv('output.csv')



