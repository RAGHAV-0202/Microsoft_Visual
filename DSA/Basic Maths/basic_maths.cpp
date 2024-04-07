#include <iostream>
using namespace std ;

int count_digit(int number){
    int count = 0 ; 
    while(number !=0){
        number = number / 10 ; 
        count++ ;
    }
    //   ;
    return count ; 
}
int reverse(int number){
    int rev = 0 ;
    while(number > 0){
        int digit = number % 10 ; 
        rev = (rev * 10 ) + digit ;
        number /= 10 ; 
    }
    return rev;
}
void checkPalindrome(int number){
    if(reverse(number) == number){
        cout << "it is a palindrome" << endl ;
    }else{
        cout << "not a palindrome" << endl ;
    }
}

int powerr(int number , int pow){

    int result = 1 ;
    for(int i = 0 ; i < pow ; i++){
        result = result * number ;
    }
    return result ;
}
int armstrong_process(int number , int pow){
    int answer = 0 ; 
    while(number != 0){
        int digit = number % 10 ; 
        answer = answer +  powerr(digit , pow) ;
        number = number / 10;
    }
    return answer ;
}
void armStrong(int number){
    int nDigits = count_digit(number);
    int answer = armstrong_process(number , nDigits);
    if(number == answer){
        cout << "it is an armstrong number" << endl ;
    }else{
        cout << "not an armstrong number" << endl ;
    }
}

int gcd(int number1 , int number2){
    int result = 1 ;

    for(int i = 1 ; i <= number1  ; i++){
        if(number1 % i == 0 && number2 % i == 0){
            if(i > result){
                result = i ;
            }
        }
    } 
    return result ;
}

int main(){

    int number = 456123 ;
    cout << "number of digits = " << count_digit(number) << endl;
    cout << "reversed number = " << reverse(number) << endl;
    checkPalindrome(number);
    armStrong(153);
    cout << "gcd : " << gcd(10,20) << endl;


    return 0 ; 
}