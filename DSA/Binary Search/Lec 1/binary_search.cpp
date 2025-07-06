#include <iostream>
#include <map>
#include <set>
#include <unordered_set>
#include <string>
#include <algorithm>
#include <vector>
#include <cmath>
using namespace std;

int binary_search_iterative(vector<int> &arr , int target){
    int low = 0 , high = arr.size() - 1 ;

    while(low <= high){
        int mid = (low + high) / 2;
        if(target == arr[mid]){
            return mid;
        }else if (arr[mid] > target){
            high = mid - 1;
        }else if (arr[mid] < target){
            low = mid + 1;
        }
    }
    return -1 ;
}

int binary_search_recursive(vector<int> &arr, int low , int high , int target){
    if(low > high){
        return -1;
    }
     // int mid = (low + high) / 2 ;
    int mid = low + (high - low) / 2 ; // avoids averflow (low + high)
    if(arr[mid] == target){
        return mid;
    }else if(target > arr[mid]){
        binary_search_recursive(arr,mid+1,high,target);
    }else{
        binary_search_recursive(arr,low,mid-1,target);
    }
}

int searchInsert(vector<int>& nums, int target) {
    int low = 0 , high = nums.size() - 1 ;
    while(low <= high){
        int mid = (low+high) / 2 ;
        if(nums[mid] == target){
            return mid ;
        }

        if(nums[mid] > target){
            high = mid - 1 ;
        }else{
            low = mid + 1 ;
        }
    }
    return low;
}


int binary_search_iterative2(vector <int> &arr , int target){
    int high = arr.size() - 1 ;
    int low = 0;
    while(low <= high){
        int mid = (high + low)/2;
        if(arr[mid] == target){
            return mid;
        }else if (arr[mid] < target){
            low = mid + 1 ;
        }else{
            high = mid - 1;
        }
    }
}

int bs_r(vector <int> arr , int target ,int low , int high){
    int mid = (low + high) / 2 ;
    if(arr[mid] == target) return mid;

    if(arr[mid] < target){
        return bs_r(arr , target , mid + 1 ,high);
    }else{
        return bs_r(arr , target , low , mid - 1);
    }
}




int main(){

    vector<int> arr = {1,2,3,4,5,6,7,8,12,13,15,17};
    int target = 5;
    // cout  << binary_search_iterative2(arr,target) << endl;
    cout << bs_r(arr , 5 , 0 , arr.size() - 1) << endl;
    // cout << binary_search_recursive(arr,0,arr.size() - 1 , target) << endl;

    return 0;
}