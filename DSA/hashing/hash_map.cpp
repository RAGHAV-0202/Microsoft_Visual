#include <iostream>
#include <map>
using namespace std ;


// storing and fetching takes log(n) under all cases

int main(){

    int array[] = {1,2,3,2,2,5,1,1,2,4,5,1,2,4,123542};

    map <int,int> mpp ; 

    for(int i = 0 ; i < sizeof(array) / sizeof(array[0]) ; i++){
        mpp[array[i]] ++ ;
    }

    cout << mpp[1] << endl ;
    cout << mpp[2] << endl;
    cout << mpp[5] << endl;


    return 0 ;
}