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
void print7(int n){
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
void print8(int n){
    for(int i = 0 ; i < n ; i++){

        for(int j = 0 ; j < i ; j++){
            cout << " ";
        }

        for(int j = 0 ; j < (2*n) - 1 - (2*i) ; j++){
            cout << "*";
        }

        for(int j = 0 ; j < i ; j++){
            cout << " ";
        }

        cout << endl;
    }
}
void print10(int n){
    n = n * 2 ; 
    for(int i = 0 ; i < n ; i++){
        if(i < n /2 ){
            for(int j = 0 ; j < i ; j++){
                cout << "*";
            }
        }else if (i == n/2){
            for(int j = 0 ; j < i ; j++){
                cout << "*" ;
            }
        }else{
            for(int j = n - i ; j > 0 ; j--){
                cout << "*";
            }
        }
        cout << endl;
    }
}
void print11(int n){
    for(int i = 1 ; i <= n ; i++){
        for(int j = 0 ; j < i ; j++){
            if((i + j) % 2 == 0 ){
                cout << "0 " ;
            }else{
                cout << "1 " ;
            }
        }
        cout << endl ;
    }
}
void print12(int n){
    for(int i = 1 ; i <= n ; i++ ){
        for(int j = 1 ; j <= i ; j++){
            cout << j << " ";
        }

        for(int j = 1 ; j <= n - i ; j++){
            cout << "  ";
        }

        for(int j = 1 ; j <= n - i ; j++){
            cout << "  " ;
        }

        for(int j = i ; j > 0 ; j--){
            cout << j << " " ;
        }

        cout << endl ;
    }
}
void print13(int n){
    int count = 1 ; 
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j <= i ; j++){
            cout << count << " " ;
            count ++ ; 
        }
        cout << endl ; 
    }
}
void print14(int n){
    for(int i = 0 ; i < n ; i++){
        char count = 'A';
        for(int j = 0 ; j <= i ; j++){
            cout << count << " " ;
            count ++ ; 
        }
        cout << endl ; 
    } 
}
void print15(int n){
    for(int i = n ; i > 0 ; i--){
        char count = 'A';
        for(int j = i ; j > 0 ; j--){
            cout << count << " " ;
            count ++ ; 
        }
        cout << endl ; 
    } 
}



int main(){
    int n = 5 ;
    // piramid(n);
    // upsidedown_piramid(n);
    // print7(n);
    // print8(n);
    // print7(n);
    // print8(n);
    // print10(n);
    // print11(n);
    // print12(n);
    // print13(n);
    // print14(n);
    print15(n);

   return 0 ; 
}