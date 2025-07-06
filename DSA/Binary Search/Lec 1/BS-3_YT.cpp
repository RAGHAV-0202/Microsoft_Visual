// FIRST AND LAST OCCURENCE 
#include <bits/stdc++.h>
using namespace std;

void find (vector <int> &arr , int target){
    int low = 0 , high = arr.size() - 1 ;

    int first = -1 ;
    int last = -1 ;

    while(low <= high){
        int mid = (low + high) / 2;

        if(arr[mid] == target){
            int i = mid ;
            while(i >= 0 && arr[i] == target){
                first = i ;
                i--;
            }
            i = mid;
            while(i <= high && arr[i] == target){
                last = i;
                i++;
            }
            break;
        }else if (arr[mid] < target){
            low = mid + 1 ;
        }else{
            high = mid -1 ;
        }
    }
    cout << first << " " << last << endl;
}

void findOptimal (vector <int> arr , int target){
    int low = 0 ;
    int high = arr.size() - 1 ;
    int first = -1 , last = - 1;


    while(low <= high){
        int mid = (low + high) / 2 ;
        if(arr[mid] == target){
            first = mid ;
            high = mid - 1 ;
        }else if(arr[mid] < target){
            low = mid + 1 ;
        }else{
            high = mid - 1 ;
        }
    }
    low = 0 ;
    high = arr.size() - 1 ;

    while(low <= high){
        int mid = (low + high) / 2 ;
        if(arr[mid] == target){
            last = mid ;
            low = mid + 1 ;
        }else if(arr[mid] < target){
            low = mid + 1 ;
        }else{
            high = mid - 1 ;
        }
    }

    cout << first << " " << last << endl;
}



int main(){
    vector <int> arr = {5,7,7,8,8,10};
    int target = 8;
    find (arr,target);
    findOptimal(arr,target);

}