#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>

int reverse(int n ){
    int res = 0 ; 
    while(n > 0){
        int dig = n % 10 ;
        res = dig + (res * 10);
        n = n / 10 ;
    }
    return res ;
}

int main(){
    int number = 1061 ;

    int rev = reverse(number) ;

    while(rev > 0) {
        int dig = rev % 10 ; 
        switch (dig){
            case 1 :
                printf("one ");
                break;
            case 2:
                printf("two ");
                break;
            case 3:
                printf("three ");
                break;
            case 4:
                printf("four ");
                break;
            case 5:
                printf("five ");
                break;
            case 6:
                printf("six ");
                break;
            case 7:
                printf("seven ");
                break;
            case 8:
                printf("eight ");
                break;
            case 9:
                printf("nine ");
                break;
            case 0:
                printf("zero ");
                break;
        }
        rev = rev / 10 ; 
    }


    return 0 ;
}
