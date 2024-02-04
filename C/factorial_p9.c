#include <stdio.h>

int main()
{

    int n;
    int factorial = 1;

    printf("n! : ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        factorial = factorial * (n - i);
    }
    printf("factorial of %d is %d\n", n, factorial);
    if (factorial == 0)
    {
        printf("The ans is 0 because factorial of %d has exceeded the limit of C data types..\n ");
    }
    else if (factorial < 0)
    {
        printf("The ans is negative / incorrect because factorial of %d has exceeded the limit of C data types..\n ");
    }
    return 0;
}