#include <iostream>
#include <utility> // pairs
#include <vector> // vector
#include <list> // list
#include <stack> // stack
#include <queue> // queue
#include <deque> // deque
#include <set> // set
#include <unordered_set> // uo_Set
#include <map> // map

#include <algorithm>


using namespace std;

//DATA STRUCTURES
void explainPair(){

    pair <int , int > p = {1,3};

    cout << p.first << " " << p.second << endl;

    pair <int , pair <int , int >> p2 = {1,{3,5}};

    cout << p2.first << " " << p2.second.second << endl; 

    pair <int , int> arr[] = {{1,2} , {2225,5} , {5,1}};

    cout << arr[1].first ; 
}
void explainVector(){

    vector <int> v ;

    v.push_back(1);
    v.emplace_back(2);

    // cout << v.back() << endl ;

    vector <pair <int, int>> vec ;

    vec.push_back({1,2});
    vec.emplace_back(1,2);

    // vector <int> v(5,100);
    // vector<int> v(5);
    // vector <int> v1(5,20);
    // vector <int> v2(v1);

    cout << v[1] << endl ;

    vector <int> newVec ;
    for(int i = 1 ; i < 6 ; i++){
        newVec.push_back(i);
    }
    newVec.push_back(23);
    newVec.emplace_back(242);
    newVec.push_back(252);
    // newVec.erase(newVec.begin()+1 , newVec.begin() + 6);
    for(int i = 0 ; i < newVec.size() ; i ++){
        cout << newVec[i] << " " ;
    }
    cout << endl ;

    vector <int> :: iterator it = newVec.begin();

    // cout << *it << " " ;
    // it++ ; 
    // cout << *it << " " ;
    // int age ; 
    // cin >> *it;
    // cout << *it ;

    // cout << endl ; 
    // for(int i = 0 ; i < newVec.size() ; i ++){
    //     cout << newVec[i] << " " ;
    // }

    // v.end() , v.rend() , v.begin() ;

    v.insert(v.begin() + 1,5,300); // insert 5 instances of 300 at begin + 1th index

    for(auto it = v.begin() ; it!= v.end() ; it++){
        cout << *it << " ";
    }

    // v.swap(newVec) ;
    // v.clear() ;
    // cout << v.empty() ; // true or false

}
void explainList(){
    list <int> ls ;

    ls.push_back(2);
    ls.emplace_back(3);
    ls.push_front(5);
    // ls.emplace_front();

    list <int> :: iterator it = ls.begin();
    for(auto iter = ls.begin() ; iter != ls.end() ; iter ++ ){
        cout << *iter << " " ;
    } 
    //rest is same
}
void explainStack(){
    // FIRST IN LAST OUT
    // no indexing , only 3 functions top() , push() , pop()

    stack <int> st ; 
    st.push(2);
    st.push(6);
    st.push(4);
    st.push(3);

    cout << st.top() << " ";
    st.pop() ;
    cout << st.top() << " ";
    st.pop();
    cout << st.top() << " ";
    st.pop();
    cout << st.top() << " ";

    // time complexity O(1) constant time complexity

}
void explainQueue(){
    // First in First Out
    // push , front , back , emplace, 
    queue <int> q ;
    q.push(1);
    q.push(2);
    q.push(3);
    q.push(4);
    q.emplace(6);

    cout << q.front() << " ";
    q.pop();
    cout << q.front() << " ";
    q.pop();
    cout << q.front() << " ";
    q.pop();
    cout << q.front() << " ";
    q.pop();
    cout << q.front() << " ";
    q.pop();
    
}
void explainPQ(){

    // also called max heap
    // Time complexity of Push = log n;
    // time complexity of top = O(1);
    priority_queue <int> pq ;

    pq.push(5);
    pq.push(62);
    pq.push(67);
    pq.push(1);
    pq.push(9);
    pq.emplace(47);
    
    while(!pq.empty()){
        cout << pq.top() << " ";
        pq.pop();
    }
    cout << endl ; 

    // to make a PQ which stores min value at the top 

    // also called min heap

    priority_queue <int , vector<int> , greater<int>> mpq;
       mpq.push(5);
    mpq.push(62);
    mpq.push(67);
    mpq.push(1);
    mpq.push(9);
    mpq.emplace(47);
    
    while(!mpq.empty()){
        cout << mpq.top() << " ";
        mpq.pop();
    }
}
void explainSet(){
    // Stores in Sorted order , stores unique things
    // log n
    set <int> st ;
    st.insert(1);
    st.emplace(2);
    st.insert(2);
    st.insert(5);
    st.emplace(5);
    st.emplace(9);

    //begin() , end() , rbegin() , rend() , size() , empty() , swap()

    auto it = st.begin() ; 

    while(it != st.end()){
        cout << *it << " ";
        it++ ; 
    }

    // auto it = st.find(3) ; // returns iterators which points at 3 ..

    // auto it = st.find(6); // if 6 is not present it is equal to st.end();

    // st.erase(5);

    // int count = st.count(2) ; // if present 1 else 0
    // cout << endl << count << endl;

    // auto it2 = st.lower_bound(2);
    // auto it3 = st.upper_bound(3);

}
void explainMultiSet(){
    // ordered , non unique set

    multiset <int> ms;
    ms.insert(1);
    ms.insert(1);
    ms.insert(1);

    ms.erase(1) ; // removes all 1's

    ms.erase(ms.find(1)); // find(1) is a pointer , it erases a single 1 or single addressed 1


}
void explainUnorderedSet(){
    // can have any random order , any order ..
    // O(1)
    // same as above , upper and lowerbond doesnt work
    // can go log n but very rarely
    // Unique

    unordered_set <int> st; 
    st.insert(1);
    st.insert(3);
    st.insert(5);
    st.insert(5);
    st.insert(5);
    st.insert(6532);

    auto it = st.begin();

    while(it != st.end()){
        cout << *it << " " ;
        it++ ;
    }
}
void explainMap(){
    //unique keyy
    // sorted order
    map <int,int> mpp; 

    map <int , pair <int , int>> mpp1; // key is int , value is a pair
    map <pair <int , int> , int> mpp2 ;
    // here key is a pair value is a int

    mpp [1] = 2 ;
    mpp [2] = 4;
    mpp[3] = 6 ;
    // mpp1.emplace({3,1});
    // mpp.insert({2,4}); 

    mpp2 [{2,3}] = 10 ; 
    
    for(auto it : mpp){
        cout << it.first << " x 2 =  " << it.second << endl ;
    }
}
// ALGORITHMS
void sortALGO(){
    int arr[] = {5,2,5,1,2,5,6,1,2,6};
    int len = sizeof(arr) / sizeof(arr[0]);
    sort(arr , arr + len);
    // in decreasing 
    sort(arr , arr + len , greater <int>() );

    for(int i = 0 ; i < len ; i++){
        cout << arr[i] << "," ;
        //sorted
    }
}

int main(){

    // explainPair() ; 
    // explainVector();
    // explainList();
    // explainStack() ;
    // explainQueue();
    // explainPQ();
    // explainSet();
    //explainMultiSet();
    // explainUnorderedSet();
    // explainMap() ;
    // sortALGO();
    

    return 0;
}