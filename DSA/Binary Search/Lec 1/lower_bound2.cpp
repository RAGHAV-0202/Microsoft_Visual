#include <bits/stdc++.h>
using namespace std;

int lower_bound(vector <int> &arr , int target){
    int high = arr.size() - 1;
    int low = 0;

    int possible_answer = high + 1;

    while(low <= high){
        int mid = (low + high) / 2;

        if(arr[mid] >= target){
            possible_answer = mid;
            high = mid - 1;
        }else if (arr[mid] < target){
            low = mid + 1;
        }
    }

    return possible_answer;
}

int upper_bound(vector <int> &arr , int target){
    int high = arr.size() - 1 ;
    int low = 0 ;
    int answer = high + 1 ;

    while(low <= high){
        int mid =  (low + high) / 2;

        if(arr[mid] > target){
            high = mid - 1;
            answer = mid ;
        }else { 
            low = mid + 1;
        }
    }
    return answer;
}

int floor(vector <int> arr , int target){
    // floor : element largest number in array <= target

    int low = 0 ;
    int high = arr.size() - 1 ;
    int answer = -1;

    while(low <= high){
        int mid = (low + high) / 2;
        if(arr[mid] <= target){
            answer = mid ;
            low = mid + 1 ;
        }else{
            high = mid -1 ;
        }
    }
    return answer;
}

int ceil(vector <int> , int target){
    int low = 0 ; 
    int high = arr.size() - 1 ;
    int answer = -1;

    while(high >= low){
        int mid = (low + high) / 2;
        if(arr[mid] >= target){
            answer = mid ;
            high = mid - 1 ;
        }else{
            low = mid + 1;
        }
    }
    return answer ;
}

int main(){
    vector <int> arr = {2, 3, 7, 10, 11, 11, 25};
    cout << lower_bound(arr, 9) << endl;
    cout << upper_bound(arr,9) << endl;
}