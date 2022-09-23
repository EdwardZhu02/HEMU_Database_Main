import pandas as pd
from sqlalchemy import create_engine

tf_data = pd.read_csv('./final_TF.csv', low_memory=False, sep=",")
tf_df = pd.DataFrame(tf_data).drop(['Unnamed: 0'], axis=1)
print(tf_df)

sql_engine = create_engine("mysql+pymysql://root:Liuju83198431@localhost:3306/hemu_database")
# expression_df.to_sql(name=expression_sheet_name, con=sql_engine, if_exists="replace")
tf_df.to_sql(name='zea_tf', con=sql_engine, if_exists="replace")
print("done")