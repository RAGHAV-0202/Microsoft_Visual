#include <bits/stdc++.h>
using namespace std;


class Node{
    public :
    int data ;
    Node * next ;

    public:
    Node(int data1 , Node* next1 ){
        data = data1 ;
        next = next1;
    }

    Node(int data1){
        data = data1;
        next = nullptr;
    }
};

Node *convert(vector <int> arr){
    Node * head = new Node(arr[0]);
    Node * mover = head ;
    for(int i = 1 ; i < arr.size() ; i++){
        Node * temp = new Node (arr[i]);
        mover->next = temp;
        mover = temp; 
    }
    return head;
}

void traverse(Node * head){
    Node * temp = head;
    while(temp != nullptr){
        cout << temp->data << " ";
        temp = temp->next;
    }
}
int length(Node * head){
    Node * temp = head;
    int count = 0 ;
    while(temp != nullptr){
        temp = temp->next;
        count++;
    }
    return count;
}

Node* deleteHead(Node * head){
    if(head == NULL) return head ;
    Node * temp = head ;
    head = head->next;
    delete temp;
    cout << "new head : " << head->data << endl;

    return head;
}

Node * deleteTail(Node * head){
    if(head == NULL || head->next == NULL) return head;
    Node * temp = head ;
    while(temp->next->next != NULL){
        temp = temp->next;
    }
    delete temp->next ;
    temp->next = nullptr ;
    return head;
}

Node * deleteKthElem(Node * head , int k){
    if(head == NULL) return head ;
    Node *temp = head;
    if(k == 0){
        head = head->next;
        delete temp;
        return head;
    }
    int count = 0 ; 

    while(temp != nullptr){
        if(count + 1 == k){
            temp->next = temp->next->next ; 
            break;
        }
        temp = temp->next;
        count++;
    }
    return head;
}
Node * insertHead(Node * head , int value){
    Node *added = new Node(value, head);
    return added;
}

Node * insertTail(Node * head , int value){
    if(head == NULL) return new Node(value);

    Node *temp = head ;
    while(temp->next != NULL){
        temp = temp->next ;
    }
    Node * newNode = new Node(value , nullptr);
    temp->next = newNode ;
    return head;
}


Node * insertAtK(Node * head , int k , int value){
    if(head == NULL) return new Node(value , nullptr);
    if(k == 0){
        Node * added = new Node(value , head);
        return added;
    }
    Node * temp = head;
    int count = 1 ;
    while(temp->next != nullptr){
        if(count + 1 == k){
            Node * newNode = new Node(value , temp->next) ;
            temp->next = newNode;
            return head;
        }
        temp = temp->next;
        count++;
    }
    Node *newNode = new Node(value);
    temp->next = newNode ;
    return head;
}

int main(){
    // Node* a = new Node(2,nullptr);

    // Node * b = new Node(4 , nullptr);
    // a->next = b;

    // Node * c = new Node(6 , nullptr);
    // b->next = c;

    // Node * d = new Node(8 , nullptr);
    // c->next = d;

    // cout << a << " " << a->data << " " << a->next << endl;
    // cout << b << " " << b->data << " " << b->next << endl;
    // cout << c << " " << c->data << " " << c->next << endl;
    // cout << d << " " << d->data << " " << d->next << endl;



    vector <int> arr = {0,1,2,3,4,5} ;
    Node * head = convert(arr);
    // 1 manually 
    // cout << head << " " << head->data << " " << head->next << endl;
    
    // 2 traverse
    // traverse(head);

    // 3 length of LL
    // cout << endl  << length(head) << endl;

    // 4 delete head
    // head = deleteHead(head);
    // head = deleteHead(head);

    // 5 remove tail
    // Node * removeTail = deleteTail(head);

    // 6 delete at k
    // Node * kthDeleted = deleteKthElem(head , 56);

    // 7  inserting at the head
    // head = insertHead(head , 100);

    // 8 insert at tail
    // head = insertTail(head, 1000);

    // 9 insert at k
    head = insertAtK(head , 9 , 300);

    traverse(head);
}