#include <bits/stdc++.h>
using namespace std;

// BS-18 Allocate Books or Book Allocation | Hard Binary Search

int findPages(vector<int> &arr, int k) {
    if(arr.size() < k) return -1;
    int low = INT32_MIN ;
    int high = 0 ;
    for(int i = 0 ; i < arr.size() ; i++){
        low = max(low , arr[i]);
        high += arr[i];
    }
    int answer ;
    while(low <= high){
        int currentStudents = 1 ;
        int mid = low + (high - low) / 2 ;
        int studentPages = 0;
        for(int i = 0 ; i < arr.size() ; i++){
            if(studentPages + arr[i] > mid){
                currentStudents++;
                if(currentStudents > k) break;
                studentPages = arr[i];
            }else{
                studentPages += arr[i];
            }
        }
        if(currentStudents > k){
            low = mid + 1;
        }else{
            answer = mid ;
            high = mid - 1;
        }
    }

    return answer ; 
}

int main(){
    vector<int> arr = {12, 34, 67, 90};
    int k = 2 ;

    cout << findPages(arr , k) ; 

    return 0;
}