import pandas as pd
import matplotlib.pyplot as plt
# dframe = pd.DataFrame([{'Monday' : 510 , 'Tuesday' : 350 , 'Wednesday' : 475 , 'Thursday' : 580 , 'Friday' : 600}])
# plt.plot(['Monday','Tuesday','Wednesday','Thursday','Friday',],dframe.loc[0], color = 'red' ,linestyle='--',marker = 'D')
# plt.title('The weekly income report')
# plt.xlabel('Days')
# plt.ylabel('Income')
# plt.legend(['Income'])
# plt.show()

# import pandas as pd

# import matplotlib as plt

# masks = {
#     "March" : 1500 ,
#     "April" : 3500 ,
#     "May" : 6500 , 
#     "June":  6700,
#     "July" : 6000 , 
#     "August" : 6800
# }

# sanit = {
#     "March" : 4400 ,
#     "April" : 4500 ,
#     "May" : 5500 , 
#     "June":  6600,
#     "July" : 5600 , 
#     "August" : 00
# }
# hwash = {
#     "March" : 6500 ,
#     "April" : 5000 ,
#     "May" : 5800 , 
#     "June":  6300,
#     "July" : 6200 , 
#     "August" : 4500
# }
# dframe1 = pd.DataFrame({"Masks" : masks , "Sanitizer" : sanit , "Handwash" : hwash })

# dframe1.plot(kind="line" , color=["red" , "black" , "green"] , marker = ".")
# plt.legend(dframe1)
# plt.show()



# m1 = {
#     "overs" : 1 ,
#     "Runs" : 6
# }
# m2 = {
#     "overs" : 2 ,
#     "Runs" : 18
# }

# m3 = {
#     "overs" : 3 ,
#     "Runs" : 10
# }
# dframe1 = pd.DataFrame([m1,m2,m3])
# print(dframe1)
# plt.bar(dframe1['overs'],dframe1["Runs"] , color='black' , edgecolor='red' , hatch = '/')
# plt.xticks(dframe1["overs"])
# plt.yticks(range(0,21,5))
# plt.show()



df_input = pd.DataFrame({'Q1':[], 'Q2':[], 'Q3':[], 'Q4':[], 'Q5':[]})
df_perc = pd.DataFrame({'Q1':[], 'Q2':[], 'Q3':[], 'Q4':[], 'Q5':[], 'Name':[]})

for i in range(5):
    print(f"Input number {i+1}")
    q1 = input("Enter your name: ")
    df_perc.loc[i, 'Name'] = q1
    q2 = int(input("Enter the number of family members: "))
    q3 = int(input("Enter your attendance percentage: "))
    q4 = int(input("Enter your health rating (0-5): "))
    q5 = int(input("Enter your marks percentage: "))
    df_input.loc[i] = [q1, q2, q3, q4, q5]

for r in range(5):
    df_perc.loc[r, 'Q1'] = 20
    df_perc.loc[r, 'Q2'] = 20
    if 75 <= df_input.loc[r, 'Q5'] < 101:
        df_perc.loc[r, 'Q3'] = 20
    elif 30 <= df_input.loc[r, 'Q3'] < 75:
        df_perc.loc[r, 'Q3'] = 13
    elif 0 <= df_input.loc[r, 'Q3'] < 30:
        df_perc.loc[r, 'Q4'] = 7
    if 4 <= df_input.loc[r, 'Q4'] < 6:
        df_perc.loc[r, 'Q4'] = 20
    elif 2 <= df_input.loc[r, 'Q4'] < 4:
        df_perc.loc[r, 'Q4'] = 12
    elif 0 <= df_input.loc[r, 'Q4'] < 2:
        df_perc.loc[r, 'Q4'] = 6

    if 75 <= df_input.loc[r, 'Q5'] < 101:
        df_perc.loc[r, 'Q5'] = 20
    elif 30 <= df_input.loc[r, 'Q5'] < 75:
        df_perc.loc[r, 'Q5'] = 10
    elif 0 <= df_input.loc[r, 'Q5'] < 30:
        df_perc.loc[r, 'Q5'] = 3

    print(df_perc)
    df_perc.plot(kind='bar', x='Name')
    plt.show()