import pandas as pd
import pymysql
from Mainapp.Main_scripts.MainConfiguration import query_sql

# Extract TE expression data from database, by individual TE family ID

# Used for pymysql services
dbhost = str(query_sql("host"))
dbuser = str(query_sql("user"))
dbpassword = str(query_sql("pwd"))
dbdatabase = str(query_sql("dbname"))


def transcript_sequence_query(gene_id, gene_raw_sheet_name):
    global results
    db = pymysql.connect(host=dbhost, user=dbuser, password=dbpassword, database=dbdatabase)
    cursor = db.cursor()
    gene_id_query = "%" + gene_id + "%"

    sqlcmd_select_gene = "SELECT * FROM %s WHERE transcript LIKE '%s';" % (gene_raw_sheet_name, gene_id_query)

    try:  # Execute SQL command
        cursor.execute(sqlcmd_select_gene)
        results = cursor.fetchall()
    except:
        print("Exception occurred while querying database.")

    sequence_list = [[str(indv[0]), str(indv[1]), len(str(indv[1]))] for indv in results]
    # TranscriptID, RawSequence, SequenceLength

    return sequence_list
