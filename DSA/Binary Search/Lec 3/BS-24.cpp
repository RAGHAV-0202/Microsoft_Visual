#include <bits/stdc++.h>
using namespace std;

// BS-24 Search in a 2D Matrix

bool searchMatrixBetter(vector<vector<int>>& matrix, int target) {
    for(int i = 0 ; i < matrix.size() ; i++){
        if(matrix[i][0] > target) continue ;
        int low = 0 ; 
        int high = matrix[i].size() - 1 ;
        while(low <= high){
            int mid = (low + high) / 2 ;
            if(matrix[i][mid] == target){
                return true;
            }else if(matrix[i][mid] > target){
                high = mid - 1 ;
            }else{
                low = mid + 1;
            }
        }
    }   
    return false; 
}

bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int m = matrix.size();
    int n = matrix[0].size();
    int low = 0 ;
    int high = (m*n) - 1;

    while(low <= high){
        int mid = (low + high) / 2 ;
        int r = mid / n ;
        int c = mid % n;
        if(matrix[r][c] == target){
            return true;
        }else if (matrix[r][c] < target){
            low = mid + 1;
        }else{
            high = mid - 1 ;
        }
    }
    return false; 
}

int main(){
    vector <vector<int>> arr = {
        {1,3,5,7},{10,11,16,20},{23,30,34,60}
    } ;

    int target = 3 ;

    cout << searchMatrix(arr , target);

    return 0;
}