#include<bits/stdc++.h>
using namespace std;

// BS-14 Find the Smallest Divisor Given a Threshold
// given an array of nums
// we have to choose divisor , divide all by it and sum
// find the smallest divor, which divides all and sum is less than equal to threshold.

int smallestDivisor(vector<int>& nums, int threshold) {
    int low = 1 ;
    int high = INT32_MIN;
    for(int i = 0 ; i < nums.size() ; i++){
        high = max(high , nums[i]);
    }
    int answer = INT32_MAX;
    while(low <= high){
        int mid = low + (high - low) / 2;
        int currentSum = 0 ;
        
        for(int i = 0 ; i < nums.size() ; i++){
            currentSum+= ceil(nums[i] / (float)mid);
            if(currentSum > threshold) break;
        }

        if(currentSum > threshold){
            low = mid + 1 ;
        }else{
            answer = mid ;
            high = mid - 1 ;
        }
    }
    return answer ;
}
 
int main(){
    vector <int> nums  = {1,2,5,9};
    int threshold = 6 ;
    cout << smallestDivisor(nums , threshold) << endl;
    return 0 ;
}