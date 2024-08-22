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

void preOrderTraversal(Node * root){
    if(root == NULL){
        return ;
    }
    cout << root->data << " " ;
    preOrderTraversal(root->left);
    preOrderTraversal(root->right);
}


void inOrderTraversal(Node * root){
    if(root == NULL){
        return ;
    }
    inOrderTraversal(root->left);
    cout << root -> data << " ";
    inOrderTraversal(root->right);
}


void postOrderTraversal(Node * root){
    if(root == NULL){
        return ;
    }
    postOrderTraversal(root->left);
    postOrderTraversal(root->right);
    cout << root -> data << " ";
}


vector<vector<int>> BFS(Node * root){
    vector<vector<int>> ans ;
    if(root == NULL){
        return ans ;
    }
    queue<Node*> q ;
    q.push(root);
    while(!q.empty()){
        int size = q.size() ;
        vector<int> level ;
        for(int i = 0 ; i < size ; i++){
            Node * node = q.front();
            q.pop() ;
            if(node->left != NULL){ 
                q.push(node->left);
            } 
            if (node->right != NULL){
                q.push(node->right);
            }
            level.push_back(node->data);
        }
        ans.push_back(level);
    }
    return ans;
}


void practiceDFS(Node * root){
    // preorder
    // if(root == NULL) return ;
    // cout << root->data << " " ;
    // practice(root->left) ;
    // practice(root->right);

    // inorder
    // if(root == NULL) return ;
    // practice(root->left) ;
    // cout << root->data << " " ;
    // practice(root->right);

    //post order
    // if(root == NULL) return ;
    // practice(root->left) ;
    // practice(root->right);
    // cout << root->data <<  " " ;
}

void iterativePreOrder(Node *root){
    if(root == NULL) return ;

    stack <Node*> stack ;
    stack.push(root);
    while(!stack.empty()){
        int size = stack.size() ; 
        for(int i = 0 ; i < stack.size() ; i++){
            Node* top = stack.top();
            cout << top->data << " ";
            stack.pop();
            if(top->right) stack.push(top->right);
            if(top->left) stack.push(top->left);
        }
    }
}

void iterativePostOrder(Node * root){
    if(root == NULL) return ;
    stack<Node*> stack;

    stack.push(root);

    while(!stack.empty()){
        // stack.push()
    }
    
}



int main(){

    // Level 1 
    Node * root = new Node(1);

    // Level 2 
    root->left = new Node(2); 
    root->right = new Node(3);

    // Level 3 
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(9); 
    root->right->right = new Node(8) ; 

    // Level 4
    root->left->left->left = new Node(6); 
    root->left->left->right = new Node(7);
    root->left->right->left = new Node(10) ; 
    root->right->left->left = new Node(11) ;
    root->right->left->right = new Node(12) ; 
    root->right->right->left = new Node(13);
    root->right->right->right = new Node(14) ;

    // Left 5 
    root->left->left->right->left = new Node(15) ;
    root->left->left->right->right = new Node(16) ;

    preOrderTraversal(root);
    cout << endl;
    iterativePreOrder(root);
    cout << endl;
    inOrderTraversal(root);
    cout << endl ;
    postOrderTraversal(root);
    cout << endl ;
    practiceDFS(root);

    return 0;
}