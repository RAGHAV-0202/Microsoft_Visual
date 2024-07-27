import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


file_csv = pd.read_csv("D:/Microsoft Visual/Python/student_data.csv")

print("For displaying records, enter 1")
print("For editing records, enter 2")
print("For deleting records, enter 3")
print("For entering new record, enter 4")
print("For searching for a record, enter 5")
print("For plotting a graph between Marks and Attendance, enter 6")
print("To get stats from the data, enter 7")
print("")

df_search = pd.DataFrame({"Name" : [] , "Class" : [] , "Section" : [] , "DOB" : [] , "English" : [] , "Physics" : [] , "Chemistry" : [], "Maths" : [], "Optional" : [], "Total_Percentage" : [], "Attendance_Percentage" : []})

n_rows = file_csv["Name"].count()
list1 = list()

inp = 00
while inp not in [1,2,3,4,5,6,7] :
    inp = int(input("Enter the desired operation : "))
    if inp not in [1,2,3,4,5,6,7] : 
        print("Invalid input")

    if inp == 1 :
        print(file_csv)

    if inp == 2 :
        print(file_csv)
        
        c_name = input("Enter the name of Column : ")
        r_name = int(input("Enter row value from 0 to " + str(n_rows - 1 ) + " : "))
        new_value = input("Enter new value : ")

        file_csv.loc[r_name, c_name] = new_value

        print(file_csv)

    if inp == 3 :
        print(file_csv) 
        r_name = int(input("Enter row value from 0 to " + str(n_rows - 1 ) + " : "))
        file_csv = file_csv.drop([r_name] , axis = 0)

        file_csv = file_csv.reset_index(drop=True)
        print(file_csv)

    if inp == 4 :
        print(file_csv)

        Name = input("Enter student's name : ")
        Class = input("Enter student's class : ")
        Section = input("Enter student's section : ")
        DOB = input("Enter student's DOB : ")
        English = int(input("Enter student's marks in English : "))
        Physics = int(input("Enter student's marks in Physics : "))
        Chemistry = int(input("Enter student's marks in Chemistry : "))
        Maths = int(input("Enter student's marks in Maths : "))
        Optional = int(input("Enter student's marks in Optional : "))
        Total_Percentage = (English + Physics + Chemistry + Maths + Optional) / 5 
        Attendance_Percentage = input("Enter student's Attendance percentage : ")

        file_csv.loc[n_rows] = [Name,Class,Section,DOB,English,Physics,Chemistry,Maths,Optional,Total_Percentage,Attendance_Percentage]
        
        n_rows = n_rows + 1 

        print(file_csv)

    if inp == 5:
        print(file_csv)

        print("To search by:\nName, Enter 1\nClass, enter 2\nSection, enter 3\nTotal_Percentage, enter 4")

        search_inp = 0  # Initialized search_inp variable

        while search_inp not in [1, 2, 3, 4]:
            search_inp = int(input("Enter choice: "))

            if search_inp == 1:
                n_search = input("Enter name: ")

                df_search = file_csv[file_csv['Name'].str.lower() == n_search.lower()]

                print(df_search)

            elif search_inp == 2:
                class_search = input("Enter class: ")

                df_search = file_csv[file_csv['Class'] == int(class_search)]

                print(df_search)

            elif search_inp == 3:
                section_search = input("Enter section: ")

                df_search = file_csv[file_csv['Section'].str.lower() == section_search.lower()]

                print(df_search)

            elif search_inp == 4:
                percentage_search = float(input("Enter total percentage: "))

                df_search = file_csv[file_csv['Total_Percentage'] == percentage_search]

                print(df_search)

            else:
                print("Invalid input")




    if inp == 6:
        plt.figure(figsize=(10, 6))
        
        # Scatter plot
        plt.scatter(file_csv["Total_Percentage"], file_csv["Attendance_Percentage"], color='b', marker='o', label='Data Points')
        plt.title('Marks vs Attendance')
        plt.xlabel('Total Percentage')
        plt.ylabel('Attendance Percentage')
        plt.grid(True)
        plt.savefig("plot.png")
        plt.legend()
       
        
                                                                        ##
        x = file_csv["Total_Percentage"]                                ##
        y = file_csv["Attendance_Percentage"]                           ## ye red line ke liye h 
        m, b = np.polyfit(x, y, 1)                                      ## hta dio htana ho to 
        plt.plot(x, m*x + b, color='r', label='Line of Best Fit')       ##
                                                                        ##


        plt.show()

        if_download = "x" 
        while if_download.lower() not in ["yes" , "no"] :
            if_download = input("Would you like to save the plot ? (Yes or No ) : ")
            if(if_download == "yes") :
               plt.savefig("plot.png")
            else :
                continue

    if inp == 7 :
        print("result")
        total_avg = file_csv["Total_Percentage"].mean()
        attendance_avg = file_csv["Attendance_Percentage"].mean()
        highest_total = file_csv["Total_Percentage"].max()
        lowest_total = file_csv["Total_Percentage"].min()
        total_range = highest_total - lowest_total

        print(f"Average Total Percentage: {total_avg:.2f}")
        print(f"Average Attendance Percentage: {attendance_avg:.2f}")
        print(f"Highest Total Percentage: {highest_total:.2f}")
        print(f"Lowest Total Percentage: {lowest_total:.2f}")
        print(f"Range of Total Percentage: {total_range:.2f}")
                        


