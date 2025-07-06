#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data ;
    Node * next ;
    Node * prev ;

    public:
    Node (int data1 , Node* next1 , Node*prev1){
        data = data1;
        next = next1;
        prev = prev1;
    }
    Node(int data1){
        data = data1;
        next = nullptr;
        prev = nullptr;
    }
};
void traverse(Node * head){
    Node * temp = head;
    while(temp != nullptr){
        cout << temp->data << " ";
        temp = temp->next;
    }
}

// Node * convert(vector <int> arr){
//     Node * head = new Node (arr[0]);
//     Node * prev = head ;
//     Node * mover = head ;
//     for(int i = 1 ; i < arr.size() ; i++){
//         Node * temp = new Node(arr[i] );
//         mover->next = temp;
//         mover = temp ;
//         mover->prev = prev ;
//         prev = mover;
//     }
//     return head;
// }

Node * convert(vector <int> arr){
    Node * head = new Node (arr[0]);
    Node * prev = head ;
    for(int i = 1 ; i < arr.size() ; i++){
        Node * temp = new Node(arr[i] , nullptr , prev );
        prev->next = temp;
        prev = temp;
    }
    return head;
}

Node* deleteHead(Node * head){
    if(head == NULL || head -> next == NULL) return NULL ;

    Node * prev = head;
    head = head->next ;
    delete(prev); 
    head->prev = nullptr;

    return head;
}

Node * deleteTail(Node * head){
    if (head == NULL || head->next == NULL)
        return NULL;

    Node * tail = head;
    while(tail -> next != NULL){
        tail = tail->next;
    }
    Node * newTail = tail->prev ;
    newTail->next = nullptr;
    tail->prev = nullptr;
    delete(tail);
    return head;
    
}

int main(){
    vector <int> arr = {1,2,3,4,5,6};

    Node * head = convert(arr);

    // cout << head->next -> data << " " << head -> next ->next -> data << endl ;
    // cout << head-> next-> next -> prev ->data;


    // head = deleteHead(head);
    head = deleteTail(head);
    traverse(head);

    return 0;
}