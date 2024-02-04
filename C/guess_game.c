#include <stdio.h>

int main()
{
    int startCommand;
    printf("Guessing Game !!! \n 1 to start or 2 to end \n Enter : ");
    scanf("%d", &startCommand);
    if (startCommand == 1)
    {
        printf("Game Started !");
        printf("Guess the number !!!");
        int guess = 9;
        int y = 0;
        while (y != guess)
        {
            printf("To end Enter : 101\n");
            printf("Enter your Guess : ");
            scanf("%d", &y);

            if (y == 101)
            {
                printf("Exiting !");
                __DBL_MAX_10_EXP__;
            }

            if (y == guess)
            {
                printf("You won !!!");
                break;
            }
        }
    }
    else if (startCommand == 2)
    {
        printf("Exiting !!");
    }
    else
    {
        printf("invalid input");
    }
}