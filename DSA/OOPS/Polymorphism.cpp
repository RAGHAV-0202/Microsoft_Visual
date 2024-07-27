#include <bits/stdc++.h>
using namespace std;

// polymorphism is the ability of the objects to take on different forms or behave in different ways depending on the context in which they are used

// they are of 2 types : compile time polymorphism , run time polymorphism

// class Print{
//     public:
//     void show(int x){
//         cout << "int : " << x << endl;
//     }
//     void show(char x){
//         cout << "char : " << x << endl;
//     }
// };



// run time polymorphism
class Parent{
    public:
    void getInfo(){
        cout << "Parent class"<< endl;
    }
};

class Child : public Parent{
    public : 
    void getInfo(){{
        cout << "Child class" << endl;
    }}
};


int main(){
    Parent c1;
    c1.getInfo();

    return 0;
}