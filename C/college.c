#include <stdio.h>
#include <string.h>
int main(){

    char string[] = "This is a sample string ...";
    int n = 10 ; // number of characters to be copied
    int m = 3 ; // starting position

    char result[n+1];

    for(int i = 0 ; i < n ; i++){
        result[i] = string[m+i];
    }
    result[n] = '\0'; // null character at the last index

    printf("%s" , result);
    
    return 0;
}