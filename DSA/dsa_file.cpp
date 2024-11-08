#include <bits/stdc++.h>
using namespace std;

void traverse(vector<int>arr){
    for(int i = 0 ; i < arr.size() ; i++){
        cout << arr[i] << " " ;
    }
    cout << endl ;
}

int partition(vector<int> & arr , int low , int high){
    int i = low , j = high ;
    while(i < j){
        int pivot = arr[low];
        while(arr[i] <= pivot && i < high){
            i++;
        }
        while(arr[j] > pivot && j > low){
            j--;
        }
        if(i < j){
            swap(arr[i] , arr[j]);
        }
    }
    swap(arr[low] , arr[j]);
    return j ;
}

void quick_sort(vector<int>&arr , int low , int high){
    if(high < low){
        return;
    }
    int p_index = partition(arr, low, high);
    quick_sort(arr, low, p_index - 1);
    quick_sort(arr, p_index + 1, high);
    return ;
}

int main(){
    vector<int> arr = {1,2,3,4,5,6};

    quick_sort(arr, 0, arr.size() - 1);
    traverse(arr);
}
