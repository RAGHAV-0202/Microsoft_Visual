#include <iostream>
using namespace std;

void piramid(int n){
    for(int i = 1 ; i <= n ; i++){
        for(int j = 1 ; j <= (2 * n ) - 1 ; j++){
            if(j > (2*n) - 1 - i && j < (2*n) - 1 + i){
                cout << "* " ;
            }else{
                cout << " ";
            }
        }
        cout << endl;
    }
}
void print7(int n ){
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < n - 1 - i ; j ++){
            cout << " ";
        }

        for(int j = 0 ; j < 2*i + 1 ; j++){
            cout << "*" ;
        }

        for(int j = 0 ; j < n - 1 - i ; j ++){
            cout << " ";
        }


        cout << endl ;
    }
}
void upsidedown_piramid(int n ){
    for(int i = 1 ; i <= n ; i++){
        for(int j = 1 ; j <= (2*n) - 1 ; j++){
            if(j > (2*n) - 1 - i && j < (2*n) - 1 - i){
                cout << "* ";
            }else{
                cout << " ";
            }
        } 
        cout << endl;
    }
}

int main(){
    int n = 5 ;
    // piramid(n);
    // upsidedown_piramid(n);
    print7(n);


   return 0 ; 
}