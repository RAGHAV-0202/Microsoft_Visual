#include <iostream>
#include <vector>
using namespace std ;

// void merge(vector <int> &arr , int low , int mid , int high){
//     vector<int> temp;
//     int left = low ;
//     int right = mid+ 1 ;
//     while(left <= mid && right <= high){
//         if(arr[left] <= arr[right]){
//             temp.push_back(arr[left]);
//             left++ ;
//         }else{
//             temp.push_back(arr[right]);
//             right ++ ; 
//         }
//     }
//     while(left <=mid){
//         temp.push_back(arr[left]);
//         left++ ; 
//     }
//     while(right <=high){
//         temp.push_back(arr[right]);
//         right++ ; 
//     }

//     for(int i = low ; i <= high ; i++){
//         arr[i] = temp[i - low];
//     }
// }

// void merge_sort(vector<int> &arr , int low , int high){
//     if (low == high){
//         return ;
//     }

//     int middle = (low + high) / 2 ;

//     merge_sort(arr , low , middle);
//     merge_sort(arr , middle + 1 , high);
//     merge(arr , low , middle , high);


//     return ;
// }

void merge(vector<int> &arr , int low , int middle , int high){
    vector<int> temp;
    int left = low;
    int right = middle + 1;

    while(left <= middle && right <= high){
        if(arr[left] <= arr[right] ){
            temp.push_back(arr[left]);
            left++;
        }else{
            temp.push_back(arr[right]);
            right++;
        }
    }
    while(left <= middle){
        temp.push_back(arr[left]);
        left++;
    }
    while(right <= high){
        temp.push_back(arr[right]);
        right++;
    }

    for(int i = low ; i <= high ; i++){
        arr[i] = temp[i - low];
    }
}


void merge_sort(vector <int> &arr , int low , int high){
    if(low == high){
        return;
    }

    int middle = (low+high) / 2 ;
    merge_sort(arr,low,middle);
    merge_sort(arr,middle+1 ,high);
    merge(arr,low,middle,high);

    return;
}



int main(){

    vector<int> arr = {6, 5, 1, 7, 8, 2, 5, 3, 5, 4, 9, 0};

    int len = arr.size();
    merge_sort(arr , 0 , len - 1);

    for(int i = 0 ; i < len ; i++){
        cout << arr[i] << " " ; 
    }

    return 0 ;
}