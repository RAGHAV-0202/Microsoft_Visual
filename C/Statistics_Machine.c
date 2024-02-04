#include <stdio.h>
#include <unistd.h>
#include <string.h>

int main()
{
    int input;
    int count, array_count;
    count = array_count = 0;
    float sum = -1010.00;
    float squared_deviation, population_variance, deviation, highest, lowest;
    highest = 0;
    lowest = 10000;
    squared_deviation = population_variance = deviation = 0;
    int numbers[100] = {};
    float mean;
    while (input != 1010)
    {
        printf("Enter values : ");
        scanf("%d", &input);
        numbers[count] = input;
        sum = sum + input;
        count = count + 1;
        mean = sum / (count - 1);
    }
    for (int i = 0; i < count - 1; i++)
    {
        if (numbers[i] > highest)
        {
            highest = numbers[i];
        }
        if (numbers[i] < lowest)
        {
            lowest = numbers[i];
        }
        float deviation = numbers[i] - mean;
        squared_deviation = squared_deviation + (deviation * deviation);
    }
    printf("\nHighest = %f\nLowest = %f\nRange = %f\nMean = %f\nSample Variance = %f\nPopulation Variance = %f\n", highest, lowest, highest - lowest, mean, squared_deviation / (count - 2), squared_deviation / (count - 1));

    sleep(5);

    return 0;
}