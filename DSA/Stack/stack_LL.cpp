#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data; 
    Node * next;

    public:
    Node(int data1 , Node * next1){
        data = data1;
        next = next1;
    }
    
    public:
    Node(int data1){
        data = data1;
        next = nullptr;
    }
};
Node * top = NULL ;

void Push(int x){
    Node * temp = new Node(x);
    temp->next = top;
    top = temp;
}

void Pop(){
    if(top == NULL) {
        cout << "Stack is empty" << endl;
        return;
    }
    Node * temp = top;
    top = top -> next ;
    delete(temp);
}

void traverse(){
    Node * temp = top;
    while(temp != NULL){
        cout << temp->data << " " ;
        temp = temp->next;
    }
    cout << endl;
}

void Top(){
    if(top == NULL){
        cout << "Stack is empty" << endl;
        return;
    }
    cout << top->data << endl;
}
bool isEmpty(){
    if(top == NULL){
        return true;
    }
    return false;
}

int main(){

    Push(5); traverse();
    Push(2); traverse();
    Push(6); traverse();
    Push(9); traverse();
    Pop(); traverse();
    Top();

    return 0;
}