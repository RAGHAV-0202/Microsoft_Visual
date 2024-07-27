#include <bits/stdc++.h>
using namespace std;
#include <string>

string decimalToBinary(int x){
    string answer ;
    while(x > 0 ){
        answer += to_string(x % 2);
        x /= 2 ;
    }
    reverse(answer.begin() , answer.end());
    return answer;
}

int binaryToDecimal(string binary){
    reverse(binary.begin(), binary.end());
    int answer = 0 ;

    for(int i = 0 ; i < binary.length() ; i++){
        answer += (binary[i] - '0' )* pow(2,i);
    }
    return answer;
}

int main(){
    int decimal = 13;
    string binary = decimalToBinary(decimal);
    // cout << binary << endl;


    cout << binaryToDecimal("1100101111101");
    return 0;
}
