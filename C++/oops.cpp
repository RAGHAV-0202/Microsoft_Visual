#include <bits/stdc++.h>
using namespace std;

class Teacher{

    //constructor : gets called when object is created ,
    //non parameterized
    public : 
    Teacher(){
        cout << "this is from constructor" << endl ;
        dept = "CSE";
    }
    // parameterized
    // Teacher(string n , string d , string s){
    //     name = n ;
    //     dept = d ;
    //     subject = s ;
    // }
            // use of this
            Teacher(string name , string dept , string subject){
                this->name = name ;
                this->dept = dept ;
                this->subject = subject ;
            }

    // copy constructor 

    Teacher(Teacher &obj) { 
        cout << "custom" << endl;
        this->name = obj.name ;
        this->dept = obj.dept ;
        this->subject = obj.subject ;
    }


    // properties or attributes
    public :
        string name ;
        string dept;
        string subject ;

    private : 
        double salary ;

    // methods
    public : 
        void changeDept(string newDept){
            dept = newDept ;
        };

         // setter function to set values to a private class
        void setSalary(double s){
            salary = s ;
        }
        void getSalary(){
            cout << salary  << endl;
        }

        void getInfo(){
            cout << "Name : " << name << "\nDept : " << dept << "\nSubject : " << subject ; 
        }



        ~Teacher(){
            cout << "destructor" << endl;
        }
};


// Access modifiers are speacial keywors used to define access of properties and methods in a class
// by default everything is private
// private -> usable only in class
// public -> usable everywhere to everyone (within and out of the class)
// protected -> data & methods accessable in class and derived class


// encapsulation : it is the wrapping up of the data & member functions in a sungle unit called class
// encalpulation :  data + methods in a class , declaration of properties and methods in a class , it helps in data hiding using access modifers


// EXAMPLE OF ENCAPSULATION 
class accound{
    public :
        string id ; 
        string username ;

    private :
        double balance ;
        string password ; 
};

// Constructor : it is a special method automatically invoked at the time of initialisation 
// has same name as a class
// has no return type
// gets called when object is created , can be used to set some values
// memory allocation is done when constructor is called

// there are three types of constructor 
// non parameterised
// parameterized
// copy constructor


// there are two types of copies , deep and shallow
// shallow : copying values from one to another
// deep :  

int main(){

    Teacher t1 ;
    // Teacher t2 ;
    
    t1.name = "Raghav" ; 
    t1.dept = "CSE" ; 
    t1.subject = "Hello" ;
    // t1.salary = 1000000;

    Teacher t2(t1) ; // copy constructor
    // t2.getInfo();

    Teacher t3("Raghav" , "CSE" , "OOPS");
    // t3.getInfo();


    return 0;
}