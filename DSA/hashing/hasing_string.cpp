#include <iostream>
using namespace std ;


int main(){
        char str[] = "abcdefgaaaahijklmnopqrstuvwxyzabsABCDABasdVEWsfwstGSsghSFShsdlihjhalsid";


    int hash2[256] = {0};

    for(int i = 0 ; i < sizeof(str) / sizeof(str[0]) ; i++){
        hash2[str[i]] += 1 ;
    }
    cout << "enter number of searches : " ;
    int q ;
    cin >> q ;
    while(q--){
        char search ;
        cin >> search ;
        cout << "numbr of times " << search << " appeared = " << hash2[search] << endl;
    }

    return 0 ;
}