
#include <bits/stdc++.h>
using namespace std;


int main(){

    int n1 , n2 ;
    char optr ;

    char response = 'Y';
    while(response == 'Y'){
        cout << "Enter Input (eg. 2 * 6) : ";
        cin >> n1 >> optr >> n2;

        switch(optr) {
            int result;
            case '+' :
                result = n1 + n2 ;
                cout << n1 << " + " << n2 << " = " << result << endl; 
                break;
            case '-' :
                result = n1 - n2 ;
                cout << n1 << " - " << n2 << " = " << result << endl; 
                break;
            case '*':
                result = n1 * n2;
                cout << n1 << " * " << n2 << " = " << result << endl;
                break;
            case '/':
                result = n1 / n2;
                cout << n1 << " / " << n2 << " = " << result << endl;
                break;
            default : 
                cout << "Invalid Input" << endl;
        }   

        cout << "You want to calculate further ? (Y/N) : " ;
        cin >> response ;

    }

    return 0;
}