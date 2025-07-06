#include <bits/stdc++.h>
using namespace std;

// BS-16. Kth Missing Positive Number | Maths + Binary Search


int findKthPositiveBrute(vector<int>& arr, int k) {
    vector <int> missing ;
    int last = 0;
    for(int i = 0 ; i < arr.size() ; i++){
        if(last - arr[i] != 1){
            for(int j = last + 1 ; j < arr[i] ; j++){
                missing.push_back(j);
            }
            last = arr[i] ;
        }
    }

    while(missing.size() < k) {
        missing.push_back(++last);
    }
    
    return missing[k-1];
}

int brute(vector <int> arr , int k){
    for(int i = 0 ; i < arr.size() ; i++){
        if(arr[i] < k){
            k++;
        }
    }
    return k ;
}

// one more brute , let k = 6 , arr has 2 , 4 , 7 , 9 
// check for num < k , and add into k  , return k

int findKthPositive(vector <int> arr , int k){ 
    int low = 0 ;
    int high = arr.size() - 1 ;
    while(low <= high){
        int mid = (low + high) / 2 ;
        int missing = arr[mid] - (mid + 1) ;

        if(missing < k){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }

    return low + k;
  
}

int main(){
    vector <int> arr = {1,3,7,8,13,17,21,25};
    cout << findKthPositive(arr , 11) ;
}