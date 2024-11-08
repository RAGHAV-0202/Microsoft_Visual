#include <bits/stdc++.h>
using namespace std;

class Node {
    public :
        int data ; 
        Node * next ;
        Node * prev ;

    public :
        Node(int data , Node * next , Node * prev){
            this->data = data;
            this->next = next;
            this->prev = prev;
        }
        Node(int data){
            this->data = data;
            this->next = NULL;
            this->prev = NULL;
        }
        Node(int data , Node * next){
            this->data = data ;
            this->next = next;
        }
};

Node * ConvertToDLL(vector<int> arr){
    if (arr.size() < 1) return nullptr ;

    Node * head = new Node (arr[0] , NULL , NULL );
    Node * justLast = head ;
    for(int i = 1 ; i < arr.size() ; i++){
        Node * temp = new Node (arr[i] , NULL , justLast) ;
        justLast -> next = temp ;
        justLast = temp ; 
    }
    return head ;
}

void traverse(Node * head){
    Node * ptr = head ;
    while(ptr != NULL){
        cout << "Prev : " ;
        if(ptr->prev != NULL){
            cout << ptr->prev->data << " " ;
        }else{
            cout << "NULL" << " ";
        }
        cout << "Curr : " << ptr->data << " ";

        cout << "Next : ";
        if (ptr->next != NULL)
            cout << ptr->next->data;
        else
            cout << "NULL";
        cout << endl;

        ptr = ptr->next;
    }
    cout << endl;
}

void DataTraverse(Node * head){
    Node * ptr = head ;
    while(ptr != NULL){
        cout << ptr->data << " ";
        ptr = ptr->next;
    }
    cout << endl; 
}

void InsertAtHead(Node * &head , int data){
    if(head == NULL){
        Node *newHead = new Node(data, head, NULL);
        head = newHead ;
        return ; 
    }
    Node *newHead = new Node(data , head , NULL) ;
    head->prev = newHead ;
    head = newHead; 
}
void InsertAtLast(Node *head , int data){
    if(head == NULL){
        InsertAtHead(head , data);
        return;
    }
    Node * last = new Node (data);
    Node * temp = head ;
    while(temp->next != NULL){
        temp = temp->next ;
    }
    temp->next = last;
}

void InsertAtN(Node * &head , int data , int n){
    if(n == 0){
        Node * temp = new Node(data , head , NULL);
        head = temp ; 
        return ;
    }
    Node * ptr = head ;
    int counter = 0 ;
    while(ptr != NULL && counter < n - 1){
        ptr = ptr->next ;
        counter ++ ;
    }

    Node * temp = new Node(data , ptr->next , ptr );
    if(ptr -> next != NULL){
        temp->next->prev = temp;
    }
    ptr->next = temp ;
}


int main(){

    vector <int> arr = {1,2,3,4,5,6,7,8};
    Node *head = ConvertToDLL(arr);

    // traverse(head);
    DataTraverse(head);

    InsertAtHead(head , 5);
    DataTraverse(head);

    InsertAtLast(head , 10);
    DataTraverse(head);

    InsertAtN(head , 7 , 10);
    DataTraverse(head);


    return 0;

}