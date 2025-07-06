// Search in Rotated Sorted Array I
// https://www.youtube.com/watch?v=5qGrJbHhqFs&ab_channel=takeUforward


#include <bits/stdc++.h>
using namespace std;

int usingBS(vector <int> arr , int target){
    int low = 0 , high = arr.size() - 1 ;
    while(low <= high){
        int mid = (low + high) / 2 ;

        if(arr[mid] == target) {
            return mid ;
        }

        if(arr[low] <= arr[mid]){
            // left half is sorted
            if(arr[low] <= target && target <= arr[mid] ){
                high = mid - 1;
            }else{
                low = mid + 1 ;
            }
        }else{
            // right half is sorted
            if(target > arr[mid] && target <= arr[high]){
                low = mid + 1 ;
            }else{
                high = mid - 1 ;
            }
        }
    }
    return -1;
}

// Search in Rotated Sorted Array II
// https://www.youtube.com/watch?v=w2G2W8l__pc&ab_channel=takeUforward

int usingBS2(vector <int> arr , int target){
    int low = 0 ; 
    int high = arr.size()  - 1; 
    while(low <= high){
        int mid = (low + high) / 2 ;

        if(arr[mid] == target) return mid ;

        while(arr[low] == arr[mid] && arr[high == arr[mid]]){
            low++;
            high -- ;
            continue;
        }

        if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target < arr[mid]){
                high = mid - 1;
            }else{
                low = mid + 1 ;
            }
        }else{
            if(target > arr[mid] && target <= arr[high]){
                low = mid + 1 ;
            }else{
                high = mid - 1 ;
            }
        }
    }
}

int main(){

    vector <int> arr = {4,5,6,7,0,1,2};
    int target = 0 ;

}


