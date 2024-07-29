#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data ;
    Node * left ;
    Node * right ;

    public:
    Node(int val){
        data = val ;
        left = NULL;
        right = NULL ;
    }
    public :
    Node(int val , Node * left1 , Node * right1){
        data = val ;
        left = left1 ;
        right = right1;
    }
};

int main(){

    Node * root = new Node(1);
    root->left = new Node(2) ;
    root->right = new Node(3) ;    

    root->left->right = new Node(5);


    return 0 ;
}