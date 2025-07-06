#include <bits/stdc++.h>
using namespace std;

bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int r = 0 ; // row
    int c = matrix[0].size() - 1 ; // colums 
    while(r < matrix.size() && c >= 0){
        if(matrix[r][c] == target) {
            return true ;
        }else if (matrix[r][c] < target){
            r++;
        }else{
            c--;
        }
    }
    return false; 
}   

int main(){
    vector<vector<int>> matrix = {
        {1,4,7,11,15},
        {2,5,8,12,19},
        {3,6,9,16,22}
    };

    target = 6 ; 

    cout << searchMatrix(matrix , target) << endl ;

    return 0;
}

// right corner
// 15 > target (6) => go left : c--
// 11 > 6 => go left
// 7 > 6 => go left
// 4 < 6 => go down
// 5 < 6 => go down
// 6 == 6 return true