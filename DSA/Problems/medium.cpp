#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
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
        sum = sum + arr[i];
        if(sum < 0){
            sum = 0;
        }
        if(sum > max){
            max = sum ;
        }
    }
    return max;
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

    cout << "Brute : " <<subArrSum(m) << endl;
    cout << "Better : " << subArrSum_better(m) << endl;
    cout << "Optimal : " << subArrSum_optimal(m) << endl;

    return 0;
}