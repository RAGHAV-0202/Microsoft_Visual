import pandas as pd

# salary = pd.read_csv('https://github.com/YBI-Foundation/Dataset/raw/main/Salary%20Data.csv')

# print(salary.head())  # shows top 5 result
# print(salary.describe())  # shows count , mean , std , min etc  
# print(salary.info())   # basic info 

# print(salary.columns)
# print(salary.shape)

# step 3 , define target (y) and given data (x)

# We can Predict Experience from salary : noo  , because experience doesnt depend on salary
# We can Predict Salary from Experience : yes  , irl salary increase as exp increases 

## above given is an example of supervised learning problem

salary = pd.read_csv('https://github.com/YBI-Foundation/Dataset/raw/main/Salary%20Data.csv')

# print(salary.columns)   # Index(['Experience Years', 'Salary'], dtype='object')  : X = Experience Years , Y = Salary

x = salary[['Experience Years']]
y = salary['Salary']

# print(salary)

from sklearn.model_selection import train_test_split
X_train , X_test , y_train , y_test = train_test_split(x,y)
# print(X_train.shape  , X_test.shape , y_train.shape , y_test.shape )
print(y_test)