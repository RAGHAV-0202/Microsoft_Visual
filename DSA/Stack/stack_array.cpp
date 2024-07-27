#include <bits/stdc++.h>
using namespace std;

const int Max_Size = 100 ;
int A[Max_Size];
int top = -1;

void traverse(){
    for(int i = 0 ; i <= top ; i++){
        cout << A[i] << " " ;
    }
    cout << endl;
}

void Push(int x){
    if(top == Max_Size - 1){
        cout << "Error: Stack Overflow" << endl;
        return;
    }
    A[++top] = x ;

    traverse() ;
}

void Pop(){
    if(top == - 1){
        cout << "Error: No element to pop" << endl;
        return;
    }
    top --;
    traverse();
}

int Top(){
    return A[top];
}



int main(){
    Push(2);
    Push(5);
    Push(10);
    Pop();
    Push(12);
}