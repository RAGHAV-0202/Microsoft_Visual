// find out how many times array has been rotated
#include <bits/stdc++.h>
using namespace std;

int findNrotated(vector <int> arr){
    int low = 0;
    int high = arr.size() - 1 ;
    int min_number = INT32_MAX;
    int min_index ; 

    while(low <= high ){
        int mid = (low + high) / 2 ;
        if (arr[mid] < min_number){
            min_number = arr[mid];
            min_index = mid;
        }

        if(arr[low] == arr[mid] && arr[mid] == arr[high]){
            if (arr[mid] < min_number){
                min_number = arr[mid];
                min_index = mid;
            }
            low++;
            high--;
            continue;
        }

        if(arr[low] <= arr[mid]){
            min_number = arr[low];
            min_index = low;

            low = mid + 1 ;
        }else{
            min_number = arr[mid];
            min_index = mid;

            high = mid - 1 ;
        }
    }
    cout << min_number << endl;
    return min_index;
}

int main(){
    vector<int> arr = {3, 4, 5, 1, 2} ;

    cout << findNrotated(arr) << endl;

    return 0;
}
