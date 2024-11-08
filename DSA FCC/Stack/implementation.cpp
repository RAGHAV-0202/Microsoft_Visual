#include <bits/stdc++.h>
using namespace std;

class Node {
    public :
    int data ;
    Node * next ;

    Node(int data , Node * next = NULL){
        this->data = data ;
        this->next = next ;
    }
};

Node * head = nullptr ;
Node * current = nullptr ;

void push(int data){
    if(head == nullptr){
        Node * temp = new Node (data);
        head = temp ; 
        current = head;
        return;
    }

    Node * temp = new Node (data);
    current->next = temp;
    current = temp;
}

void pop(){
    if(head == nullptr){
        cout << "Stack underflow !!!" << endl;
        return;
    }
    if(head == current){
        delete(head);
        head = nullptr ;
        current = nullptr ;
        return;
    }
    Node * temp = head ;
    while(temp->next != current){
        temp = temp->next ;
    }
    delete(current);
    current = temp ;
    temp->next = nullptr ;
}
int front(){
    return current->data ;
}
bool isEmpty(){
    return current == nullptr ;
}

void traverse(){
    Node * temp = head ;
    while(temp!=NULL){
        cout << temp->data << " " ; 
        temp = temp->next ;
    }
    cout << endl;
}

int main(){
    push(2);
    push(3);
    traverse();

    cout << isEmpty() << endl;

}