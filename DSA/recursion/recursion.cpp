#include <iostream>
using namespace std;

void something_N_times(int n ){
    if(n == 0){
        return;
    }else{
        cout << "Hello World !!!" << endl ; 
        return something_N_times(n-1) ;
    }
}

void numbers_till(int max , int num ){
    if(num > max){
        cout << endl ;
        return;
    }else{
        cout << num++ <<  " " ; 
        return numbers_till(max , num) ;
    }

}

void numbers_till2(int n){
    if(n <= 0){
        return ;
    }else{
         numbers_till2(n-1);
         cout << n << " "; 
    }
}

int sum(int n ){
    if(n <= 0){
        return 0 ;
    }else{
        return sum(n-1)+ n;
    }

}

int factorial(int n){
    if(n == 0 || n == 1){
        return 1 ;
    }else{
        return factorial(n-1) * n;
    }
}

int fibo(int n){
    if(n == 1 || n == 2){
        return 1 ;
    }else{
        return fibo(n - 1 ) + fibo(n -2);
    }
}

int check_palindrome(string arr , int i,int len){
    if(i >= len/2 ){
        return 1 ;
    }
    if(arr[i] != arr[len - i - 1]){
        return 0 ;
    }
    return check_palindrome(arr,i+1 , len);
}

int check_palindrome_num(int arr[] , int i,int len){
    if(i >= len/2 ){
        return 1 ;
    }
    if(arr[i] != arr[len - i - 1]){
        return 0 ;
    }
    return check_palindrome_num(arr,i+1 , len);
}

void rev(int arr[] , int i , int len){
    if(i >= len / 2 ){
        return ;
    }else{
        int temp = arr[i] ;
        arr[i] = arr[len - i - 1];
        arr[len - i - 1]  = temp;

        rev(arr , ++ i , len);
    }
}

void print_arr(int arr[] , int len){
    for(int i = 0 ; i < len ; i++){
        cout << arr[i] << " " ;
    }
}
int main(){

    something_N_times(6);
    numbers_till(6,1) ;
    numbers_till2(6);
    cout << endl << "sum : "<<sum(5) << endl;
    cout << "factorial : " << factorial(5) << endl ;
    cout << "fibo : " << fibo(3) << endl;
    int arr[] = {1,2,3,3,2,1,0};
    string arr2 = "madam";
    cout << "Palindrome : " << check_palindrome_num(arr,0,sizeof(arr) / sizeof(arr[0])) << endl;
    cout << "Palindrome : " << check_palindrome(arr2, 0, arr2.length()) << endl;
    int len = sizeof(arr) / sizeof(arr[0]) ;
    rev(arr, 0, len);
    print_arr(arr,len);

    return 0;
}