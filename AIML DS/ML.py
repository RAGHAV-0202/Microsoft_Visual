import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

salary = pd.read_csv('https://github.com/YBI-Foundation/Dataset/raw/main/Salary%20Data.csv')

x = salary[['Experience Years']]
y = salary['Salary']

X_train, X_test, y_train, y_test = train_test_split(x, y, random_state=2529)

model = LinearRegression()
model.fit(X_train, y_train)

# print("Intercept:", model.intercept_)    #27010.96
# print("Coefficient:", model.coef_)       #9343.36

# y = mx + c 
# salary = (934  b3.36 x Experience) + 27010.96

X_Test_Result = (model.predict(X_test))

for i in range (len(X_Test_Result)) :
    print(f"Actual: {y_test.iloc[i]} - Predicted: {X_Test_Result[i]}")
   