#include <bits/stdc++.h>
using namespace std;

class Student{
    public :
        string name ;
        // double cgpa;
        double* cgpaPtr ; 

        Student(){

        }

        Student(string name , double cgpa){
            this->name = name;
            cgpaPtr = new double(cgpa); // Dynamically allocate memory for CGPA
        }
        Student(Student &obj){
            this->name = obj.name ;
            // this->cgpaPtr = obj.cgpaPtr; // shallow

            cgpaPtr = new double;
            *cgpaPtr = *obj.cgpaPtr ;
        }
        void getInfo(){
            cout << "Hello my name is " << name << " and i have " << *cgpaPtr << " cgpa \n";
        }
};

int main(){
    Student s1("Raghav", 8.14);
    s1.getInfo();

    Student s2(s1);
    *(s2.cgpaPtr) = 9.2;
    s2.getInfo();
    s1.getInfo(); 

    return 0;
}