#include <bits/stdc++.h>
using namespace std;

int findSingle(vector <int> arr){
    int low = 0 ;
    int high = arr.size() - 1 ;

    if(arr.size() == 1) return arr[0];
    if(arr[0] != arr[1]) return arr[0];
    if(arr[high - 1 ] != arr[high]) return arr[high];

    while(low <= high){
        int mid = (low + high) / 2 ;

        if(arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]){
            return arr[mid];
        }
        if(mid % 2 == 1 && arr[mid] == arr[mid - 1] || (mid % 2 == 0 && arr[mid] == arr[mid+1])){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
}

int main(){
    vector <int> arr = {1,1,2,3,3,4,4,8,8};
    cout << findSingle(arr) ;
}

