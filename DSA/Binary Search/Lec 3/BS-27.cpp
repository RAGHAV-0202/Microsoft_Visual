#include <bits/stdc++.h>
using namespace std;

// BS-27. Median in a Row Wise Sorted Matrix

double findMedianBrute(vector<vector<int>> &matrix) {
    vector<int> temp;

    // Flatten the matrix into a 1D vector
    for (int i = 0; i < matrix.size(); i++) {
        for (int j = 0; j < matrix[i].size(); j++) {
            temp.push_back(matrix[i][j]);
        }
    }

    // Sort the flattened array
    sort(temp.begin(), temp.end());

    int n = temp.size();
    if (n % 2 == 1) {
        return temp[n / 2];
    } else {
        return (temp[n / 2] + temp[(n / 2) - 1]) / 2.0;
    }
}

int main() {
    vector<vector<int>> matrix = {
        {1, 4, 7, 11, 15},
        {2, 5, 8, 12, 19},
        {3, 6, 9, 16, 22}
    };
    cout << findMedianBrute(matrix) << endl;
    return 0;
}
