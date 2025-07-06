#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data ;
    Node * next ;

    public :
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

Node * Convert(vector <int> arr){
    Node * head = new Node (arr[0]);
    Node * mover = head ;
    for(int i = 1 ; i < arr.size() ; i++){
        Node * temp = new Node(arr[i]);
        mover->next = temp ;
        mover = temp;
    }
    return head ;
}

void traverse (Node * head){
    Node * temp = head ;
    while(temp != nullptr){
        cout << temp->data << " " ;
        temp = temp->next ;
    }
}

int main(){

    vector <int> array = {1,2,3,4,5,6};
    Node * head = Convert(array);
    // cout << head << " " << head -> data << " " << head -> next << " " << head -> next -> data << endl; 
    traverse(head);


    return 0;
}