// #include <bits/stdc++.h>
// using namespace std;

// int binary_search(vector<int>arr , int target){
//     int low = 0 , high = arr.size() - 1 ;

//     while(low <= high){
//         int mid = (low + high)/2 ;
//         if(arr[mid] == target){
//             return mid;
//         }
//         if(arr[mid] > target){
//             high = mid - 1 ;
//         }else{
//             low = mid + 1 ;
//         }
//     }
//     return -1;
// }


// int main(){
//     vector <int> arr = {1,2,3,4,5,6,7,8,9};
//     cout << "2 is present at index " << binary_search(arr, 2) << " iteratively. " << endl;
// }

//                                                      PROGRAM 2

// #include <bits/stdc++.h>
// using namespace std;

// void traverse(vector<int>arr){
//     for(int i = 0 ; i < arr.size() ; i++){
//         cout << arr[i] << " " ;
//     }
//     cout << endl ;
// }

// void bubble_sort(vector<int> arr){
//     for(int i = 0 ; i < arr.size() - 1 ; i++){
//         for(int j = 0 ; j < arr.size() - 1 - i; j++){
//             if(arr[j] > arr[j+1]){
//                 swap(arr[j] , arr[j+1]);
//             }
//         }
//     }
//     cout << "Bubble Sort : ";
//     traverse(arr);
// }

// void selection_sort(vector<int>arr){
//     for(int i = 0 ; i < arr.size() ; i++){
//         int mini = i ;
//         for(int j = i + 1 ; j < arr.size() ; j++){
//             if(arr[j] < arr[mini]) mini = j ;
//         }
//         swap(arr[i] , arr[mini]);
//     }
//     cout << "Selection Sort : ";
//     traverse(arr);
// }

// void insertion_sort(vector<int>arr){
//     for(int i = 0 ; i < arr.size() ; i++){
//         int j = i ;
//         while(j > 0 && arr[j - 1] > arr[j]){
//             swap(arr[j-1], arr[j]);
//             j--;
//         }
//     }
//     cout << "insertion Sort : ";
//     traverse(arr);
// }


// int main(){
//     vector<int> arr = {4,2,5,1,6,7,1,6,8};

//     bubble_sort(arr);
//     selection_sort(arr);
//     insertion_sort(arr);
// }

//                                                  PROGRAM 3

#include <bits/stdc++.h>
using namespace std;

static int i = 0 ;
static const int limit = 10 ;

void Push(int number, int (&arr)[limit], int max){
    if(i == max){
        cout << "Stack OverFlow !!!";
        return ;
    }
    arr[i] = number ;
    i++;
}

int Pop(int (&arr)[limit]){
    if(i == 0){
        cout << "Stack UnderFlow";
        return -1;
    }
    i--;
    int number = arr[i];
    arr[i] = 0 ;
    return number ;
}

int Top(int (&arr)[limit]){
    return arr[i - 1];
}

void traverse(int arr[]){
    for(int j = 0 ; j < i ; j++){
        cout << arr[j] << " ";
    }
    cout << endl;
}


int main(){
    int arr[limit] = {0};

    Push(2, arr, limit);
    Push(3, arr,  limit);
    Push(4 , arr , limit);
    traverse(arr);
    Pop(arr);
    traverse(arr);

    cout << "Top : " << Top(arr);
}