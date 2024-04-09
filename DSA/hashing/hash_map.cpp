#include <iostream>
using namespace std ;
#include <map>
#include <vector>

// max freq with least value
// min freq with least value

int main(){

    int arr[] = {2,2,3,4,4,2};

    map <int,int> m ;
    int len = sizeof(arr) / sizeof(arr[0]);
    int max_freq = 0 , max_val = 0 ; 
    int min_freq = 999 , min_val = 999;
    
    for(int i = 0 ; i < len ; i++){
        m[arr[i]] += 1;
    }

    for(auto it : m){
        if(it.second  > max_freq || (it.second == max_freq && it.first > max_val)){
            max_freq = it.second ;
            max_val = it.first ;
        }

        if(it.second   < min_freq || (it.second == min_freq && it.first < min_val)){
            min_freq = it.second ;
            min_val = it.first ;
        }


    }
    

    cout << "max appeared value : " << max_val << endl;
    cout << "min appeared value : " << min_val << endl;

    return 0 ;
}