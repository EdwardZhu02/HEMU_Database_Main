"""
MainConfiguration.py
Stores critical information and table names used in the project
"""
tables_dict = {  # Table names
    'coix_exp': 'coix_exp',
    'coix_samp': 'coix_samp',
    'coix_tf': 'coix_tf',
    'zea_exp': 'zea_exp',
    'zea_samp': 'zea_samp',
    'zea_tf': 'zea_tf',
    'sorghum_exp': 'sorghum_exp',
    'sorghum_samp': 'sorghum_samp',
    'sorghum_tf': 'sorghum_tf',
}
sql_pwd = "Liuju83198431"


def query_tables(tbl2query):
    try:
        return tables_dict[tbl2query]
    except NameError:
        return None


def query_sql_pwd():
    return sql_pwd
