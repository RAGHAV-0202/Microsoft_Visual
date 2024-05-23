#include <stdio.h>
#include <string.h>

int main(){

    printf("Aastha , 2823852 \n \n");

    FILE *fptr1, *fptr2;
    int c;

    fptr1 = fopen("D:/Microsoft Visual/C/oldFile.txt", "r");
    if (fptr1 == NULL){
        printf("Cannot open file old File\n");
        return 0;
    }

    fptr2 = fopen("D:/Microsoft Visual/C/newFile.txt", "w");
    if (fptr2 == NULL){
        printf("Cannot open file new File \n");
        return 0;
    }

    while ((c = fgetc(fptr1)) != EOF){
        fputc(c, fptr2);
    }

    printf("Contents copied to one to another \n");

    fclose(fptr1);
    fclose(fptr2);

    return 0 ;
}