#include <Stdio.h>

int main(){
    int a  = 8 ; 
    int b = 3 ; 
    
    if(a % 2 == 0 || b % 2 == 0 ){
        printf("One or both numbers are divisible by 2");
    }else{
        printf("None of the above are divisble by 2");
    }
    return 0 ;
}