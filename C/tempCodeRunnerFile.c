#include <stdio.h>
int main(){
    int num;
    printf("prime numbers between 1 and : ");
    scanf("%d" , &num);
    for (int i = 1; i <= num; i++){
        int flag = 0;
        for (int j = 2; j < i; j++){
            if (i % j == 0){
                flag = 1;
                break;
            }
        }
        if (flag == 0)
        {
            printf(" %d ", i);
        }
    }
    return 0;
}