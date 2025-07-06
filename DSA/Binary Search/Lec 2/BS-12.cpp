#include <bits/stdc++.h>
using namespace std;
// BS-12. Koko Eating Bananas

// self brute
int minEatingSpeed(vector<int>& piles, int h) {
    int count = piles.size();
    int answer = 1 ;
    int high = INT32_MIN;


    for(int i = 0 ; i < count ; i++){
        high = max(high , piles[i]);
    }

    for(int i = 1 ; i <= high ; i++){
        // speed = i ;
        int totalTimeTaken = 0;
        for(int j = 0 ; j < count ; j++){
            int time_required = piles[j];
            float time_taken = piles[j] / (float)i;
            totalTimeTaken += ceil(time_taken);

            if(totalTimeTaken > h) break; 
        }
        if(totalTimeTaken <= h){
            answer = i ;
            return answer ;
        }
    }
    return answer;
}



int minEatingSpeedBS(vector <int> &piles , int h){
    int low = 1 ; 
    int high = 1 ;
    for(int i = 0 ; i < piles.size() ; i++){
        high = max(high , piles[i] );
    }
    int answer = 1 ;
    while(low <= high){
        int mid = low + (high - low) / 2;
        double totalTimeTaken = 0;
        for(int i = 0 ; i < piles.size() ; i++){
            int timeRequired = piles[i];
            float timetaken = piles[i] / float(mid);

            // totalTimeTaken = totalTimeTaken + ceil(timetaken) ;
            totalTimeTaken += (piles[i] + mid - 1) / mid;
        }

        if(totalTimeTaken <= h){
            answer = mid ;
            high = mid - 1;
        }else{
            low = mid + 1 ;
        }
    }
    return answer ;
}


int main(){
    vector <int> piles = {3,6,7,11};
    int h = 8;

    // cout << minEatingSpeed(piles , h) << endl ; 
    cout << endl <<  minEatingSpeedBS(piles , h) << endl ; 
}