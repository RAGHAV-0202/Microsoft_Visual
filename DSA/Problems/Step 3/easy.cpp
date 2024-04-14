#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
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

void find_union(int arr1[] , int arr2[] , int len1 , int len2){
    set <int> st;
    for(int i = 0 ; i < len1 ; i++){
        st.insert(arr1[i]);
    }
    for(int i = 0 ; i < len2 ; i++){
        st.insert(arr2[i]);
    }
    auto it = st.begin();
    while(it!=st.end()){
        cout << *it << " " ;
        it++ ;
    }
}

int missingNumber (vector <int> &a , int N){
    int xor1 = 0 , xor2= 0 ; 
    int n = N-1 ; 
    for(int i = 0 ; i < N ; i++){
        xor2 = xor2 ^ a[i];
        xor1  = xor1 ^ (i+1);
    }
    xor1 = xor1 ^ N;
    return xor1 ^ xor2;
 // we can use hashing
}
int missingNumber_2(std::vector<int>& nums) {
    int n = nums.size() ;
    int S1 = (n*(n+1) ) / 2 ;
    int s2 = 0 ;
    for(int i = 0 ; i < n ; i++){
        s2 = s2+ nums[i];
    }
    return S1 - s2;
}

int consecutive_ones(int arr[] , int len){
    int counter = 0 ;
    int res = 0 ; 
    for(int i = 0 ; i < len  ; i++){
        if(arr[i] == 1){
            counter += 1  ;
            if(counter >= res){
                res = counter ;
            }
        }else{
            counter = 0 ; 
        }
    }
    return res;
}

// void subarrays(vector <int> arr , int len){
//     for(int i = 0 ; i < len ; i++){
//         for(int j = i ; j < len ; j++){
            
//         }
//         cout << endl ;
//     }
// }



void printFN(int arr[], int len){
    for(int i = 0 ; i < len ; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main(){
    // int arr[] = {1,2,3,4,4,5,5,5,6,7,8,9,10,10,10,11,12};
    // int arr[] = {1,2,0,3,4,0,0,9,5,6};
    int arr[] = {1,2,3,4,5,6,7};
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

    // moveZeroToEnd(arr,len);
    // printFN(arr,len);

    // int arr1[] = {1,2,3,4,5};
    // int arr2[] = {1, 5, 2, 2, 6, 3, 6, 8, 0} ;
    // find_union(arr1, arr2, sizeof(arr1) / sizeof(arr1[0]), sizeof(arr2) / sizeof(arr2[0]));

    // int consecutive[] = {1,2,1,1,1,1,1,1,1,3,4,1,1,1,1,1,1,2,4,5,6,6};
    // int consecutive[] = {1,1,0,1,1,1};
    // int conse_len = sizeof(consecutive) / sizeof(consecutive[0]);
    // cout << consecutive_ones(consecutive,conse_len)<< endl;


    // vector <int> sub = {1,2,3,4,5,6};
    // subarrays(sub ,  sub.size());
 








    return 0 ;
}