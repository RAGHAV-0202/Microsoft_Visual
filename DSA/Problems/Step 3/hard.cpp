#include <iostream>
#include <map>
#include <set>
#include <unordered_set>
#include <string>
#include <algorithm>
#include <vector>
using namespace std;

int NcR(int n , int r){
    int ans = 1 ; 
    for(int i = 0 ; i < r ; i++ ){
        ans = ans * ( n - i ) ;
        ans = ans / (i + 1);
    }
    return ans;
}

int particular_Pascal_at_r_c(int row , int column){
    return NcR(row-1 , column - 1);
}

void pascal_brute(int n){
    vector<vector<int>> answer;
    for(int row = 1 ; row <= n ; row++  ){
        for(int i = row ; i <=  n - i + 3; i++){
            cout << " ";
        }
        vector<int>temp;
        for(int col = 1 ; col <= n ; col++){
            int x = NcR(row - 1 , col - 1);
            if(x == 0){
                continue;
            }else{
                cout << " " <<  x << " ";
                temp.push_back(x);
            }
        }
        cout << endl;
        answer.push_back(temp);
    }
}

vector<int> generateRow(int row){
    int ans = 1 ;
    vector <int> ansRow;
    for(int col = 1 ; col < row ; col++ ){
        ans = ans * (row - col);
        ans = ans / col ;
        ansRow.push_back(ans);
    }
    return ansRow;
}

vector<vector<int>> pascal_optimal(int n){
    vector<vector<int>> ans ;
    for(int i = 1 ; i <= n ; i++){
        vector<int>temp = generateRow(i);
        ans.push_back(temp);
    }
    return ans;
}

vector<int> majorityElement(vector<int>& nums) {
    map <int , int> mp;
    int n = nums.size();
    for(int i = 0 ; i  < n ; i++){
        mp[nums[i]] ++ ;
    }
    vector <int> ans;
    for(auto it = mp.begin(); it != mp.end(); it++){
        if(it->second > (n/3) ){
            ans.push_back(it->first);
        }
    }
    return ans;
}



int main(){
    // int x = particular_Pascal_at_r_c(5,3);
    // cout << x;

    // pascal_brute(5);
    // cout << endl ;
    // pascal_optimal(5);

    vector<int> majority = { 3, 2, 3 };
    vector<int> res = majorityElement(majority);
    for(int i = 0 ; i < res.size() ; i++){
        cout << res[i] << " ";
    }

        return 0;
}