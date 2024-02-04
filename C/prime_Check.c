#include <stdio.h>

int main()
{
    int number;
    int flag = 1; // 1 = prime , 0 = not prime
    printf("Enter a number : ");
    scanf("%d", &number);

    if (number == 0 || number == 1)
    {
        flag = 0; // not prime
    }
    else if (number == 2)
    {
        flag = 1; // prime
    }
    else
    {
        for (int x = 2; x <= (number / 2); x++)
        {
            if (number % x == 0)
            {
                flag = 0;
            }
        }
    }

    if (flag == 0)
    {
        printf("%d is Not a Prime number ", number);
    }
    else
    {
        printf("%d is a Prime number ", number);
    }
    return 0;
}