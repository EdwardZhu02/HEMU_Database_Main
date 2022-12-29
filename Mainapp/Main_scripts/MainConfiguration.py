"""
MainConfiguration.py
Stores critical information and table names used in the project
"""
tables_dict = {  # Table names
    'coix_exp': 'coix_exp',
    'coix_samp': 'coix_samp',
    'coix_tf': 'coix_tf',
    'coix_te': 'coix_te',
    'coix_gene_raw': 'coix_gene_raw',
    'coix_gokegg': 'coix_gokegg',

    'zea_exp': 'zea_exp',
    'zea_samp': 'zea_samp',
    'zea_tf': 'zea_tf',
    'zea_te': 'zea_te',
    'zea_gene_raw': 'zea_gene_raw',
    'zea_gokegg': 'zea_gokegg',

    'sorghum_exp': 'sorghum_exp',
    'sorghum_samp': 'sorghum_samp',
    'sorghum_tf': 'sorghum_tf',
    'sorghum_gene_raw': 'sorghum_gene_raw',
    'sorghum_gokegg': 'sorghum_gokegg',
}

sql_user = "root"
sql_pwd = "Liuju83198431"
sql_host = "localhost"
sql_port = "3306"
sql_dbname = "hemu_database"

admin_pwd = "hemu_admin0677"


def query_geneseq_tables(species2query):
    if species2query == "coix":
        return tables_dict["coix_gene_raw"]
    elif species2query == "zea":
        return tables_dict["zea_gene_raw"]
    elif species2query == "sorghum":
        return tables_dict["sorghum_gene_raw"]
    elif species2query == "saccharum":
        return tables_dict["saccharum_gene_raw"]
    else:
        return None


def query_exp_tables(species2query):
    if species2query == "coix":
        return tables_dict["coix_exp"]
    elif species2query == "zea":
        return tables_dict["zea_exp"]
    elif species2query == "sorghum":
        return tables_dict["sorghum_exp"]
    elif species2query == "saccharum":
        return tables_dict["saccharum_exp"]
    else:
        return None


def query_gokegg_tables(species2query):
    if species2query == "coix":
        return tables_dict["coix_gokegg"]
    elif species2query == "zea":
        return tables_dict["zea_gokegg"]
    elif species2query == "sorghum":
        return tables_dict["sorghum_gokegg"]
    elif species2query == "saccharum":
        return tables_dict["saccharum_gokegg"]
    else:
        return None


def query_tables(tbl2query):
    try:
        return tables_dict[tbl2query]
    except NameError:
        return None


def query_admin_pwd():
    return admin_pwd


def query_sql(identity):
    if identity == "host":
        return sql_host
    elif identity == "user":
        return sql_user
    elif identity == "pwd":
        return sql_pwd
    elif identity == "port":
        return sql_port
    elif identity == "dbname":
        return sql_dbname
    else:
        return None
