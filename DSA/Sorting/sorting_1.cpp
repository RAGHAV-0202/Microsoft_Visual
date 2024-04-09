#include <iostream>
using namespace std ;

int *bubble_sort(int *arr , int len){
    // complexity O(N);
    int *ptr = arr ;
    int count = 0 ; 
    for(int i = 0 ; i < len ; i++ ){
        ptr = arr ;
        for(int j = 0 ; j < len - i - 1 ; j++){
            count ++ ; 
            // if(arr[j] > arr[j+1]){
            //     int temp = arr[j];
            //     arr[j] = arr[j+1];
            //     arr[j+1] = temp ;
            // }
            if(*ptr > *(ptr + 1)){
                int temp = *ptr ;
                *ptr = *(ptr + 1);
                *(ptr + 1 ) = temp ;
            }
            ptr++;
        }
    }
    cout << "run : " << count << endl;
    ptr = arr ;
    return ptr;

}
int *selection_sort(int *arr , int len){
    for(int i = 0 ; i < len - 1 ; i++){
        int mini = i;
        for(int j = i ; j < len; j++){
            if(arr[j] < arr[mini]){
                mini = j ;
            }
        }
        int temp = arr[mini];
        arr[mini] = arr[i] ;
        arr[i] = temp ;
    }
}

int *insertion_sort(int *arr, int len){

    // Time complexity   O(n^2) on avg and on best O(1);
    for(int i = 0 ; i < len ; i++){
        int j = i ; 
        while(j > 0 && arr[j-1] > arr[j] ){
            int temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j-- ;
        }
    }
}


void print(int *arr , int len, string method){
    int *ptr = arr ;
    cout << method << " : " ;
    for(int i = 0 ; i < len ; i++){
        cout << *ptr++ << " " ;
    }
    cout <<endl;
}
int main(){

    int array[]= {5,1,6,3,6,8,12,15,17,18,19,9,2,4,5,7,11,3,45,23,45,78,98,54,13,1,56,45,2,3,6,4,8,6,5,8,11,10,9,14};
    // int array[] = {6,5,4,3,2,1};
    int *ptr ;
    ptr = array;
    int len = sizeof(array) / sizeof(array[0]);

    // bubble_sort(ptr,len);
    // print(ptr,len,"bubble_sort");
    // selection_sort(ptr,len);
    // print(ptr, len,"selection_sort");

    insertion_sort(ptr,len);
    print(ptr,len,"insertion_sort");

    return 0;
}