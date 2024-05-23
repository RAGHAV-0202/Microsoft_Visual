#include <stdio.h>
#include <string.h>

int lines(char string[]){
    int LineCount = 0 ;
    for(int i = 0 ; string[i] != '\0' ; i++){
        if(string[i] == '.'){
            LineCount++;
        }
    }
    return LineCount;
}

int characters(char string[]){
    int charCount = 0 ;
    for(int i = 0 ; string[i] != '\0' ; i++){
        charCount ++ ;
    }
    return charCount;
}

int words(char string[]){
    int wordCount = 0 ; 
    for(int i = 0 ; string[i] != '\0' ; i++){
        if(string[i] == ' '){
            wordCount++;
        }
    }
    return wordCount;
}

int main(){

    printf("Aastha , 2823852 \n \n");

    char string[] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius ornare lectus, id consectetur leo aliquam eget. In purus neque, pretium vel condimentum a, vulputate bibendum ex. Quisque eget mauris id dui dictum consectetur. Nulla mollis eros sed auctor posuere. Proin tristique tristique dignissim. Praesent viverra ante vitae elit sollicitudin.";


    int LineCount = lines(string);
    printf("number of lines = %d \n" , LineCount);

    int charCount = characters(string);
    printf("number of characters = %d \n", charCount);

    int wordCount = words(string);
    printf("number of words = %d ", wordCount);

    return 0 ;
}