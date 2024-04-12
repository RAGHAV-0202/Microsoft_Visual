#include <stdio.h>
#include <iostream>
#include <vector>
#include <cstdlib>
#include <random>
using namespace std;

int function(int n ){
    int i ;
    if(n<=0){
        return 0;
    }else{
        random_device rd;
        mt19937 gen(rd());
        uniform_int_distribution<> dis(1,n-1 );
        i = dis(gen);
        printf("this\n");
        return function(i) + function(n - 1 - i);
    }
}

int main(){

    int i =  function(6);
    std::cout<< i << " " << endl ;

    return 0;
}