#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> arr = {1,2,3,4,5,6};
    int target = 2 ;
    int pos = -1 ;
    for(int i = 0 ; i < arr.size() ; i++){
        if(arr[i] == target){
            pos = i ; 
            cout << "Present at index " << pos << endl;
            return ;
        }
    }
    if(pos == -1){
        cout << "Not Present in the array " << endl ;
    }

    return 0;
}