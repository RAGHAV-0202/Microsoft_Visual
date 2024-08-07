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

// day 21

int subarray_0(vector<int>arr){
    int maxi = 0 ;
    int sum = 0 ;
    map <int,int> mp ; 
    for(int i = 0 ; i < arr.size() ; i++ ){     
        sum+=arr[i];
        if(sum == 0){
            maxi = i + 1 ;
        }else{
            if(mp.find(sum) != mp.end()){
                maxi = max(maxi , i - mp.find(sum)->second);
            }else{
                mp[sum] = i ;
            }
        }
    }

    return maxi;
}

// day 26
// day 27


// day 33



vector<vector<int>> merge(vector<vector<int>> intervals){
    sort(intervals.begin() , intervals.end());
    int n = intervals.size() ;
    vector<vector<int>> ans;
    for(int i = 0 ; i < n ; i++){
        int start = intervals[i][0];
        int end = intervals[i][1];
        if(!ans.empty() && end <= ans.back()[1]){
            continue;
        }
        for(int j = i + 1 ; j <  n ; j ++){
            if(intervals[j][0] <= end ){
                end = max(end , intervals[j][1]);
            }else{
                break;
            }
        }  
        ans.push_back({start,end});
    }
    
    return ans;
}

long long maximumHappinessSum(vector<int>& happiness, int k) {
    long long res = 0 ;
    int count = 0 ; 
    int right = happiness.size() - 1 ;
    sort(happiness.begin() , happiness.end());
    while(count < k && happiness[right] - count >= 0 &&  right >= 0){
        res += happiness[right] - count ;
        right--;
        count ++;
    }
    return res;
}

vector <int> merge_brute(vector<int>arr1 , vector<int> arr2){
    int l1 = 0 ; 
    int l2 = 0 ; 
    vector<int>res;
    int len = arr1.size()  + arr2.size();
    for(int i = 0 ; i < len ; i++){
        if(l1 == arr1.size()){
            cout << "1" << " ";
            res.push_back(arr2[l2]);
            l2++;
        }else if(l2 == arr2.size()){
            cout << "2" << " ";
            res.push_back(arr1[l1]);
            l1++;
        }else if(arr1[l1] <= arr2[l2]){
            cout << "3" << " ";
            res.push_back(arr1[l1]);
            l1++;
        }else{
            cout << "4" << " ";
            res.push_back(arr2[l2]);
            l2++;
        }
    }
    cout << endl;
    return res;
}
vector <int>  merge_optimal(vector<int>arr1 , vector<int> arr2 , int n , int m){
    int left = n - 1 ;
    int right = 0 ; 
    while(left >= 0 & right <m){
        if(arr1[left] > arr2[right]){
            swap(arr1[left], arr2[right]);
            left--, right++;
        }else{
            break;
        }
    }
    sort(arr1.begin(), arr1.end());
    sort(arr2.begin() , arr2.end() );
    return arr1;
}
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    for(int i = m ; i < m + n ; i++){
        nums1[i] = nums2[i - m ];
    }
    sort(nums1.begin() , nums1.end());
}

vector<int> findTwoElement(vector<int> arr, int n) {
    map<int,int> mp;
    long long sum = 0 ;
    int repeat = 0 ;
    for(int i = 0 ; i < n ; i++){
        mp[arr[i]]++;
        sum+=arr[i];
        if(mp[arr[i]] == 2){
            repeat = arr[i];
        }
    }
    vector<int> res;
    long long real_Sum = (n*(n+1) ) / 2 ;
    long long missing = real_Sum - sum + repeat;
    res.push_back(repeat);
    res.push_back(missing);
    return res;
}
int inversionCount(vector <int> &arr, long long N){
    int left = 0 ; 
    int right = N -1  ;
    int count = 0 ; 
    
    while(left <= right){
        for(int i = right ; i > left ; i--){
            cout << arr[left] << " " << arr[i] << endl;
            if(arr[left] > arr[i]){
                count++;
            }
        }
        left++;
    }
    return count;
}
int cnt = 0 ; 
void merge2(vector <int> &arr , int low , int mid , int high){
    vector<int> temp;
    int left = low ;
    int right = mid+ 1 ;
    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push_back(arr[left]);
            left++ ;
        }else{
            temp.push_back(arr[right]);
            cnt+= (mid - left +1);
            right ++ ; 
        }
    }
    while(left <=mid){
        temp.push_back(arr[left]);
        left++ ; 
    }
    while(right <=high){
        temp.push_back(arr[right]);
        right++ ; 
    }

    for(int i = low ; i <= high ; i++){
        arr[i] = temp[i - low];
    }
}

void merge_sort2(vector<int> &arr , int low , int high){
    if (low == high){
        return ;
    }

    int middle = (low + high) / 2 ;

    merge_sort2(arr , low , middle);
    merge_sort2(arr , middle + 1 , high);
    merge2(arr , low , middle , high);


    return ;
}

int inversionCount_better(vector<int> arr , int N){
    merge_sort2(arr,0,N-1);
    return cnt;

}

int countOdds(int low, int high) {
    if(low % 2 == 0 && high % 2 == 0) return (high - low)/2;
    return ((high - low)/2)+1;
}

int reversePairs(vector<int>& nums) {
    int count = 0 ; 
    for(int i = 0 ; i < nums.size() ; i++){
        for(int j = i+1 ; j < nums.size() ; j++ ){
            double x = nums[i];
            double y = nums[j] * 2.00;
            if(x> y){
                count++;
            }
        }
    }
    return count;
}
// 0 <= i < j < nums.length and nums[i] > 2 * nums[j].
int reversePairs(vector<int>&nums){
    int count = 0;


    
    return count;
}

//hard #41
int firstMissingPositive(vector<int>& nums) {
    sort(nums.begin() , nums.end());
    int small = 1;
    for(int i = 0 ; i < nums.size() ; i++){
        if(nums[i] < 1 || (i >= 1 && nums[i] == nums[i-1])){
            continue;
        }else if (nums[i] == small){
            small++;
        }else {
            return small;
        }
    }
    return small;
}

void recurPermute(vector<int> &ds , vector<int> &nums , vector<vector<int>> &ans , vector<int>freq ){
    if(ds.size() == nums.size()){
        ans.push_back(ds);
        return;
    }
    for(int i = 0 ; i < nums.size() ; i++){
        if(!freq[i]){
            ds.push_back(nums[i]);
            freq[i] = 1 ;
            recurPermute(ds,nums,ans,freq);
            freq[i] = 0;
            ds.pop_back();
        }
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> ans;
    vector<int> ds;
    int n = nums.size() ;
    vector<int> freq(n,0);
    recurPermute(ds, nums, ans, freq);
    return ans;
}

void nextPermutation(vector<int>& nums) {
    int index = - 1;
    int n = nums.size() ;
    for(int i = n - 2 ; i >= 0 ; i--){
        if(nums[i] < nums[i+1]){
            index = i ;
            break;
        }
    }
    if(index == -1){
        reverse(nums.begin() , nums.end());
        return;
    }
    for(int i = n - 1 ; i > index ; i--){
        if(nums[i] > nums[index]){
            swap(nums[i] , nums[index]);
            break;
        }
    }
    reverse(nums.begin() + index +1, nums.end());
    return;
}









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

    // cout << kthFactor(7,2);


    // cout << subarray_0(nums);
    // vector<vector<int>> subintervals = {{1,3} , {2,6} , {8,9}, {9,11} , {9,10} , {2,4} , {15,18} , {16,17}};

    // vector<vector<int>> res = merge(subintervals);
    // for(int i = 0 ; i < res.size() ; i++){
    //     for(int j = 0 ; j < res[0].size() ; j++){
    //         std::cout << res[i][j] << " ";
    //     }
    //     std::cout << endl;
    // }

    // vector<int> arr1 = {1, 2, 3, 0, 0, 0};
    // vector<int> arr2 = {2,5,6};
    // // vector<int> res = merge_brute(arr1, arr2);

    // vector<int> res = merge_optimal(arr1, arr2 , 3 ,3);
    // for(int  i = 0 ; i < res.size() ; i++){
    //     cout << res[i] << " " ;
    // }
    vector <int> arr = {2, 4, 1, 3, 5} ;
    int N = 5 ; 
    cout << inversionCount_better(arr,5);

        return 0;
}