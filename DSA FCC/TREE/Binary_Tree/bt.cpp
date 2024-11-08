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

int findMin(Node * root){
    if(root == NULL) return 0 ;
    Node * temp = root ;
    int min = INT32_MAX ;
    while(temp != NULL){
        min = temp->data ;
        temp = temp->left ;
    }
    return min ;
}

int findMax(Node * root){
    if(root == NULL) return 0 ;
    Node * temp = root ;
    int min = INT32_MAX ;
    while(temp != NULL){
        min = temp->data ;
        temp = temp->right ;
    }
    return min ;
}

int findHeight(Node * root){
    if(root == NULL){
        return -1;
    }
    return max(findHeight(root->left) ,findHeight(root->right)) +1 ;
}

int findDepth(Node * root){
    int depth = 0 ;
}
bool isSubTreeLesser(Node * root , int value){
    if(root == NULL) return true ;
    if(root->data <= value && isSubTreeLesser(root->left , value) && isSubTreeLesser(root->right , value)){
        return true;
    }else{
        return false;
    }
}

bool isSubTreeGreater(Node * root , int value){
    if(root == NULL) return true ;
    if(root->data > value && isSubTreeGreater(root->left , value) && isSubTreeGreater(root->right , value)){
        return true;
    }else{
        return false;
    }
}

bool isSearchTree(Node * root){
    if(root == NULL) return true ;
    if(
        isSubTreeLesser(root->left , root->data) && 
        isSubTreeGreater(root->right , root->data) && 
        isSearchTree(root->left)  && 
        isSearchTree(root->right)){
        return true;
    }else{
        return false;
    };
}

void deleteNode(Node * &root , int data){
    if(root == NULL) return ;
    if(data < root->data) deleteNode(root->left , data) ;
    else if (data > root -> data) deleteNode(root->right , data);
    else{
        if(root->left == NULL && root->right == NULL){
            delete root ; 
            root = NULL;
        }else if (root->left == NULL){
            Node * temp = root;
            root = root->right ;
            delete temp;
        }else if(root ->right == NULL){
            Node * temp = root; 
            root = root->left ; 
            delete temp;
        }else{
            Node *temp = new Node(findMin(root->right));
            root->data = temp->data ;
            deleteNode(root->right,temp->data );
        }
    }
    
}

int main(){

    Node * root = NULL;
    vector<int> arr = {15,10,20,25,8,12};
    for(int i = 0 ; i < arr.size() ; i++){
        insert(root , arr[i]);
    }

    cout << findMin(root) << endl;
    cout << findMax(root) << endl;

    // cout << findHeight(root) << endl;
    // cout << isSearchTree(root) << endl;

    deleteNode(root, 25);
    cout << findMax(root) << endl;

    return 0;
}