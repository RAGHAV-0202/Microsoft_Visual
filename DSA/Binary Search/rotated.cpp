#include <bits/stdc++.h>
using namespace std;


int inRotated(vector<int> arr, int target){
    int low = 0 , high = arr.size() - 1 ;
    while(low <= high){
        int mid = (low + high) / 2 ;
        if(arr[mid] == target){
            return mid;
        }else{
            if(arr[low] < arr[high]){
                if(arr[low]<=target && target <= arr[mid]){
                    high = mid - 1 ;
                }else{
                    low = mid + 1 ;
                }
            }else{
                if(arr[mid]<=target && target <= arr[high]){
                    low = low + 1 ;
                }else{
                    high = mid - 1 ;
                }
            }
        }
    }
    return -1;
}

int MinInRotated(vector<int> arr) {
    int low = 0, high = arr.size() - 1;
    int lowest = INT_MAX;

    while (low <= high) {
        while (low < high && arr[low] == arr[low + 1]) low++;
        while (high > low && arr[high] == arr[high - 1]) high--;

        int mid = (low + high) / 2;

        lowest = min(lowest, arr[mid]);

        if (arr[low] <= arr[mid]) {
            lowest = min(lowest, arr[low]);
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return lowest;
}

int singleElem(vector<int> arr){
    int n = arr.size();
    if(n == 1){
        return arr[0];
    }
    if(arr[0] != arr[1]){
        return arr[0];
    }
    if(arr[n-1] != arr[n-2]){
        return arr[n-1];
    }
    int low = 1 , high = n - 2 ;

    while(low <= high){
        int mid = (low + high) / 2 ; 

        if(arr[mid] != arr[mid - 1 ] && arr[mid] != arr[mid + 1]){
            return arr[mid];
        }

        if(mid % 2 == 1 && arr[mid] == arr[mid-1]){
            low = mid + 1 ;
        }else{
            high = mid - 1 ;
        }
        
    }
    return -1;   

}


int main(){

    vector<int> arr = {7,8,9,1,2,3,4,5,6,7};
    // cout << inRotated(arr , 2) << endl;
    cout << "Lowest : " <<MinInRotated(arr) << endl;

    vector<int> dd = {1, 1, 2, 3, 3, 4, 4, 8, 8};
    cout << "Solo : " <<singleElem(dd);
}