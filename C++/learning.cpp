#include <iostream>
#include <algorithm>
#include <stack>
#include <queue>
using namespace std;
#include <vector>

// for heap
#include <bits/stdc++.h>

class book{
    public :
    string title ;
    string author ;
    int pages ;
    int sales;

    book(string aTitle , string aAuthon , int aPages){
        title = aTitle ;
        author = aAuthon ;
        pages = aPages ;
    }

} ;

int main(){

    // cout << "hello"  << endl;

    // for(int i = 0 ; i <=5 ; i++){
    //     cout << "number is : " << i  << "\n";
    // }

    // int array[] = {1,2,3,4,5,6};

    // for(int i = 0 ; i < (sizeof(array) / sizeof(array[0])) ; i++ ){
    //     cout << "array[" << i << "] is : " << array[i] << "\n";
    // }

    // int age ; 
    // std::cout << "enter your age : ";
    // std::cin>>age;
    // cout << "your age is " << age << "\n" ; 

    // clog << "an error occured" ;

    // int a[5] = {1,2,3,4,5};
    // cout << a[0] << endl;
    // cout << a[1] << endl;
    // cout << a[2] << endl;
    // cout << a[3] << endl;
    // cout << a[4] << endl;

    // string s("hello my name is raghav");
    // std::cout << s  << endl;
    // cout << "character at index 4 is " << s.at(4) << endl;
    // cout << "length of the string is " << sizeof(s) / sizeof(s[0]) << endl;
    // int index = s.find("hello");
    // s.replace(index , 3 , "hiiiii");

    // std::cout << s << endl;
    // string s1 = s.substr(0,10);
    // cout << "substring s1 : " << s1 << endl ;

    // s.clear() ; 
    // cout << s << endl ; 
    // cout << "enter the string : " ; 
    // cin >> s ;
    // cout << s << endl ; 
    // s.erase(3,5);
    // cout << s << endl;

    // pointers

    // int x = 5 ; 
    // int *ptr ; 
    // ptr = &x ;
    // cout <<"address of x : " << &x << endl ;
    // cout << "address stored in ptr : " << ptr << endl;
    // cout << "value of ptr : " <<*ptr << endl ; 
    // cout << "address of ptr : " << &ptr << endl ;

    // int *ptr1 ;
    // char *ptr2 ;
    // long *ptr3 ;
    // cout << "size of integer pointer : " << sizeof(ptr1) << endl ;
    // cout << "size of character pointer : " << sizeof(ptr2) << endl;
    // cout << "size of long pointer : " << sizeof(ptr3) << endl;

    // int x[] = {34,39,37,27};
    // int *ptr;
    // ptr = x ; 
    // // cout << *ptr << endl ;
    // // ptr++ ;
    // // cout << *ptr << endl;
    // for(int i = 0 ; i < 4 ; i++){
    //     // cout << *ptr << endl;
    //     // ptr ++ ;

    //     cout << ptr[i] << endl ;
    // }

    // int x = 10 ; 

    // cout << x++ << endl ;
    // cout << x << endl ; 
    // cout << ++x << endl ;

    // int array[3][4] = {{1,2,3,4} , {5,6,7,8} , {9,10,11,12} };
    // for(int i = 0 ; i < sizeof(array)/sizeof(array[0]) ; i++){
    //     for(int j = 0 ; j < sizeof(array[0])/sizeof(array[0][0])  ; j++){
    //         cout << array[i][j] <<" "; 
    //     }
    //     cout << endl ;
    // }

    // int array3D[2][2][2] = {{ {1,2} , {3,4} }, { {5,6} , {7,8}}} ;
    // for(int i = 0 ; i < 2; i++){
    //     for(int j = 0 ; j < 2 ; j++){
    //         for(int k = 0 ; k < 2 ; k++){
    //             cout << "array[" << i << "][" << j << "][" << k << "] is " ;
    //             cin >> array3D[i][j][k] ; 
    //         }
    //     }
    // }

    // for(int i = 0 ; i < 2; i++){
    //     for(int j = 0 ; j < 2 ; j++){
    //         for(int k = 0 ; k < 2 ; k++){
    //             cout << "array[" << i << "][" << j << "][" << k << "] is " <<array3D[i][j][k]  << endl ;;
    //         }
    //     }
    // }
    /// SORTING 
    // 
    // int i ; 
    // sort(a,a+10);
    // for(i = 0 ; i < 10 ; i++){
    //     cout << a[i] << " " ; 
    // }

    //      BINARY SEARCH USING ALGO LIBRARY

    // int a[10] = {1, 15, 14, 5, 2, 8, 6, 21, 12, 4};
    // int len = sizeof(a) / sizeof(a[0]);
    // sort(a, a + len);

    // int tofind = 6 ; 
    
    // if(binary_search(a , a+len , tofind)){
    //     cout << tofind << " " <<" is present in the data " ;
    // }else{
    //     cout << tofind << " " << "is not present in the data";
    // }

    //// STACK
    // FIrst IN last OUT

    // stack <int> s ;
    // s.push(10);
    // s.push(20);
    // s.push(30);
    // s.push(40);
    // s.push(50);
    // cout << "size of stack is " << s.size() << endl ;
    // // cout << "top elem : " << s.top() << endl ;

    // stack <int> s1 ;
    // s1 = s ;
    // while (!s1.empty()){
    //     cout << s1.top() << " " ;
    //     s1.pop() ; 
    // }


    // QUEUES

    // First IN First OUT

    // queue <int> q ;
    // q.push(1);
    // q.push(2);
    // q.push(3);
    // q.push(4);
    // q.push(5);

    // cout << "Size of the queue : " << q.size() << endl ; 

    // cout << "first elem (front) : " << q.front() << endl ;

    // cout << "last elen (back) : " << q.back() << endl ;

    // while (!q.empty()){
    //     cout << q.front() << " " ;
    //     q.pop() ; 

    // }

    /// Priority queue
    //first elem is >> than others
    // priority_queue <int> q ;
    // q.push(10);
    // q.push(100);
    // q.push(70);
    // q.push(30);
    // q.push(5);

    // // cout << "top : " << q.top() << endl ; 

    // while ( !q.empty()){
    //     cout << q.top() << " " ;
    //     q.pop() ;
    // }

    ///         Vectors
    // acts like dynamic array 
    // vector <int> v ;
    // int size = 10 ; 
    // for(int i = 1 ; i < size ; i++){
    //     v.push_back(i);
    // }
    // for(int i = 0 ; i < size - 1; i++){
    //     cout << v[i] << " " ;
    // }
    // cout << "size : " << v.size() << endl ;
    // cout <<"capacity : " << v.capacity() <<endl ;
    // cout << "Max size  : " << v.max_size() << endl;

    // if(v.empty()){
    //     cout << "empty";
    // }else{
    //     cout << "not empty";
    // }

    // cout << "first : " << v.front() << endl;
    // cout << "last : " << v.back() << endl;
    // cout << "at n  : " << v.at(3) << endl;

    /// ITERATORS

    // vector <int> ar ;
    // for(int i = 1 ; i <=5 ;i++){
    //     ar.push_back(i);
    // }

    // // vector <int>::iterator ptr ;

    // // cout << "the elems are : " ; 
    // // for(ptr = ar.begin() ; ptr < ar.end() ; ptr++){
    // //     cout << *ptr << " " ;
    // // }

    // vector<int>::iterator ptr = ar.begin();
    // advance(ptr,3);
    // cout << *ptr << endl ; 

    //HEAP IN C++

    // vector <int> v1 = {12,30,25,35,45};

    // make_heap(v1.begin() ,  v1.end());

    // cout << "the max elem of heap is : " ;
    // cout << v1.front() <<endl ;
    // cout << "heap : " ;
    // for(int i = 0 ; i < v1.size() ; i++){
    //     cout << v1[i] << " " ;
    // }
    // cout <<endl ;

    // v1.push_back(79);
    // push_heap(v1.begin() , v1.end());
    // sort_heap(v1.begin(), v1.end());
    // cout << "After pushing :  " ;
    // for(int i = 0 ; i < v1.size() ; i++){
    //     cout << v1[i] << " " ;
    // }

    // cout << "\nafter popping : " ;
    // pop_heap(v1.begin() , v1.end());
    // sort_heap(v1.begin(), v1.end());

    // for(int i = 0 ; i < v1.size() ; i++){
    //     cout << v1[i] << " " ;
    // }


    //     /// SET

    //     set <int> s ;
    //     s.insert(10);
    //     s.insert(40);
    //     s.insert(40);
    //     s.insert(20);
    //     s.insert(34);
    //     s.insert(10);
    //     s.insert(15);

    // set <int>:: iterator it = s.begin();

    // for(;it != s.end() ; it++ ){
    //     cout << *it << " " ;
    // }
    // cout << "\nsize : " << s.size() << endl ;
    // cout << "max size : " << s.max_size() << endl;
    // it = s.begin();
    // s.erase(s.begin() , s.find(20));
    // for(;it != s.end() ; it++ ){
    //     cout << *it << " " ;
    // }

 // LIST
 // PAIR

//  pair < int , char > PAIR1 ;

//  PAIR1.first = 1604 ;
//  PAIR1.second = 'A' ;
 
//  cout << PAIR1.first << " " << PAIR1.second << endl ;

//  pair <int , char> PAIR2(0202,'R');
//  pair <int , char> PAIR3;
//  PAIR3 = make_pair(0202,'R');

//  swap(PAIR1 , PAIR2) ;

//  cout << PAIR2.first << " " << PAIR2.second << endl;


    book book1("The Book" , "raghav" , 890);

    cout << book1.title << " has " << book1.pages << " pages";



 return 0;
}