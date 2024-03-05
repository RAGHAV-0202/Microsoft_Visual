#include <stdio.h> 

int main(){
    int n ; 
    printf("enter : ");
    scanf("%d" , &n);

    for(int i = 2 ; i <= n/2 ; i++ ){
        if(n % i == 0){
            printf("composite");
            return 0;
        }
    }
    printf("prime");
    return 0 ;
}