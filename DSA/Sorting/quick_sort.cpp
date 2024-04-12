#include <stdio.h>
#include<vector>
using namespace std;
// pick a pivot and place it on its correct place 
// smaller on the left and larger on the right

void quick_sort(vector <int> &arr  , int low , int high){
    
    if(low < high){
       int  p_index = partition(arr,low,high);
       quick_sort(arr,low , p_index - 1);
       quick_sort(arr,p_index+ 1 ,high);
    }
    

}

int main(){

    vector <int>  arr = {4,5,2,5,7,8,1,3} ;
    quick_sort(arr , 0 , arr.size() - 1 ) ;





    return 0 ;
}