#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <map>
using namespace std;

bool check_array_sorted(int arr[] , int len){
    for(int i = 0 ; i < len - 1 ; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

vector<int> remove_duplicates(int arr[] , int len){
    vector <int> temp ;
    for(int i = 0 ; i <  len ; i++){
        bool found = binary_search(temp.begin(), temp.end(), arr[i]);
        if(found){
            continue;
        }else{
            temp.push_back(arr[i]);
        }
    }

    return temp;
}

void rotateLeftBy_1(int arr[] , int len ){
    int temp = arr[0];
    for(int i = 1 ; i < len ; i++){
        arr[i - 1] = arr[i];
    }
    arr[len - 1 ]= temp ;
}

void rotateLeftBy_n_brute(int arr[] , int len , int n){
    // O(n^2);
    n = n % len ; 
    int i = n ;    
    while(i--){
        int temp = arr[0];
        for(int i = 1 ; i < len ; i++){
            arr[i - 1] = arr[i];
        }
        arr[len - 1] = temp ;
    }
}

void rotateLeftBy_n_better(int arr[] , int len , int n){
    n = n % len ;
    int temp[n];
    for(int i = 0 ; i < n ; i++){
        temp[i] = arr[i];
    }
    for(int i = n ; i < len ; i++){
        arr[i-n] = arr[i];
    }
    for(int i = len-n ; i < len ; i++ ){
        arr[i] = temp[i-(len - n )];
    }
}

void rotateLeftBy_n_optimal(int arr[] , int len , int n){
    // reverse(a,a+d);
    // reverse(a+n , a+ len)
    // reverse(a,a+len);

    // for(int i = 0 ; i < n/2 ; i++){
    //     int temp = arr[i] ; 
    //     arr[i] = arr[n - 1 - i];
    //     arr[n - 1 - i] = temp ; 
    // } 
    // for(int i = n ; i < len/2 ; i++){
    //     int temp = arr[i] ;
    //     arr[i] = arr[len - 1 - i];
    //     arr[len - 1 - i] = temp ; 
    // } 
    // for(int i = 0 ; i < len/2 ; i++){
    //     int temp = arr[i] ; 
    //     arr[i] = arr[len - 1 - i];
    //     arr[len - 1 - i] = temp ; 
    // } 

    reverse(arr, arr+n);
    reverse(arr+n, arr+len);
    reverse(arr, arr+len);

    
}

void moveZeroToEnd(int arr[] , int len){
    vector <int> temp;
    int zero_count = 0 ;
    for(int i = 0 ; i < len ; i++){
        if(arr[i] != 0){
            temp.push_back(arr[i]);
        }else if(arr[i] == 0){
            zero_count ++;
        }
    }
    for(int i = 0 ; i < zero_count ; i++){
        temp.push_back(0);
    }
    for(int i = 0 ; i < len ; i++){
        arr[i] = temp[i];
    }
}

void find_union(int arr1[] , int arr2[] , int len1 , int len2){
    set <int> st;
    for(int i = 0 ; i < len1 ; i++){
        st.insert(arr1[i]);
    }
    for(int i = 0 ; i < len2 ; i++){
        st.insert(arr2[i]);
    }
    auto it = st.begin();
    while(it!=st.end()){
        cout << *it << " " ;
        it++ ;
    }
}

int missingNumber (vector <int> &a , int N){
    int xor1 = 0 , xor2= 0 ; 
    int n = N-1 ; 
    for(int i = 0 ; i < N ; i++){
        xor2 = xor2 ^ a[i];
        xor1  = xor1 ^ (i+1);
    }
    xor1 = xor1 ^ N;
    return xor1 ^ xor2;
 // we can use hashing
}
int missingNumber_2(std::vector<int>& nums) {
    int n = nums.size() ;
    int S1 = (n*(n+1) ) / 2 ;
    int s2 = 0 ;
    for(int i = 0 ; i < n ; i++){
        s2 = s2+ nums[i];
    }
    return S1 - s2;
}

int consecutive_ones(int arr[] , int len){
    int counter = 0 ;
    int res = 0 ; 
    for(int i = 0 ; i < len  ; i++){
        if(arr[i] == 1){
            counter += 1  ;
            if(counter >= res){
                res = counter ;
            }
        }else{
            counter = 0 ; 
        }
    }
    return res;
}

// void subarrays(vector <int> arr , int len){
//     for(int i = 0 ; i < len ; i++){
//         for(int j = i ; j < len ; j++){
            
//         }
//         cout << endl ;
//     }
// }

// vector <int> longest_subarray_brute(vector <int> nums){

// }


void returnMax(map<char,int> &mp , char &ch , int &num){
    int ans = 0 ;
    for(auto it = mp.begin() ; it!= mp.end() ; it++){
        if(it->second > ans){
            ans = it->second;
            ch = it->first;
            // cout << "ch : " << it->first << " count : " << it->second << endl;
        }
    }
    auto j = mp.find(ch);
    j->second = 0 ; 
    num = ans;
}
string frequencySort(string s) {
    map<char , int> mp;
    for(int i = 0 ; i < s.length() ; i++){
        mp[s[i]]++;
    }
    // for(auto it = mp.begin() ; it!= mp.end() ; it++){
    //     cout << it->first << "->" << it->second << endl;
    // }
    int max = INT32_MIN ; 
    vector <char>ans;
    while(max!=0){
        char ch ='\0';
        int num = 0; 
        returnMax(mp ,ch,num );
        // cout << ch << endl ;
        max = num;
        for(int i = 0 ; i < num ; i++){
            ans.push_back(ch);
        }
    }
    string  a;
    for(int i = 0 ; i < ans.size() ; i++){
        a+= ans[i];
    }
    return a;
}

int subarray_brute(vector<int>arr , int k){
    int n = arr.size() ;
    int longest = 0 ;
    for(int i = 0 ; i < n ; i++){
        for(int j = i ; j < n ; j++){
            int sum = 0 ;
            for(int k = i ; k <= j ; k++){
                sum+=arr[k];
            }
            if(sum == k && j - i > longest ){
                longest = j - i + 1 ;
            }
        }
    } 
    return longest;
}

int subarray_brute_2(vector<int> arr , int k){
    int n = arr.size() ;
    int longest = 0 ;
    for(int i = 0 ; i < n ; i++){
        int sum = 0 ; 
        for(int j = i ; j < n ; j++){
            sum = sum + arr[j];
            if(sum == k && j - i > longest ){
                longest = j - i + 1 ;
            }
        }
    } 
    return longest; 
}

int lengthOfLastWord(string s) {
    int res = 0  ;
    for(int i = s.length() - 1 ; i >=0 ; i--){
        if(res == 0 && s[i] == ' '){
            continue;
        }else if (res == 0 && isalpha(s[i])){
            res++;
        }else if(res!= 0 && isalpha(s[i])){
            res++;
        }else{
            return res;
        }
    }
    return res;
}


int subarray_better(vector<int> arr , int k){
    int n = arr.size() ;
    int longest = 0 ;
    int sum = arr[0];
    int left = 0 , right = 0 ; 
    while(right < n ){
        while(sum > k && left <= right){
            sum-=arr[left];
            left++;
        }
        if(sum == k){
            longest = max(longest , right - left + 1 );
        }
        right++;
        if(right < n )sum += arr[right];
    }
    return longest; 
}
int getLongestSubarray(vector<int>& a, int k) {
    int n = a.size(); // size of the array.

    map<int, int> preSumMap;
    int sum = 0;
    int maxLen = 0;
    for (int i = 0; i < n; i++) {
        //calculate the prefix sum till index i:
        sum += a[i];

        // if the sum = k, update the maxLen:
        if (sum == k) {
            maxLen = max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x-k:
        int rem = sum - k;

        //Calculate the length and update maxLen:
        if (preSumMap.find(rem) != preSumMap.end()) {
            int len = i - preSumMap[rem];
            maxLen = max(maxLen, len);
        }

        //Finally, update the map checking the conditions:
        if (preSumMap.find(sum) == preSumMap.end()) {
            preSumMap[sum] = i;
        }
    }

    return maxLen;
}

    int findMaxK(vector<int>& nums) {
      set<int> st;
      for(int i = 0 ; i < nums.size() ; i++){
        st.insert(nums[i]);
      }  
      int res = - 1;
      for(auto it : st){
        if(st.find(-it) != st.end()){
            res = max(res,it);
        }
      }
      return res;
    }




string reversePrefix(string word, char ch) {
    int ending = 9999;
    for(int i = 0 ; i < word.length() ; i++){
        if(word[i] == ch){
            ending = i ;
            break;
        }
    } 
    if(ending == 9999){
        return word;
    } 
    int left = 0 ;
    while(left <= ending){
        char temp = word[left];
        word[left] = word[ending];
        word[ending] = temp ;
        left++ ; 
        ending --;
    }   
    return word;
}

void printFN(int arr[], int len){
    for(int i = 0 ; i < len ; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main(){
    // int arr[] = {1,2,3,4,4,5,5,5,6,7,8,9,10,10,10,11,12};
    // int arr[] = {1,2,0,3,4,0,0,9,5,6};
    int arr[] = {1,2,3,4,5,6,7};
    int len = sizeof(arr)/sizeof(arr[0]);
    // cout << check_array_sorted(arr,len) << endl;


    // vector <int> temp = remove_duplicates(arr , len);
    // for(int i = 0 ; i < temp.size() ; i++){
        // cout << temp[i] << " ";
    // }

    // rotateLeftBy_1(arr ,  len);
    // printFN(arr,len);

    // rotateLeftBy_n_brute(arr,len,3);
    // printFN(arr, len);

    // rotateLeftBy_n_better(arr, len, 3);
    // printFN(arr, len);

    // rotateLeftBy_n_optimal(arr,len,3);
    // printFN(arr,len);

    // moveZeroToEnd(arr,len);
    // printFN(arr,len);

    // int arr1[] = {1,2,3,4,5};
    // int arr2[] = {1, 5, 2, 2, 6, 3, 6, 8, 0} ;
    // find_union(arr1, arr2, sizeof(arr1) / sizeof(arr1[0]), sizeof(arr2) / sizeof(arr2[0]));

    // int consecutive[] = {1,2,1,1,1,1,1,1,1,3,4,1,1,1,1,1,1,2,4,5,6,6};
    // int consecutive[] = {1,1,0,1,1,1};
    // int conse_len = sizeof(consecutive) / sizeof(consecutive[0]);
    // cout << consecutive_ones(consecutive,conse_len)<< endl;


    vector <int> sub = {1,2,3,4,5,6};
    int target = 11 ; 
    cout << subarray_brute(sub , target) << endl;
    cout << subarray_brute_2(sub, target) << endl;
    cout << subarray_better(sub,target) << endl;
    // vector<int> res = subarray_brute(sub , target);
    // for(int i = 0 ; i < res.size() ; i++){
    //     cout << res[i] << " ";
    // }

    // string s = "Aabb";
    // cout << frequencySort(s);



        return 0;
}