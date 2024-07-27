#include <bits/stdc++.h>
using namespace std;

// encapsulation : is the wrapping up of the data & member function in a single unit called class.
//constructor : special method invoked at the time of object creation.
// used for initialisation , same as class , they doesnt have a return type , only called once , memory allocation happens when constructor is called

class bank{
    public :
    bank(){
        balance = 0 ;
        loan = 0 ;
    }
    // bank(string a , string n , string b){
    //     account_no  = a ;
    //     name = n ; 
    //     branch = b ;
    //     balance = 0 ;


    //     // this->name = n ;
    //     // this->branch = b ;
    //     // this->balance = 0 ; 
    //     // this->account_no = a ;
    // }
    public :
    string account_no ;
    string name;
    string branch;

    private:
    int balance;
    int loan ;

    public:
    void deposit(int amt){
        balance += amt;
        cout << "updated balance is : " << balance << endl;
    }
    void debit(int amt){
        if(amt <= amt){
            balance -=amt ;
            cout << "updated balance is : " << balance << endl;
        }else{
            cout << "insufficient balance" << endl;
        }
    }
    int checkBalance(){
        return balance ;
    }
    void takeLoan(int amt){
        if(amt > 10*checkBalance()){
            cout << "Not eligible for taking a loan" << endl;
        }else{
            cout << "Your loan request has been accepted " << endl;
            loan+=amt ;
            deposit(amt);
        }
    }
    void payLoan(int amt){
        if(amt > loan){
            int leftover = amt - loan ;
            loan = 0 ;
            cout << "Loan amount paid" << endl;
            deposit(leftover);
        }else{
            loan -= amt;
            cout << "amount left to be paid : " << loan << endl;
        }
    }

    void introduce(){
        if(!account_no.empty() && !branch.empty() && !name.empty()){
            int x = checkBalance();
            cout << "account : " << account_no << endl << "balance : " << x << endl;
        }
    }

};


class student {
    public :
    string name ;
    double *cgpaPtr;

    student(string name , double cgpa){
        this->name = name ;
        // this-> cgpa = cgpa ; 
        cgpaPtr = new double ;
        *cgpaPtr = cgpa;
    }

    // student(student &obj){
    //     this->name = obj.name ;
    //     this->cgpaPtr = obj.cgpaPtr ;
    // }
 
    //deep copy to create multiple copy with same name and different cgpa ptr
    student(student &obj){
        this->name = obj.name ;
        cgpaPtr = new double;
        *cgpaPtr = *(obj.cgpaPtr) ;
    }

    void getInfo() {
        cout << "name : " << name << endl;
        cout << "cgpa : " << cgpaPtr << endl;
         
    }
};


int main(){

    // bank p1("3213" , "asd" , "asd") ;
    bank p1 ;
    p1.account_no = "3675740000" ;
    p1.name = "abcd" ;
    p1.branch = "sector 12";

    p1.deposit(10);
    // p1.debit(802);
    // p1.takeLoan(20000);

    // p1.payLoan(21000);


    p1.introduce();

    return 0;
}