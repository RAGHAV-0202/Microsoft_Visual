#include <iostream>
using namespace std;

int fibo(int n){
    // if(n == 0){
    //     return 0 ;
    // }else{
        int next = 0 ;
        int first = 0 ; 
        int second = 1 ;
        for(int i = 0 ; i < n ;i++ ){
            next = first + second ; 
            second = first ;
            first = next ;
        }
        return next;
    // }
};


int main(){
    cout << fibo(0) << endl;
}