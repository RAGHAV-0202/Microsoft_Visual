#include <bits/stdc++.h>
using namespace std;

class Node{
    public :
    int data ;
    Node * left ;
    Node * right ;

    public : 
        Node(int data , Node * left = NULL , Node * right = NULL){
            this->data = data ;
            this->left = left ;
            this->right = right;
        }
};

void insert(Node * &root , int data ){
    if(root == NULL){
        root = new Node(data);
        return ;
    }else if(data <= root->data){
        insert(root->left , data);
    }else{
        insert(root->right, data);
    }

}

Node * createBT(vector<int> arr){
    Node * root = new Node(arr[0]) ;
    Node * temp = root ;
    queue <Node*> q ;
    q.push(temp) ;
    int i = 1 ;
    while(i < arr.size()){
        Node * current = q.front();
        q.pop();
        if(i < arr.size()){
            current->left = new Node (arr[i++]);
            q.push(current->left);
        }
        if(i < arr.size()){
            current ->right = new Node(arr[i++]);
            q.push(current->right);
        }
    }
    return root;
}

void BFS(Node * root){
    if(!root) return ;
    Node * temp = root ;
    queue <Node*> q ;
    q.push(temp) ;
    while(!q.empty()){
        Node * current = q.front();
        q.pop();
        cout << current -> data << " " ;

        if(current->left){
            q.push(current->left);
        }
        if(current->right){
            q.push(current->right);
        }
    }
}

void preOrder(Node * root){
    if(root == NULL) return;
    cout << root->data << " " ;
    preOrder(root->left);
    preOrder(root->right);
}

void inOrder(Node * root){
    if(root == NULL) return;
    inOrder(root->left);
    cout << root->data << " " ;
    inOrder(root->right);
}

void postOrder(Node * root){
    if(root == NULL) return;
    postOrder(root->left);
    postOrder(root->right);
    cout << root->data << " " ;
}




int main(){

    Node * root = NULL;
    vector<int> arr = {1,2,3,4,5,6,7,8,9,10};
    for(int i = 0 ; i < arr.size() ; i++){
        insert(root , arr[i]);
    }

    

    root = createBT(arr);
    BFS(root) ;
    cout << endl;
    preOrder(root);
    cout << endl;
    inOrder(root);
    cout << endl;
    postOrder(root);

    return 0;
}