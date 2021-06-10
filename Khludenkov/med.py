import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

PATH = r"F:/"
FILE_NAME = r"mkb10.xlsx"
file_path = PATH + FILE_NAME
print(file_path)
df = pd.read_excel(file_path, comment='#', sheet_name=None)

print(df.head())
print(df.columns.ravel())
print(df['EmpName'].tolist())

sheet = df.ac
print('Excel Sheet to Dict:', df.to_dict(orient='record'))
print('Excel Sheet to JSON:', df.to_json(orient='records'))
print('Excel Sheet to CSV:n', df.to_csv(index=False))
