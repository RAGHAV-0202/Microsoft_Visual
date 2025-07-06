// BS-9. Find Peak Element

#include <bits/stdc++.h>
using namespace std;

int findPeak(vector <int> arr , int low , int high){
    if (low == high) return low;

    int mid = (low + high) / 2;

    if (arr[mid] > arr[mid + 1]) {
        return findPeak(arr, low, mid);
    } else {
        return findPeak(arr, mid + 1, high);
    }
    
}

int main(){

    vector <int> arr = {1,2,1,3,5,6,4};
    cout << findPeak(arr , 0 , arr.size() - 1);

}