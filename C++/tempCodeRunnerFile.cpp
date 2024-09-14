class A {
    public :
        string name ;
        int age ;

    A(string name , int age){
        this->name = name ;
        this->age = age ;
    }
};

class B : public A{
    public :
    int rollno ;

    void getinfo(){
        cout << "name : " << name << "\nage : " << age << "\n roll no : " << rollno << endl;
    }
};

int main(){

    Teacher t1 ;
    // // Teacher t2 ;
    
    // t1.name = "Raghav" ; 
    // t1.dept = "CSE" ; 
    // t1.subject = "Hello" ;
    // // t1.salary = 1000000;

    // Teacher t2(t1) ; // copy constructor
    // // t2.getInfo();

    // Teacher t3("Raghav" , "CSE" , "OOPS");
    // // t3.getInfo();




    // Inheritance

    B b1 ;
    b1.name = "Raghav" ;
    b1.age = 19 ;
    b1.getinfo();


    return 0;
}