#include <bits/stdc++.h>
using namespace std;

int Queue[10] = {0};
int front = -1 ;
int rear = -1;
const int size = 10 ;

bool isFull(){
    return (rear + 1) % size == front;
}
bool isEmpty(){
    return front == -1;
}

void push(int data){
    if(front == -1){
        Queue[0] = data ;
        front = 0 ;
        rear = 0;
        return;
    }

    if(rear < 9){
        Queue[++rear] = data ; 
        return;
    }
    if(rear - front == 9 || rear + 1 == front){
        cout << "Queue Overflow !!!" << endl;
        return ;
    }
    if(rear == 9){
        Queue[rear = 0] = data ;
    }
}

void pop(){
    if(isEmpty() ){
        cout << "Queue UnderFlow !!!" << endl;
        return;
    }
    Queue[front] = 0 ;
    if(front == rear){
        front = rear = -1;
    }else{
        front = (front+1) % size; 
    }
    
}

int getFront(){
    if(isEmpty()){
        return Queue[front];
    }else{
        cout << "Queue Empty !!!";
        return -1;
    }
}

void traverse(){
    for(int i = 0 ; i < 10 ;i++){
        cout << Queue[i] << " ";
    }
    cout << endl;
}




int main(){

    for(int i = 1 ; i <= 10 ; i++){
        push(i);
    }
    traverse();

    push(2);
    pop();
    pop();
    push(2);
    traverse();

    return 0;
}