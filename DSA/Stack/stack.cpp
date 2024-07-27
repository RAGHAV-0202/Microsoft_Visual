#include <bits/stdc++.h>
using namespace std;
// LAST IN, FIRST OUT

static int top = 0;

void getTop(int *arr){
    if(top == 0){
        // cout << arr[top] << endl;
        cout << "stack is empty" << endl;
    }else{
        cout << arr[top - 1] << endl;
    }
}

void push(int *arr , int n){
    arr[top] =  n;
    top++;
}

void pop(int *arr){
    arr[top] = 0 ;
    top--;
}

bool isEmpty(int *arr){
    for(int i = 0 ; i < 5 ; i++){
        if(arr[i] != 0){
            return false;
        }
    }
    return true;
}

bool isFull(int *arr){
    for(int i = 0 ; i < 5 ; i++){
        if(arr[i] == 0 ){
            return false;
        }
    }
    return true;
}


int main(){

    int arr[5] = {0};

    getTop(arr);
    push(arr , 5);
    getTop(arr);
    pop(arr);
    getTop(arr);
    push(arr, 5);
    push(arr, 2);
    push(arr, 3);
    getTop(arr);


    return 0;
}