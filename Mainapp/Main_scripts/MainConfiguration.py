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

sql_user = "root"
sql_pwd = "Liuju83198431"
sql_host = "localhost"
sql_port = "3306"
sql_dbname = "hemu_database"


def query_tables(tbl2query):
    try:
        return tables_dict[tbl2query]
    except NameError:
        return None


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
