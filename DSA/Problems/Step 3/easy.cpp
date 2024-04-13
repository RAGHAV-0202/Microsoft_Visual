#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool check_array_sorted(int arr[] , int len){
    for(int i = 0 ; i < len - 1 ; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

vector<int> remove_duplicates(int arr[] , int len){
    vector <int> temp ;
    for(int i = 0 ; i <  len ; i++){
        bool found = binary_search(temp.begin(), temp.end(), arr[i]);
        if(found){
            continue;
        }else{
            temp.push_back(arr[i]);
        }
    }

    return temp;
}

void rotateLeftBy_1(int arr[] , int len ){
    int temp = arr[0];
    for(int i = 1 ; i < len ; i++){
        arr[i - 1] = arr[i];
    }
    arr[len - 1 ]= temp ;
}

void rotateLeftBy_n_brute(int arr[] , int len , int n){
    // O(n^2);
    n = n % len ; 
    int i = n ;    
    while(i--){
        int temp = arr[0];
        for(int i = 1 ; i < len ; i++){
            arr[i - 1] = arr[i];
        }
        arr[len - 1] = temp ;
    }
}

void rotateLeftBy_n_better(int arr[] , int len , int n){
    n = n % len ;
    int temp[n];
    for(int i = 0 ; i < n ; i++){
        temp[i] = arr[i];
    }
    for(int i = n ; i < len ; i++){
        arr[i-n] = arr[i];
    }
    for(int i = len-n ; i < len ; i++ ){
        arr[i] = temp[i-(len - n )];
    }
}

void rotateLeftBy_n_optimal(int arr[] , int len , int n){
    // reverse(a,a+d);
    // reverse(a+n , a+ len)
    // reverse(a,a+len);

    // for(int i = 0 ; i < n/2 ; i++){
    //     int temp = arr[i] ; 
    //     arr[i] = arr[n - 1 - i];
    //     arr[n - 1 - i] = temp ; 
    // } 
    // for(int i = n ; i < len/2 ; i++){
    //     int temp = arr[i] ;
    //     arr[i] = arr[len - 1 - i];
    //     arr[len - 1 - i] = temp ; 
    // } 
    // for(int i = 0 ; i < len/2 ; i++){
    //     int temp = arr[i] ; 
    //     arr[i] = arr[len - 1 - i];
    //     arr[len - 1 - i] = temp ; 
    // } 

    reverse(arr, arr+n);
    reverse(arr+n, arr+len);
    reverse(arr, arr+len);

    
}

void moveZeroToEnd(int arr[] , int len){
    vector <int> temp;
    int zero_count = 0 ;
    for(int i = 0 ; i < len ; i++){
        if(arr[i] != 0){
            temp.push_back(arr[i]);
        }else if(arr[i] == 0){
            zero_count ++;
        }
    }
    for(int i = 0 ; i < zero_count ; i++){
        temp.push_back(0);
    }
    for(int i = 0 ; i < len ; i++){
        arr[i] = temp[i];
    }
}

void printFN(int arr[], int len){
    for(int i = 0 ; i < len ; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main(){
    // int arr[] = {1,2,3,4,4,5,5,5,6,7,8,9,10,10,10,11,12};
    int arr[] = {1,2,0,3,4,0,0,9,5,6};
    int len = sizeof(arr)/sizeof(arr[0]);
    // cout << check_array_sorted(arr,len) << endl;


    // vector <int> temp = remove_duplicates(arr , len);
    // for(int i = 0 ; i < temp.size() ; i++){
        // cout << temp[i] << " ";
    // }

    // rotateLeftBy_1(arr ,  len);
    // printFN(arr,len);

    // rotateLeftBy_n_brute(arr,len,3);
    // printFN(arr, len);

    // rotateLeftBy_n_better(arr, len, 3);
    // printFN(arr, len);

    // rotateLeftBy_n_optimal(arr,len,3);
    // printFN(arr,len);

    moveZeroToEnd(arr,len);
    printFN(arr,len);


}