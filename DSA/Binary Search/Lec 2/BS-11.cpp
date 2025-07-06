#include <bits/stdc++.h>
using namespace std;

// BS-11. Find the Nth root of an Integer

int func(int mid , int n, int m){
    long long ans = 1 ; 
    for(int i = 1 ; i <= m ; i++){
        ans = mid * ans ;
        if(ans > n){
            return 2 ;
        }
    }
    if(ans == n)  return 1 ;
    return 0;
}

int findNthRoot(int n , int m){
    int low = 1 ;
    int high = n ;

    while(low <= high){
        int mid = (low + high) / 2 ;
        int power = func(mid,n,m);

        if(power == 1) return mid ;
        else if(power == 2) high = mid - 1 ;
        else low = mid +  1;

    }

    return -1 ;
}

int main(){
    int n = 27 ;
    int m = 3 ;
    cout << findNthRoot(n , m) << endl;

    return 0;
}