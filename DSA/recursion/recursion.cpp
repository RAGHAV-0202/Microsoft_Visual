#include <iostream>
using namespace std;

void something_N_times(int n ){
    if(n == 0){
        return;
    }else{
        cout << "Hello World !!!" << endl ; 
        return something_N_times(n-1) ;
    }
}

void numbers_till(int max , int num ){
    if(num > max){
        cout << endl ;
        return;
    }else{
        cout << num++ <<  " " ; 
        return numbers_till(max , num) ;
    }

}

void numbers_till2(int n){
    if(n <= 0){
        return ;
    }else{
         numbers_till2(n-1);
         cout << n << " "; 
    }
}

int sum(int n ){
    if(n <= 0){
        return 0 ;
    }else{
        return sum(n-1)+ n;
    }

}

int factorial(int n){
    if(n == 0 || n == 1){
        return 1 ;
    }else{
        return factorial(n-1) * n;
    }
}

int fibo(int n){
    if(n == 1 || n == 2){
        return 1 ;
    }else{
        return fibo(n - 1 ) + fibo(n -2);
    }
}

int main(){

    something_N_times(6);
    numbers_till(6,1) ;
    numbers_till2(6);
    cout << endl << "sum : "<<sum(5) << endl;
    cout << "factorial : " << factorial(5) << endl ;
    cout << "fibo : " << fibo(3) << endl;

    return 0;
}