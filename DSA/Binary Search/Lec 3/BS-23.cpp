#include <bits/stdc++.h>
using namespace std;

// BS 23. Row with maximum number of 1s | Binary Search on 2D Arrays
int lowerBound(vector<int> arr , int k){
    int low = 0 ;
    int high = arr.size() - 1 ;
    int ans = arr.size() ;
    while(low <= high){
        int mid = low + (high - low ) / 2;
        if(arr[mid] >= k){
            ans = mid ;
            high = mid - 1 ;
        }else{
            low = mid + 1;
        }
    }
    return ans ; 
}

int rowWithMax1s(vector<vector<int>> &arr) {;
    int index = -1 ;
    int count = -1;
    for(int i = 0 ; i < arr.size() ; i++){
        int c = arr[i].size() - (lowerBound(arr[i] , 1));
        if(c > count){
            count = c ;
            index = i ;
        }
    }
    return index ;
}

int main(){
    vector<vector<int>> arr = {
        {0,1,1,1}, 
        {0,0,1,1}, 
        {1,1,1,1}, 
        {0,0,0,0}
    };

    cout << rowWithMax1s(arr) << endl;
}