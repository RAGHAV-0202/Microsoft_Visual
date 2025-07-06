#include<bits/stdc++.h>
using namespace std;

// BS-13. Minimum days to make M bouquets | Binary Search
// bloomday : array , flower will bloom on ith day
// m : number of bouquets to be made
// n : needed adjacent flowers

int minDays(vector <int> bloomDay , int m , int k){
    int low = INT32_MAX ;
    int high = INT32_MIN ;
    for(int i = 0; i < bloomDay.size() ; i++){
        low = min(low , bloomDay[i]);
        high = max(high , bloomDay[i]);
    }
    int answer = INT32_MAX ;

    while(low <= high){
        int mid = (low + high) / 2 ;

        int flowerCounter = 0 ;
        int adjacentCounter = 0;
        for(int i = 0 ; i < bloomDay.size() ; i++){
            if(bloomDay[i] <= mid){
                adjacentCounter++;
                if(adjacentCounter == k){
                    flowerCounter++;
                    adjacentCounter = 0;
                }
            }else{
                adjacentCounter = 0;
            }
        }
        if(flowerCounter >= m){
            answer = mid ;
            high = mid - 1 ;
        }else{
            low = mid + 1 ;
        }
    }
    if(answer == INT32_MAX) return -1;
    return answer;
}
 
int main(){
    vector <int> bloomday = {1,10,3,10,2 };
    cout << minDays(bloomday , 3 , 1) << endl;
    return 0 ;
}