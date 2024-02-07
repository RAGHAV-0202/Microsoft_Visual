#include <stdio.h>
#include <math.h>

int main(){

    int a = 5 ;
    int *b ;
    b = &a ;
    printf("value of a %d\n" , *b);
    printf("address of a %u\n" , b);
    printf("address of b is %u" , &b);


    return 0 ;
}
