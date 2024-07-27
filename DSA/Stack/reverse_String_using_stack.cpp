#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    char data;
    Node * next;
    
    public:
    Node(char data1 , Node * next1){
        data = data1;
        next = next1;
    }

    public:
    Node(char data1){
        data = data1;
        next = nullptr;
    }
};

Node * top = NULL ;

void Push(char x){

    Node * temp = new Node(x);
    temp->next = top ;
    top = temp;
}

void Pop(){
    if(top == NULL) {
        cout << "Error : Stack is empty" << endl;
        return;
    }
    Node * temp = top;
    top = top -> next ;
    delete(temp);
}
void Top(){
    if(top == NULL){
        cout << "Error : Stack is empty" << endl ;
        return;
    }
    cout << top->data << "";
}

int main(){

    string to_be_reversed = "Hello" ;
    for(int i = 0 ; i < to_be_reversed.length() ; i++){
        Push(to_be_reversed[i]);
    }
    while(top != NULL){
        Top() ;
        Pop();
    }

    return 0;
}