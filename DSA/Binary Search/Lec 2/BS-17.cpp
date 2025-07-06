#include <bits/stdc++.h>
using namespace std;

// BS-17. Aggressive Cows | Binary Search Hard

int aggressiveCows(vector<int> &stalls, int k) {
    sort(stalls.begin() , stalls.end());
    int low = 0 ; 
    int high = stalls[stalls.size() - 1];
    int answer ;
    while(low <= high){
        int mid = (low + high) / 2 ;
        int cows = 1;
        int last = 0 ; 
        for(int i = 1 ; i < stalls.size() ; i++){
            if(stalls[i] - stalls[last]  >= mid){
                cows++;
                last = i;
            }else{
                continue ;
            }
        }
        if(cows >= k){
            low = mid + 1 ;
            answer = mid ;
        }else{
            high = mid - 1 ;
        }
    }
    return answer ;

}

int main(){
    vector<int> stalls = {1, 2, 4, 8, 9};
    int k = 3 ;

    cout << aggressiveCows(stalls , k) ; 

    return 0;
}