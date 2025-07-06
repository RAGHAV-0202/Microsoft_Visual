#include <bits/stdc++.h>
using namespace std;

// BS-10. Finding Sqrt of a number using Binary Search

int sqrt(int n){
    int ans = 1;

    int low = 1 , high = n ;
    while(low <= high){
        int mid = (low + high) / 2;
        int p = mid * mid ;
        if(p <= n){
            ans = mid ;
            low = mid + 1 ;
        }else if(p >= n){
            high = mid - 1 ;
        }
    }

    return ans ;
}

int main(){
    int n = 25 ;

    cout << sqrt(n) << endl;
}