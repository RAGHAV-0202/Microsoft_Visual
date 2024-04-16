#include <Stdio.h>
#include <string.h>

int main(){

    char string1[] = "Hello ";
    char string2[] = "world";

    strcat(string1,string2);

    printf("%s" , string1);

    return 0 ;
}