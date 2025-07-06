#include <bits/stdc++.h>
using namespace std;


int lowerBound(vector <int> arr , int target){
    // find a number with smallest index,which is just greater than equal to target
    int low = 0 , high = arr.size() - 1 ;
    int answer = high + 1 ;
    while(low <= high){
        int mid = (low + high) / 2 ;

        if(arr[mid] >= target){
            answer = mid ;
            high = mid - 1 ;
        }else if(arr[mid] < target){
            low = mid + 1 ;
        }
    }
    return answer ;
}

int upperBound(vector<int> arr , int target){
    // find a number with lowest index which is just smaller than equal to the target
    int low = 0 , high = arr.size() - 1 ;
    int answer = high + 1 ;
    while(low <= high){
        int mid = (low + high) / 2 ;

        if(arr[mid] > target){
            // answer = mid ;
            high = mid - 1 ;
        }else if(arr[mid] <= target){
            answer = mid ;
            low = mid + 1 ;
        }
    }
    return answer ;
}

int insertPosition(vector<int> arr , int num){
    int low = 0 , high = arr.size() - 1 ;
    int ans = high + 1 ;
    while(low <= high){
        int mid = (low + high) / 2 ;
        if(arr[mid] <= num){
            ans = mid ;
            low = mid + 1 ;
        }else{
            high = mid - 1;
        }
    }
    return ans;
}
int floor(vector<int> arr , int num){
    int low = 0 , high = arr.size() - 1 ;
    int ans = -1 ;

    while(low <= high){
        int mid = (low + high) / 2 ;
        if(arr[mid] <= num){
            ans = mid;
            low = mid + 1 ;
        }else{
            high = mid - 1 ;
        }
    }
    return ans;
}

int ceil(vector<int> arr , int num){
    return arr[lowerBound(arr, num)];
}
int main(){
    vector <int> arr = {1,2,3,3,5,6,7,8,9,10};
    cout << "Lower Bound : " << lowerBound(arr , 4) << endl; // km se km x index 
    cout << "Upper Bound : " << upperBound(arr, 4) << endl;  
    cout << "Insert Position : " << insertPosition(arr ,2) << endl;
    cout << "Floor : " << arr[floor(arr, 4)] << endl;
    cout << "Ceil : " << floor(arr, 2) << endl;
}