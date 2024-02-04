#include <stdio.h>

int main(){
    int number ;
    int till ;
    int flag = 1 ; //1 = prime , 0 = not prime
    printf("Enter a number : ");
    scanf("%d" , &till);

for(number = 1 ; number <= till ; number ++)
{
    int flag = 1;
    if (number == 0 || number == 1 ){
        flag = 0; //not prime         
    }else if(number == 2 ){
        flag = 1; //prime
    }else{
        for (int x = 2 ; x <= (number / 2) ; x ++){
            if ( number % x == 0){
                flag = 0;
            }
        }
    }

    if(flag == 1){
        printf("%d," , number);
    }
}
return 0 ;
}