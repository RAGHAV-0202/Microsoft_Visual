#include <bits/stdc++.h>
using namespace std;
//BS-6. Minimum in Rotated Sorted Array

int findMin(vector <int> arr){
    int low = 0;
    int high = arr.size() - 1 ;
    int ans = INT32_MAX;
    while(low <= high){
        int mid = (low + high) / 2 ;

        if(arr[low] == arr[mid] && arr[mid] == arr[high]){
            ans = min(ans , arr[mid]);
            low ++ ;
            high -- ;
            continue;
        }

        if(arr[low] <= arr[mid]){
            ans = min(arr[low] , ans);
            low = mid + 1;
        }else{
            ans = min(arr[mid] , ans);
            high = mid - 1;
        }
    }

    return ans;
}

int main(){
    vector <int> arr = {3,4,5,1,2};
    cout << findMin(arr) << endl;
}
