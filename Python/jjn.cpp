 #include<iostream>
 #include <bits/stdc++.h>
 using namespace std;

string reverse(string a){
    int len = a.length() ;
    for(int i = 0 ; i < len / 2 ; i++){
        swap(a[i] , a[len - i - 1]);
    }
    return a;
}

int main(){
    string a = "my name is raghav" ;
    sort(a.begin() , a.end()) ;
    cout << a << endl;
    
}