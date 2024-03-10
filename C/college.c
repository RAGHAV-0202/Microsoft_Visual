#include <stdio.h> 

int main(){
    int sum = 0 ; 
    // checking perfect numbers
    for(int i = 1 ; i <= 1000000000; i++){
        sum = 0 ; 
        for(int j = 1 ; j <= i / 2 ; j++){
            if(i%j == 0){
                sum = sum + j ; 
            }
        }
        printf("i = %d , sum = %d\n" , i , sum);
        if(sum == i ){
            printf("%d," , i); 
        }
    }
    return 0 ;
}