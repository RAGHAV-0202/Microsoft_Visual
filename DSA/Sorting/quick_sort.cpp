#include <stdio.h>
#include<vector>
#include <bits/stdc++.h>
using namespace std;
// pick a pivot and place it on its correct place 
// smaller on the left and larger on the right
// int partition(vector <int> &arr , int low , int high){
//     int pivot = arr[low];
//     int i = low ;
//     int j = high ;
//     while(i < j){
//         while(arr[i]<=pivot && i <= high - 1){
//             i++;
//         }
//         while(arr[j] > pivot && j >= low+1){
//             j--;
//         }
//         if(i < j) swap(arr[i] , arr[j]);
//     }
//     swap(arr[low] , arr[j]);
//     return j ;
// }

// void quick_sort(vector <int> &arr  , int low , int high){
    
//     if(low < high){
//        int  p_index = partition(arr,low,high);
//        quick_sort(arr,low , p_index - 1);
//        quick_sort(arr,p_index+ 1 ,high);         
//     }

// }

// int partition(vector<int> &arr , int low , int high){
//     int pivot = low;
//     int i = low , j = high ;
//     while(i < j){
//         while(arr[i] <= arr[pivot] && i <= high-1){
//             i++;
//         }
//         while(arr[j] > arr[pivot] && j >= low+1){
//             j-- ;
//         }
//         if(i < j){
//             swap(arr[i],arr[j]);
//         }
//     }
//     swap(arr[low] , arr[j]);
//     return j;
// }


// void quick_sort(vector <int> &arr , int low , int high){

//     if(low < high){
//         int p_index = partition(arr,low,high);
//         quick_sort(arr,low,p_index-1);
//         quick_sort(arr,p_index+1,high);
//     }       

// }

int partition(vector<int> &arr , int low , int high){
    int i = low , j = high ;

    while(i < j ){
        int pivot = arr[low] ;
        while(arr[i] <= pivot && i < high){
            i++;
        }
        while(arr[j] > pivot && j > low ){
            j--;
        }
        if(i < j){
            swap(arr[i] , arr[j]);
        }
    }
    swap(arr[low] , arr[j]);
    return j ;
}

void quick_sort(vector<int> &arr , int low , int high){
    if(high < low){
        return ;
    }
    int p_index = partition(arr , low , high);
    quick_sort(arr , low , p_index -  1);
    quick_sort(arr , p_index + 1 , high);
}



int main(){

    vector <int>  arr = {5,2,3,1,8,5,2,7,9,1,2} ;
    quick_sort(arr , 0 , arr.size() - 1 ) ;

    for(int i = 0 ; i < arr.size() ; i++){
        cout << arr[i] << " ";
    }



    return 0 ;
}