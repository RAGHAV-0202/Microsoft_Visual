#include <bits/stdc++.h>
using namespace std;

bool hasHigherPrec(char a , char b ){ 
    if((a == '*' || a == '/') && (b == '+' || b == '-')){
        return true;
    }
    return a == b ;
}


string infix_to_postfix(string exp){
    stack <char> st;
    string postfix = "";
    for(int i =  0 ; i < exp.length() ; i++){
        if(exp[i] == '+' || exp[i] == '-' || exp[i] == '*' || exp[i] == '/'){
            while(!st.empty() && hasHigherPrec(st.top() , exp[i])){
                postfix += st.top();
                st.pop();
            }
            st.push(exp[i]);
        }else{
            postfix += exp[i];
        }
    } 
    while(!st.empty()){
        postfix+=st.top();
        st.pop();
    }

    return postfix ;
};

int evaluationOfPostFix(string exp){
    stack <int> st ;
    for(int i = 0 ; i < exp.length() ; i++){
        if(isdigit(exp[i])){
            st.push(exp[i] - '0');
        }else{
            int val2 = st.top();
            st.pop();
            int val1 = st.top();
            st.pop();
            switch (exp[i]){
            case '+':
                st.push(val1 + val2);
                break;
            case '-':
                st.push(val1 - val2);
                break;
            case '*':
                st.push(val1 * val2);
                break;
            case '/':
                st.push(val1 / val2);
                break;
            }
        }
    }
    return st.top();
}

int evaluatePrefix(string exp){
    stack <int> st;
    for(int i = exp.length() - 1 ; i >= 0 ; i--){
        if(isdigit(exp[i])){
            st.push(exp[i] - '0');
        }else{
            int val1 = st.top();
            st.pop();
            int val2 = st.top();
            st.pop();
            switch (exp[i]){
            case '+':
                st.push(val1 + val2);
                break;
            case '-':
                st.push(val1 - val2);
                break;
            case '*':
                st.push(val1 * val2);
                break;
            case '/':
                st.push(val1 / val2);
                break;
            }
        }
    }
    return st.top();
}

int main(){
    string infix_exp = "A+B*C" ;
    string postfix_exp = "23*54*+9-";
    string prefix_exp = "-+*23*549";

    string result = infix_to_postfix(infix_exp);
    cout << result << endl;

    cout << "PostFix Evaluation : "<<evaluationOfPostFix(postfix_exp) << endl;

    cout << "Prefix Evaluation : " << evaluatePrefix(prefix_exp) << endl;

    return 0;
}