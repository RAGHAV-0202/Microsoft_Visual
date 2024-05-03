#include <stdio.h>

void swap(int a , int b){
    int temp = a ; 
    a = b ; 
    b = temp ; 

    printf("in the function , a = %d, b = %d \n" , a , b);
}

void swap_ref(int *a , int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}


int main(){

    int a = 10 ; 
    int b = 20 ; 

    swap(a,b);
    printf("after the function which was called by value ; a = %d , b = %d \n"  , a , b);

    swap_ref(&a , &b);
    printf("after the function which was called by reference ; a = %d , b = %d", a, b);
}
