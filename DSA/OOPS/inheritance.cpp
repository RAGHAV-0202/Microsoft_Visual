#include <bits/stdc++.h>
using namespace std;

// parents's constructor is called first and then child's : base phle , derived baadme

// destructor me derived phle , base baad me

class Person{
    public:
    string name;
    int age;

    // Person(string name , int age){
    //     this->name = name ;
    //     this->age = age ;
    // }
    public:
    Person(string name , int age){
        this->name = name;
        this->age = age;
        // cout << "parent constructor" << endl;
    }

    void getInfo(){
        cout << "name : " << name << endl;
        cout << "age : " << age << endl;
    }


    // ~Person(){
    //     cout << "parent destructor" << endl;
    // }    

};
class Student : public Person{
    public:
    string roll_no ;

    Student(string name , int age , string roll_no): Person(name , age){
        this->roll_no = roll_no;
        this->name = name;
        this->age = age;
    }

    // ~Student(){
    //     cout << "child destructor" << endl; 
    // }


    void getInfo(){
        cout << "name : " << name << endl;
        cout << "age : " << age << endl;
        cout << "roll_no : " << roll_no << endl;
    }

};



// types
// multiple inheritance 

class TeacherAssistant : public Person , public Student{
    string subject ;

};
// hierarchial inheritance

class A{
    string name;
    int age;
};

class B : public A{
    string occupation;
} ;

class C : public A{
    double netWorth;
};

// Hybrid Inheritance

// person -> student -> Graduated Student 
//     ^           ^
//     |           |
//  teacher   ->  TA

int main(){
    Student s1("Raghav" , 19 , "2823179") ;

    s1.getInfo(); 

    return 0;
}