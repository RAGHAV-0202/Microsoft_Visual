#include <bits/stdc++.h>
using namespace std;

class Node{
    public :
    int data ;
    Node * next ;

    public :
    Node(int data , Node * next){
        this->data = data;
        this->next = next;
    }

    Node(int data){
        this->data = data ;
        this->next = NULL ;
    }
};

Node* arr2LL(vector<int> arr){
    if(arr.size() < 1) return nullptr ;

    Node * head = new Node(arr[0]);
    Node * current = head;
    for(int i = 1 ; i < arr.size() ; i++){
        Node * temp = new Node(arr[i]);
        current->next = temp ;
        current = temp;        
    }
    return head;
}

void traverse(Node * head){
    Node * pointer = head;
    while(pointer!=NULL){
        cout << pointer->data << " " ;
        pointer = pointer->next;
    }
    cout << endl; 
}

// OPERATIONS

void insertAtBeginning(Node * &head , int data){
    if(head == nullptr) {
        head = new Node (data);
        return;
    }
    Node * temp = new Node (data , head);
    head = temp ;
}

void insertAtLast(Node * &head , int data){

    Node* last = new Node(data);
    if (head == nullptr) {
        head = last; 
        return;
    }

    Node * Current = head ;
    while(Current->next != NULL){
        Current = Current->next ;
    }
    Current->next = last;
}

void insertAtN(Node * head , int data , int posi){

    if(posi < 0) return ;

    if(posi == 0){
        Node * temp = new Node (data , head);
        head = temp ;
        return ;
    }

    if(head == nullptr) return ;

    int counter = 0 ; 
    Node * Current = head ;
    while(Current->next != NULL && counter < posi - 1){
        counter++;
        Current = Current->next ;
    }

    Node *temp = new Node (data , Current -> next);
    Current->next = temp;

}

void deleteAtN(Node * &head , int posi){
    Node * Current = head ;
    if(posi == 0){
        head = Current->next;
        return ;
    }
    int counter = 0 ;
    while(Current->next != NULL && counter < posi - 1){
        counter++;
        Current = Current->next ;
    }
    Node * deleted = Current->next ;
    Current->next = Current->next->next ;
    free(deleted);
}

void Reverse(Node * &head){
    Node * Current = head ;
    Node * prev = NULL; ;
    Node * next ;

    while(Current != NULL){
        next = Current -> next ;
        Current -> next = prev ;
        prev = Current ;
        Current = next;
    }
    head = prev;
}

void traverse_recursively(Node * ptr){
    if(ptr == NULL) return ;
    cout << ptr->data << " " ;
    traverse_recursively(ptr->next);
}

void traverse_recursively_reverse(Node * ptr){
    if(ptr == NULL) return ;
    traverse_recursively_reverse(ptr->next);
    cout << ptr->data << " " ;
}


int main(){

    vector <int> arr = {1,2,3,4,5,6,7};
    Node * head  =  arr2LL(arr);
    cout << "Normal  : " ;
    traverse(head);

    insertAtBeginning(head , 0);
    cout << "At beg  : " ;
    traverse(head);

    insertAtLast(head , 0);
    cout << "At lst  : ";
    traverse(head);

    insertAtN(head , 0 , 3);
    cout << "At P=3  : ";
    traverse(head); 

    deleteAtN(head , 0);
    cout << "At D=5  : ";
    traverse(head);

    Reverse(head);
    cout << "Reverse : " ;
    traverse(head);

    Node * ptr = head ;

    cout << "Rec trv : " ;
    traverse_recursively(ptr);

    ptr = head;
    cout << endl << "Rev Rec : ";
    traverse_recursively_reverse(ptr);

    return 0;
}