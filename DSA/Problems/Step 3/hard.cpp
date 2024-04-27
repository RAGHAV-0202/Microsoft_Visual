#include <iostream>
#include <map>
#include <set>
#include <unordered_set>
#include <string>
#include <algorithm>
#include <vector>
#include <cmath>
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

vector <int> majorityElement_optimal(vector<int> &v){
    int el1 = INT32_MIN ;
    int el2 = INT32_MIN ;
    int c1 = 0 ; 
    int c2 = 0 ;
    int n = v.size() ;
    vector <int> ans;
    for(int i = 0 ; i < n ; i++){
        if(c1 == 0 && v[i] != el2 ){
            c1 = 1 ;
            el1 = v[i];
        }else if (c2 == 0 && v[i] != el1){
            c2 = 1 ;
            el2 = v[i];
        }
        else if(v[i] == el1){
            c1++;
        }else if(v[i] == el2){
            c2++;
        }else{
            c1--;
            c2-- ;
        }
    }
    int N = floor(n/3);

    c1 = 0 , c2 = 0 ;

    for(int i = 0 ; i < n ; i++){
        if(v[i] == el1){
            c1++;
        }else if (v[i] == el2){
            c2++;
        }
    }

    if(c1 > N){
        ans.push_back(el1);
    }
    if(c2 > N ){
        ans.push_back(el2);
    }

    return ans;
}

vector<vector<int>> threeSum_brute(vector<int> &arr){

    
    set<vector<int>> st;
    int n = arr.size();
    for(int i = 0 ; i < n ; i++){
        for(int j = i+1 ; j < n ; j++){
            for(int k = j + 1 ; k < n ; k++){
                if(arr[i] + arr[j] + arr[k] == 0){
                    vector <int> temp = {arr[i] , arr[j] , arr[k]};
                    sort(temp.begin() , temp.end());
                    st.insert(temp);
                }
            }
        }
    }
    vector<vector<int>> ans(st.begin() , st.end());
    return ans;
}

vector<vector<int>> threeSum_better(vector<int> &num){
    // O(n^ x log n)
    int len = num.size() ;
    set<vector<int>>st; 
    for(int i = 0 ; i < len ; i++){
        set<int>hashset;
        for(int j = i+1 ; j < len ; j++){
            int third = -(num[i] + num[j]);
            if(hashset.find(third)!=hashset.end()){
                vector<int>temp = {num[i] , num[j] , third};
                sort(temp.begin() , temp.end());
                st.insert(temp);
            }
            hashset.insert(num[j]);
        }

    }

    vector<vector <int>> answer(st.begin() , st.end());

    return answer;
}

vector<vector<int>> threeSum_optimal(vector<int> &num){

    vector<vector <int>> answer;
    int len = num.size();
    sort(num.begin() , num.end());

    for(int i = 0 ; i < len ; i++){
        if(i>0 && num[i] == num[i -1]) continue;
        int j = i+ 1 ;
        int k = len - 1 ;
        while(j < k ){
            int sum = num[i] + num[j] + num[k];
            if(sum < 0){
                j++; ;
            }else if (sum > 0){
                k-- ;
            }else{
                vector<int> temp = { num[i] , num[j] , num[k] };
                answer.push_back(temp);
                j++ ;
                k-- ;
                while(j< k && num[j] == num[j-1]){
                    j++;
                }
                while(j< k && num[k] == num[k+1]){
                    k--;
                }
            }
        }
    }

    return answer;
}

/// day 16 above

// day 17 below

vector<vector<int>> fourSum_optimal(vector<int> &num , int target){

    int n = num.size();
    sort(num.begin() , num.end());
    vector<vector<int>> answer;


    for(int i = 0 ; i < n ; i++){
        if(i > 0 && num[i] == num[i-1]){continue;}
        for(int j = i + 1 ; j < n ; j++){
            if(j!=i+1 && num[j] == num[j-1]) {continue;}
            int k = j + 1;
            int l = n - 1;
            while(k < l){
                int sum = num[i] + num[j] ;
                sum += num[k] + num[l];
                if(sum < target){
                    k++;
                    // while(k < l && num[k] == num[k - 1 ]){
                    //     k++;
                    // }
                }else if (sum > target){
                    l--;
                    // while(k < l && num[l] == num[l+1]){
                    //     l-- ;
                    // }
                }else{
                    vector<int> temp = { num[i], num[j] , num[k] ,num[l] };
                    answer.push_back(temp);
                    k++;
                    l--;
                    while(k < l && num[l] == num[l+1]){
                        l-- ;
                    }
                    while(k < l && num[k] == num[k - 1 ]){
                        k++;
                    }
                }
            }
        }
    }

    return answer;

}

// day 18 below
// #1492
int kthFactor(int n, int k) {
    int count = 0 ; 
    for(int i = 1 ; i <= n ; i++){
        if(n % i == 0){
            count = count + 1   ;
            if(count == k){
                return i ; 
            }
        }
    }
    return -1 ;
}
// # 383
bool canConstruct(string ransomNote, string magazine) {
    map <char,int> mp;
    for(int i = 0; i < magazine.size() ; i++){
        mp[magazine[i]] ++ ;
    }

    for(int i  = 0 ; i < ransomNote.size() ; i++){
        auto it = mp.find(ransomNote[i]) ;
        if(it == mp.end() || mp[ransomNote[i]] == 0){
            return false;
        }else{
            mp[ransomNote[i]] -- ;
        }
    }
    return true;
}
//#1672
int maximumWealth(vector<vector<int>>& accounts) {
    int res = 0 ;
    for(int i = 0 ; i < accounts.size() ; i++ ){
        int temp = 0 ; 
        for(int j = 0 ; j < accounts[0].size() ; j++){
            temp+=accounts[i][j];
        }
        res = max(res,temp);
    }
return res;
}
// #242
bool isAnagram(string s, string t) {
    // map <char, int> mp ;
    // if(s.size() != t.size() ) return false ;
    // for(int i = 0 ; i < s.size() ; i++){
    //     mp[s[i]]++ ;
    // }

    // for(int i = 0 ; i < t.size() ; i++){
    //     auto it = mp.find(t[i]);
    //     if(it == mp.end()){
    //         return false;
    //     }else if(it->second > 0){ 
    //         it->second -- ;
    //     }else{
    //         return false ;
    //     }
    // }
    // return true;
    int arr[26] = {0};
    if (s.size() != t.size())
        return false;
    for(int i = 0; i < s.size(); i++){
        arr[s[i]-'a']++;
    }
    for(int j = 0; j<t.size(); j++){
        arr[t[j]-'a']--;
        if (arr[t[j]-'a']<0)
            return false;
    }
    return true;

}

// day 19 below

// #392
bool isSubsequence(string s, string t) {
    int last_index = -1 ;
    for(int i = 0 ; i < s.size() ; i++){
        int flag = 0 ; 
        for(int j = last_index+1 ; j < t.size() ; j++){
            if(s[i] == t[j]){
                flag = 1 ; 
                last_index = j ;
                break;
            }
        }
        if(flag == 0){
            return false ;
        }
    }
    return true;
}
// day 20 below












int main(){
    // int x = particular_Pascal_at_r_c(5,3);
    // cout << x;

    // pascal_brute(5);
    // cout << endl ;
    // pascal_optimal(5);

    // vector<int> majority = { 1,2 };
    // vector<int> res = majorityElement(majority);
    // vector<int> res = majorityElement_optimal(majority);

    vector<int> nums = {1, 0, -1, 0, -2, 2};
    // vector<vector <int>> res = threeSum_brute(nums);
    // vector<vector <int>> res  = threeSum_better(nums);
    // vector<vector<int>> res = threeSum_optimal(nums);
    // vector<vector<int>> res = fourSum_optimal(nums , 0);

    // for(int i = 0 ; i < res.size() ; i++){
    //     for(int j = 0 ; j < res[0].size() ; j++){
    //         cout << res[i][j] << " " ;
    //     }
    //     cout << endl;
    // }

    cout << kthFactor(7,2);

        return 0;
}