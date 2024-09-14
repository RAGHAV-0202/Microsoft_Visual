#include <stdio.h>
#include <iostream>
#include <vector>
#include <cstdlib>
#include <random>
using namespace std;


void insert(int arr[] , int &len , int posi , int num){
    for(int i = len - 1 ; i >= posi ; i--){
        arr[i+1] = arr[i];
    }
    arr[posi] = num;

    len++;
}

void deleteElem(int arr[] ,  int &len ,int posi){
    for(int i = 0 ; i < len ; i++){
        if(i < posi){
            continue;
        }else{
            arr[i] = arr[i+1];
        }
    }
    len--;
}


int main(){

    int arr[10] = {1,2,3,4,5};
    int len = 5 ;
    // insert(arr , len , 2 , 10 );
    deleteElem(arr , len , 2);

    for(int i = 0 ; i < len ; i++){
        cout << arr[i] << " " ;
    }



    return 0;
}