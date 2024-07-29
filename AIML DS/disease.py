import pandas as pd

from sklearn.linear_model import LinearRegression
from sklearn.linear_model import LogisticRegression

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


diabetes = pd.read_csv("https://github.com/YBI-Foundation/Dataset/raw/main/Diabetes.csv")

#print(diabetes.columns) # Index(['pregnancies', 'glucose', 'diastolic', 'triceps', 'insulin', 'bmi','dpf', 'age', 'diabetes'],

x = diabetes[['pregnancies', 'glucose', 'diastolic', 'triceps', 'insulin', 'bmi','dpf', 'age']]
y = diabetes['diabetes']

X_train , X_test , y_train , y_test = train_test_split(x,y)

model = LogisticRegression(max_iter=500)
model.fit(X_train,y_train)


Y_Pred = model.predict(X_test)

# for i in range (len(Y_Pred)) :
#     print(f"Actual: {y_test.iloc[i]} - Predicted: {Y_Pred[i]}")

print(accuracy_score(y_test , Y_Pred))


