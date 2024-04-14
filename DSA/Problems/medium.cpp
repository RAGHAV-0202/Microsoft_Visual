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


int main(){

    vector <int> nums = {2,7,11,15};
    int target = 9;
    TwoSum(nums,target);



    return 0;
}