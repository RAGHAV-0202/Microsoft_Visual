#include <bits/stdc++.h>
using namespace std;

struct Node{
    int data;
    Node* link;



};

int main(){
    // Node * A ;
    // A = NULL;

    // Node* temp = (Node*)malloc(sizeof(Node));    // Node * temp = new Node()
    // (*temp).data = 2;       // temp->data = 2
    // (*temp).link = NULL ;   // temp->link = NULL

    Node * A ;
    Node * B;

    Node * temp = new Node();
    temp-> data = 2 ; 
    temp-> link = NULL;

    A = temp ;

    cout << A->data << endl;

    temp = new Node();
    temp->link = NULL;
    temp->data = 4 ;

    B = temp ;
    

    cout << B->data << endl;

    return 0;
}