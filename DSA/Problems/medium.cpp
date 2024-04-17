#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <unordered_set>
#include <map>
using namespace std;

void TwoSum(vector<int> &nums , int target){

    for(int i = 0 ; i <nums.size() ; i++){
        for(int j = 0 ; j < nums.size() ; j++){
            if(nums[i]  + nums[j] == target){
                cout << "[" << i << "," << j <<"]" << endl;
                return;
            }
        }
    }
    cout << "not found" << endl;
}
void TwoSum_better(vector<int> &nums , int target){
    map <int , int> mpp;
    for(int i = 0 ; i <nums.size() ; i++){
        int a = nums[i];
        int more = target - a ; 
        if(mpp.find(more) != mpp.end()){
            cout << "YES" << endl;
        }
        mpp[a] = i ;
    }
    cout <<  "NO" << endl;
    
}

void sort_Zero_One_Two(vector<int>& nums) {
    int c0 = 0 , c1 = 0 , c2 = 0 ;
    for(int i = 0 ; i < nums.size() ; i++){
        if(nums[i] == 0){
            c0++ ;
        }else if (nums[i] == 1){
            c1++ ;
        }else{
            c2++ ;
        }
    }
    for(int i = 0 ; i < nums.size() ; i++){
        if(i < c0){
            nums[i] = 0;
        }else if(i < c1 + c0){
            nums[i] = 1;
        }else if (i < c1 + c0 + c2 ){
            nums[i] = 2;
        }
    }
}

int majorityElement(vector<int> v) {
	map <int,int> mpp;
    int len = v.size();
	for(int i = 0 ; i < v.size() ;i++){
        int a = v[i];
		mpp[a] ++ ;
        if(mpp[a] > v.size() / 2){
            return a;
        }
	} 

    return 0  ;
	
}

int majorityElement_optimal(vector <int> &v){
    // if count is negative ignore piche wale numbers
    // mooore
    int count = 0 ; 
    int el ;
    for(int i = 0 ; i < v.size() ; i++){
        if(count == 0){
            count = 1 ;
            el = v[i];
        }else if (v[i] == el ){
            count ++ ;
        }else {
            count -- ;
        }
    }
    int cnt1 = 0 ;
    for(int i = 0 ; i < v.size() ; i++ ){
        if(v[i] == el) {
            cnt1++;
        }
    }
    if(cnt1 > (v.size()) / 2){
        return el;
    }
    return -1 ; 
}

int subArrSum(vector <int> &arr){
    int max = INT32_MIN;
    int len = arr.size(); 
    for(int i = 0 ; i  < len ; i++){
        for(int j = i ; j < len ; j++){
            int sum = 0 ; 
            for(int k = i ; k <= j ; k++){
                sum = sum + arr[k];
            }
            if(sum > max){
                max = sum ; 
            }
        }
    }
    return max ;
}

int subArrSum_better(vector <int> &arr){
    int max = INT32_MIN;
    int len = arr.size(); 
    for(int i = 0 ; i  < len ; i++){
        int sum = 0 ; 
        for(int j = i ; j < len ; j++){
            sum += arr[j];
        }
        if(sum > max){
            max = sum ; 
        }
    }
    return max ;
}

int subArrSum_optimal(vector <int> &arr){
    //Kadane's Algorithm

    int max = INT32_MIN;
    int sum = 0 ;
    for(int i = 0 ; i < arr.size() ; i++){
        if(sum < 0){
            sum = 0;
        }
        sum = sum + arr[i];
        if(sum > max){
            max = sum ;
        }
    }
    return max;
}

void print_Sub_max(vector <int> &arr){
    int max = INT32_MIN;
    int sum = 0 ;
    int initial = 0 ; 
    int final = 0 ; 
    for(int i = 0 ; i < arr.size() ; i++){
        if(sum < 0){
            sum = 0;
            initial = i;
        }
        sum = sum + arr[i];
        if(sum > max){
            max = sum ;
            final = i ;
        }
    }
    cout << "[";
    for(int i = initial ; i <= final ; i++){
        cout << arr[i] << ",";
    } 
    cout << "]";
}

int maxProfit(vector <int> &prices){
    int profit = 0 ; 

    for(int i = 0 ; i < prices.size() ; i++){
        for (int j = i; j < prices.size() ; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i] ;
            }
        }
    }
    return profit;
}

int maxProfit_better(vector <int> &prices){
    int profit = 0 ; 
    int minP = prices[0];
    for(int i = 1 ; i < prices.size() ; i++){
        int diff = prices[i] - minP ;
        profit = max(profit,diff);
        minP = min(minP,prices[i]);
    }
    return profit;
}

// Buy and sell stocks II 
// here allowed to buy and sell as many times as we want

void rearrange_elem(vector <int> &arr){
    vector <int> neg;
    vector<int> pos;
    for(int i = 0 ; i < arr.size() ; i++){
        if(arr[i] < 0){
            neg.push_back(arr[i]);
        }else{
            pos.push_back(arr[i]);
        }
    }


    if(pos.size() > neg.size()){
        for(int i = 0 ; i < neg.size() ; i++){
            arr[2*i] = pos[i];
            arr[2*i+1] = neg[i];
        }
        int index = neg.size() *2 ;
        for(int i = neg.size() ; i < pos.size() ; i++){
            arr[index] = pos[i];
            index++ ;
        }
    }else{
        for(int i = 0 ; i < pos.size() ; i++){
            arr[2*i] = pos[i];
            arr[2*i+1] = neg[i];
        }
        int index = pos.size() *2 ;
        for(int i = pos.size() ; i < neg.size() ; i++){
            arr[index] = neg[i];
            index++ ;
        }
    }
}

void rearrange_elem_better(vector <int> &arr){
    int temp[arr.size()] ;
    int posi_count = 0 ;
    int negi_count = 1;
    for(int i = 0 ; i < arr.size() ; i++ ){
        if(arr[i] < 0){
            temp[negi_count] = arr[i];
            negi_count = negi_count + 2 ;
        }else{
            temp[posi_count] = arr[i];
            posi_count = posi_count + 2 ;
        }
    }
    for(int i = 0 ; i < arr.size() ; i++){
        arr[i] = temp[i];
    }
}

vector<int> superiorElements(vector<int>&a) {
    vector <int> res;
    int n = a.size();
    int maxElem = a[n-1];
    res.push_back(maxElem);

    for(int i = n - 2 ; i >= 0  ; i--){
        if(a[i] > maxElem){
            maxElem = a[i];
            res.push_back(maxElem);
        }
    }

    return res;
}

int find(vector <int> &arr , int x){
    for(int i = 0 ; i < arr.size() ; i++){
        if(arr[i] == x ){
            return 1 ;
        }
    }
    return 0 ;
}

void longest_consecutive_brute(vector <int> &arr){
    int res = 0 ; 
    int count = 0 ;
    int n = arr.size() ;
    for(int i = 0 ; i < n ; i++){
        int x = arr[i];
        count = 1 ;
        int search = find(arr,x+1);
        while(search == 1){
            x = x + 1 ;
            count ++ ;
            search = find(arr , x+1);
        }
        if(count > res){
            res = count ;
        }
    }
    cout <<"max consecutive numbers : " << res << endl;
}
/// @brief sort for better max conse
/// @param arr 
/// @param low 
/// @param middle 
/// @param high 
void merge(vector <int> &arr , int low , int middle , int high){
    vector <int> temp;
    int left = low ;
    int right = middle + 1;
    while(left <= middle && right <= high){
        if(arr[left] < arr[right]){
            temp.push_back(arr[left]);
            left ++ ;
        }else{
            temp.push_back(arr[right]);
            right++;
        }
    }
    while(left <= middle){
        temp.push_back(arr[left]);
        left++;
    }
    while(right <= high){
        temp.push_back(arr[right]);
        right++;
    }
    for(int i = low ; i <= high ; i++){
        arr[i] = temp[i - low];
    }
}

void mergesort(vector <int> &arr , int low , int high){
    if(low == high){
        return;
    }
    int middle = (low + high) / 2 ;

    mergesort(arr,low , middle);
    mergesort(arr,middle+ 1 , high);
    merge(arr,low,middle,high);
    
    return;
}

void longest_consecutive_better(vector <int> &arr){
    // first sort......
    int n = arr.size();
    int res = 1 ;
    if(n == 0){
        res = 0;
    }else if (n == 1){
        res =  1;
    }
    mergesort(arr,0,n-1);
    int x = arr[0];
    int count = 1 ;
    for(int i = 1 ; i < n ;i++){
        cout << arr[i] << " " ;
        if(arr[i] == x){
            if(count >= res){
            res = count;
            }
            continue;
        }
        if(arr[i] == x+1){
            x++ ;
            count ++ ;
        }else{
            if(count > res){
                res = count;
            }
            x = arr[i];
            count = 1;
        }
        if(count > res){
            res = count;
        }
    }
    cout << "Max consecutive numbers : "<< res << endl;
}

int longest_consecutive_better_2(vector <int> &nums){
    int n = nums.size();
    mergesort(nums, 0, n - 1);
    int longest = 1 , count = 1 , lastSmall = INT32_MIN; 
    for(int i = 0  ;  i< n ; i++){
        if(nums[i] - 1 == lastSmall){
            count ++;
            lastSmall = nums[i];
        }else if (nums[i] == lastSmall){
            continue;
        }else if (nums[i] != lastSmall){
            count = 1 ;
            lastSmall = nums[i];
        }
        longest = max(longest , count);
    }
    cout << "Max consecutive numbers : " << longest << endl;
};

int longest_consecutive_optimal(vector <int> &nums){
    int n = nums.size();
    if(n ==0){
        return 0;
    }else if(n == 1){
        return 1 ; 
    }
    int longest = 1 ;

    unordered_set <int> st;
    for(int i = 0 ; i < n ; i++){
        st.insert(nums[i]);
    }
    for(auto it : st){
        if(st.find(it - 1) == st.end()){
            int count = 1 ;
            int x = it;
            while(st.find(x+1) != st.end()){
                x = x+ 1 ;
                count = count + 1 ;
            }
            longest = max(longest , count);
        }
    }
    return longest;

}

int main(){

    // vector <int> nums = {2,7,11,15};
    // int target = 9;
    // TwoSum(nums,target);

    vector<int> m = {1, 1, -2,2, 0 ,-5, 0, 0, 1,5, 2, 1, 0};
    // sort_Zero_One_Two(m);
    // for(int i = 0 ; i < m.size() ; i++){
    //     cout << m[i] << " " ;
    // }

    // vector<int> majority_elem = {-53 ,75, 56, 56, 56};
    // cout << majorityElement(majority_elem) << endl; 
    // cout << majorityElement_optimal(majority_elem) << endl;

    // cout << "Brute : " <<subArrSum(m) << endl;
    // cout << "Better : " << subArrSum_better(m) << endl;
    // cout << "Optimal : " << subArrSum_optimal(m) << endl;
    // print_Sub_max(m);


    // vector <int> prices = {7,1,5,3,6,4};
    // cout << maxProfit(prices) << endl;
    // cout << maxProfit_better(prices) << endl;

    // vector <int> rearr = {1,2,3,4,-5,-6,-7,-8,-6,-6,-5};
    // // rearrange_elem(rearr);
    // // // rearrange_elem_better(rearr);
    // // for(int i = 0 ; i < rearr.size() ; i++){
    // //     cout << rearr[i] << " " ;
    // // }


    // vector <int> arr = {1,2,2,1};
    // vector <int> res ;
    // res = superiorElements(arr);
    // for(int i = 0 ; i < res.size() ; i++){
    //     cout << res[i] << " " ;
    // }

    vector<int> longConse = {0,0};
    longest_consecutive_brute(longConse);
    longest_consecutive_better(longConse);
    longest_consecutive_better_2(longConse);
    cout << "Max consecutive numbers : " << longest_consecutive_optimal(longConse) << endl;

        return 0;
}