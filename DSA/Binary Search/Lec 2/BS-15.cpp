#include <bits/stdc++.h>
using namespace std;

// BS-15. Capacity to Ship Packages within D Days

// should be shipped within "days" days
// ith package has weight = weights[i]
// we have to find shipCapacity per day , so that it can load everything within days


// if days is 1 , so high must be sum of all....

int shipWithinDays(vector<int>& weights, int days) {
    int low = INT32_MAX;
    int high = 0;
    for(int i = 0 ; i < weights.size() ; i++){
        high += weights[i];
        low = min(low , weights[i]);
    }

    int answer = INT32_MAX ;

    while(low <= high){
        int mid = low + (high - low) / 2;
        int currentDays = 1 ; 
        int currentWeight = 0 ; 

        for(auto w : weights){
            if(currentWeight + w > mid){
                currentDays ++ ;
                if(currentDays > days) break;
                currentWeight = w ;
            }else{
                currentWeight += w;
            }
        }

        if(currentDays > days){
            low = mid + 1 ;
        }else{
            answer = mid ;
            high = mid - 1 ;
        }
    }
    return answer ;
}

int main(){
    vector <int> weights = {1,2,3,1,1};
    int days = 4 ; 
    cout << shipWithinDays (weights , days) << endl;

    return 0;
}