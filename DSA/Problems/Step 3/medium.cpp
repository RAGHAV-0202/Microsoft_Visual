#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <unordered_set>
#include <map>
using namespace std;

void TwoSum(vector<int> &nums , int target){

    for(int i = 0 ; i <nums.size() ; i++){
        for(int j = 0 ; j < nums.size() ; j++){
            if(nums[i]  + nums[j] == target){
                cout << "[" << i << "," << j <<"]" << endl;
                return;
            }
        }
    }
    cout << "not found" << endl;
}
void TwoSum_better(vector<int> &nums , int target){
    map <int , int> mpp;
    for(int i = 0 ; i <nums.size() ; i++){
        int a = nums[i];
        int more = target - a ; 
        if(mpp.find(more) != mpp.end()){
            cout << "YES" << endl;
        }
        mpp[a] = i ;
    }
    cout <<  "NO" << endl;
    
}

void sort_Zero_One_Two(vector<int>& nums) {
    int c0 = 0 , c1 = 0 , c2 = 0 ;
    for(int i = 0 ; i < nums.size() ; i++){
        if(nums[i] == 0){
            c0++ ;
        }else if (nums[i] == 1){
            c1++ ;
        }else{
            c2++ ;
        }
    }
    for(int i = 0 ; i < nums.size() ; i++){
        if(i < c0){
            nums[i] = 0;
        }else if(i < c1 + c0){
            nums[i] = 1;
        }else if (i < c1 + c0 + c2 ){
            nums[i] = 2;
        }
    }
}

int majorityElement(vector<int> v) {
	map <int,int> mpp;
    int len = v.size();
	for(int i = 0 ; i < v.size() ;i++){
        int a = v[i];
		mpp[a] ++ ;
        if(mpp[a] > v.size() / 2){
            return a;
        }
	} 

    return 0  ;
	
}

int majorityElement_optimal(vector <int> &v){
    // if count is negative ignore piche wale numbers
    // mooore
    int count = 0 ; 
    int el ;
    for(int i = 0 ; i < v.size() ; i++){
        if(count == 0){
            count = 1 ;
            el = v[i];
        }else if (v[i] == el ){
            count ++ ;
        }else {
            count -- ;
        }
    }
    int cnt1 = 0 ;
    for(int i = 0 ; i < v.size() ; i++ ){
        if(v[i] == el) {
            cnt1++;
        }
    }
    if(cnt1 > (v.size()) / 2){
        return el;
    }
    return -1 ; 
}

int subArrSum(vector <int> &arr){
    int max = INT32_MIN;
    int len = arr.size(); 
    for(int i = 0 ; i  < len ; i++){
        for(int j = i ; j < len ; j++){
            int sum = 0 ; 
            for(int k = i ; k <= j ; k++){
                sum = sum + arr[k];
            }
            if(sum > max){
                max = sum ; 
            }
        }
    }
    return max ;
}

int subArrSum_better(vector <int> &arr){
    int max = INT32_MIN;
    int len = arr.size(); 
    for(int i = 0 ; i  < len ; i++){
        int sum = 0 ; 
        for(int j = i ; j < len ; j++){
            sum += arr[j];
        }
        if(sum > max){
            max = sum ; 
        }
    }
    return max ;
}

int subArrSum_optimal(vector <int> &arr){
    //Kadane's Algorithm

    int max = INT32_MIN;
    int sum = 0 ;
    for(int i = 0 ; i < arr.size() ; i++){
        if(sum < 0){
            sum = 0;
        }
        sum = sum + arr[i];
        if(sum > max){
            max = sum ;
        }
    }
    return max;
}

void print_Sub_max(vector <int> &arr){
    int max = INT32_MIN;
    int sum = 0 ;
    int initial = 0 ; 
    int final = 0 ; 
    for(int i = 0 ; i < arr.size() ; i++){
        if(sum < 0){
            sum = 0;
            initial = i;
        }
        sum = sum + arr[i];
        if(sum > max){
            max = sum ;
            final = i ;
        }
    }
    cout << "[";
    for(int i = initial ; i <= final ; i++){
        cout << arr[i] << ",";
    } 
    cout << "]";
}

int maxProfit(vector <int> &prices){
    int profit = 0 ; 

    for(int i = 0 ; i < prices.size() ; i++){
        for (int j = i; j < prices.size() ; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i] ;
            }
        }
    }
    return profit;
}

int maxProfit_better(vector <int> &prices){
    int profit = 0 ; 
    int minP = prices[0];
    for(int i = 1 ; i < prices.size() ; i++){
        int diff = prices[i] - minP ;
        profit = max(profit,diff);
        minP = min(minP,prices[i]);
    }
    return profit;
}

// Buy and sell stocks II 
// here allowed to buy and sell as many times as we want

void rearrange_elem(vector <int> &arr){
    vector <int> neg;
    vector<int> pos;
    for(int i = 0 ; i < arr.size() ; i++){
        if(arr[i] < 0){
            neg.push_back(arr[i]);
        }else{
            pos.push_back(arr[i]);
        }
    }


    if(pos.size() > neg.size()){
        for(int i = 0 ; i < neg.size() ; i++){
            arr[2*i] = pos[i];
            arr[2*i+1] = neg[i];
        }
        int index = neg.size() *2 ;
        for(int i = neg.size() ; i < pos.size() ; i++){
            arr[index] = pos[i];
            index++ ;
        }
    }else{
        for(int i = 0 ; i < pos.size() ; i++){
            arr[2*i] = pos[i];
            arr[2*i+1] = neg[i];
        }
        int index = pos.size() *2 ;
        for(int i = pos.size() ; i < neg.size() ; i++){
            arr[index] = neg[i];
            index++ ;
        }
    }
}

void rearrange_elem_better(vector <int> &arr){
    int temp[arr.size()] ;
    int posi_count = 0 ;
    int negi_count = 1;
    for(int i = 0 ; i < arr.size() ; i++ ){
        if(arr[i] < 0){
            temp[negi_count] = arr[i];
            negi_count = negi_count + 2 ;
        }else{
            temp[posi_count] = arr[i];
            posi_count = posi_count + 2 ;
        }
    }
    for(int i = 0 ; i < arr.size() ; i++){
        arr[i] = temp[i];
    }
}

vector<int> superiorElements(vector<int>&a) {
    vector <int> res;
    int n = a.size();
    int maxElem = a[n-1];
    res.push_back(maxElem);

    for(int i = n - 2 ; i >= 0  ; i--){
        if(a[i] > maxElem){
            maxElem = a[i];
            res.push_back(maxElem);
        }
    }

    return res;
}

int find(vector <int> &arr , int x){
    for(int i = 0 ; i < arr.size() ; i++){
        if(arr[i] == x ){
            return 1 ;
        }
    }
    return 0 ;
}

void longest_consecutive_brute(vector <int> &arr){
    int res = 0 ; 
    int count = 0 ;
    int n = arr.size() ;
    for(int i = 0 ; i < n ; i++){
        int x = arr[i];
        count = 1 ;
        int search = find(arr,x+1);
        while(search == 1){
            x = x + 1 ;
            count ++ ;
            search = find(arr , x+1);
        }
        if(count > res){
            res = count ;
        }
    }
    cout <<"max consecutive numbers : " << res << endl;
}
/// @brief sort for better max conse
/// @param arr 
/// @param low 
/// @param middle 
/// @param high 
void merge(vector <int> &arr , int low , int middle , int high){
    vector <int> temp;
    int left = low ;
    int right = middle + 1;
    while(left <= middle && right <= high){
        if(arr[left] < arr[right]){
            temp.push_back(arr[left]);
            left ++ ;
        }else{
            temp.push_back(arr[right]);
            right++;
        }
    }
    while(left <= middle){
        temp.push_back(arr[left]);
        left++;
    }
    while(right <= high){
        temp.push_back(arr[right]);
        right++;
    }
    for(int i = low ; i <= high ; i++){
        arr[i] = temp[i - low];
    }
}

void mergesort(vector <int> &arr , int low , int high){
    if(low == high){
        return;
    }
    int middle = (low + high) / 2 ;

    mergesort(arr,low , middle);
    mergesort(arr,middle+ 1 , high);
    merge(arr,low,middle,high);
    
    return;
}

void longest_consecutive_better(vector <int> &arr){
    // first sort......
    int n = arr.size();
    int res = 1 ;
    if(n == 0){
        res = 0;
    }else if (n == 1){
        res =  1;
    }
    mergesort(arr,0,n-1);
    int x = arr[0];
    int count = 1 ;
    for(int i = 1 ; i < n ;i++){
        cout << arr[i] << " " ;
        if(arr[i] == x){
            if(count >= res){
            res = count;
            }
            continue;
        }
        if(arr[i] == x+1){
            x++ ;
            count ++ ;
        }else{
            if(count > res){
                res = count;
            }
            x = arr[i];
            count = 1;
        }
        if(count > res){
            res = count;
        }
    }
    cout << "Max consecutive numbers : "<< res << endl;
}

int longest_consecutive_better_2(vector <int> &nums){
    int n = nums.size();
    mergesort(nums, 0, n - 1);
    int longest = 1 , count = 1 , lastSmall = INT32_MIN; 
    for(int i = 0  ;  i< n ; i++){
        if(nums[i] - 1 == lastSmall){
            count ++;
            lastSmall = nums[i];
        }else if (nums[i] == lastSmall){
            continue;
        }else if (nums[i] != lastSmall){
            count = 1 ;
            lastSmall = nums[i];
        }
        longest = max(longest , count);
    }
    cout << "Max consecutive numbers : " << longest << endl;
};

int longest_consecutive_optimal(vector <int> &nums){
    int n = nums.size();
    if(n ==0){
        return 0;
    }else if(n == 1){
        return 1 ; 
    }
    int longest = 1 ;

    unordered_set <int> st;
    for(int i = 0 ; i < n ; i++){
        st.insert(nums[i]);
    }
    for(auto it : st){
        if(st.find(it - 1) == st.end()){
            int count = 1 ;
            int x = it;
            while(st.find(x+1) != st.end()){
                x = x+ 1 ;
                count = count + 1 ;
            }
            longest = max(longest , count);
        }
    }
    return longest;
}
void markRow(vector<vector<int>> &matrix , int n, int m , int i ){
	for(int j = 0 ; j < m ; j++){
		if(matrix[i][j] != 0){
			matrix[i][j] = - 1;
		}
	}
}

void markCol(vector<vector<int>> &matrix , int n, int m , int j ){
	for(int i = 0 ; i < n ; i++){
		if(matrix[i][j] != 0){
			matrix[i][j] = - 1;
		}
	}
}

vector<vector<int>> zeroMatrix(vector<vector<int>> &matrix, int n, int m) {
	for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                markRow(matrix, n, m,i);
                markCol(matrix, n, m,j);
            }
        }
    }

	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			if(matrix[i][j] == -1){
				matrix[i][j] = 0 ;
			}
		}
	}
return matrix;
}

vector<vector<int>> zeroMatrix_brute_better(vector<vector<int>> &matrix, int n, int m) {
    int arr_i[n] = {0};
    int arr_j[m] = {0};
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < m ; j++){
            if(matrix[i][j] == 0){
                arr_i[i] = 1 ;
                arr_j[j] = 1 ;
            }
        }
    }
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < m ; j++){
            if(arr_i[i] == 1 || arr_j[j] == 1){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

int maxArea(vector<int>& height) {
    int n =  height.size() ;
    int left = 0 ; 
    int right = n - 1 ;
    int area = 0 ; 
    
    while(right >= left){
        int temp_area = (right - left) * min(height[left] , height[right]) ;
        if(height[left] >= height[right]){
            right -- ;
        }else if (height[left] <= height[right]){
            left ++ ;
        }
        area = max(temp_area,area);
    }
    return area ;
}

int value(char Val){
    switch(Val){
        case 'I' : return 1 ; break;
        case 'V' : return 5 ; break;
        case 'X' : return 10 ; break;
        case 'L' : return 50 ; break;
        case 'C' : return 100 ; break;
        case 'D' : return 500 ; break;
        case 'M' : return 1000 ; break;
    }
    return 0 ;
};

int romanToInt(string s) {
    int answer = 0 ;
    for(int i = 0 ; i < s.length() ; i++){
        char var = s[i];
        char var2 = s[i+1];
        
        if(var == 'I' && var2== 'V'){
            answer += 4 ;
            i++;
        }else if(var == 'X' && var2 == 'L'){
            answer += 40 ;
            i++;
        }else if (var == 'X' && var2 == 'C'){
            answer += 90 ;
            i++;
        }else if(var == 'C' && var2 == 'D'){
            answer += 400 ;
            i++;
        }else if(var == 'C' && var2 == 'M'){
            answer += 900 ;
            i++;
        }else if (var == 'I' && var2== 'X'){
            answer += 9 ;
            i++;
        }else{
            answer = answer + value(s[i]);
        }
    }
    return answer ;
}

char findTheDifference(string s, string t) {

    int sum_s = 0 ;
    int sum_t = 0 ;

    for(int i = 0 ; i < s.length() ; i++){
        sum_s += int(s[i]);
    }

    for(int i = 0 ; i < t.length() ; i++){
        sum_t += int(t[i]);
    }

    int diff = sum_t - sum_s;
    return char(diff);

}

int arraySign(vector<int>& nums) {
    int count = 0;
    for(int i = 0 ; i < nums.size() ; i++){
        if(nums[i] < 0 ){
            count ++ ;
        }if(nums[i] == 0){
            return 0 ; 
        }
    }
    if(count % 2 == 0){
        return 1 ;
    }
    return -1 ;
}

int strStr(string haystack, string needle) {
    int needle_p = 0 ;
    int needle_len = needle.length() ;
    for(int i = 0 ; i < haystack.length() ; i++){

        if(haystack[i] == needle[needle_p]){
            needle_p ++ ;
        }else{
            i -= needle_p;
            needle_p = 0 ;
        }
        if(needle_p == needle_len){
            return ++i - needle_p  ;
        }

    }
    return -1;
}


void rotateMatrix_brute(vector<vector<int>> &mat){
	int m = mat.size() ;
	int n = mat[0].size() ; 
	vector<vector<int>> temp(m, vector<int>(n));

    for(int i = 0 ; i < m ; i++){
        for(int j = 0 ; j < n ; j++){
            temp[j][n -1 - i] = mat[i][j];
        }
    }

	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j < n ; j++){
			mat[i][j] = temp[i][j];
		}
	}

	
}


void ninety_deg(int arr[3][3], int m , int n){

    int temp[m][n] = {0};
    for(int i = 0 ; i < m-1 ; i++){
        for(int j = i+1 ; j < n ; j++){
            swap(arr[i][j] , arr[j][i]);
        }
    }

    for(int i = 0 ; i < n ; i++){
        reverse(arr[i] ,arr[i] + n );
    }

    for(int i = 0 ; i < m ; i++ ){
        for(int j = 0 ; j < n ; j++){
            cout << arr[i][j] << " " ;
        }
        cout << endl;
    }
}

void spiral(vector<vector<int>> &mat){
    int m = mat.size();
    int n = mat[0].size();
    int left = 0 , right = n - 1 ; 
    int top = 0 , bottom = m - 1 ;
    vector <int> ans;

    while(top <= bottom && left <= right){    
        for(int i  = left ; i <= right ; i++){
            ans.push_back(mat[top][i]);
        }
        top++ ;
        for(int j = top ; j <= bottom ; j++ ){
            ans.push_back(mat[j][right]);
        }
        right --;

        if(top <= bottom){
            for(int j = right ; j >= left ; j-- ){
                ans.push_back(mat[bottom][j]);
            }
            bottom--;
        }
        if(left <= right){
            for(int j = bottom ; j >= top ; j-- ){
                ans.push_back(mat[j][left]);
            }   
            left ++ ; 
        }
    }


    for(int i  = 0 ; i < ans.size() ; i++){
        cout << ans[i] << " ";
    }

}


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
// day 24 HARD
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

vector<int> twoSum(vector<int>& numbers, int target) {
    vector <int> answer;
    int left = 0 ; 
    int right = numbers.size() - 1 ;

    while(left < right){
        int sum = numbers[left] + numbers[right];
        if(sum == target){
            answer.push_back(left + 1 );
            answer.push_back(right + 1);
            return answer;                       
        }else if (sum > target){
            right -- ;
        }else{
            left ++;
        }
    }

    return answer;
}
string reverseWords(string s) {
    vector<string> temp;
    string a;
    for (int i = 0; i < s.length(); i++) {
        if (s[i] != ' ') {
            a += s[i];
        } else {
            if (!a.empty()) {
                temp.push_back(a);
                a.clear();
            }
        }
    }
    if (!a.empty()) {
        temp.push_back(a);
        a.clear();
    }

    string res;
    for (int i = temp.size() - 1; i >= 0; i--) {
        res += temp[i];
        if (i != 0) {
            res += ' ';
        }
    }

    return res;
}

int numRescueBoats(vector<int>& people, int limit) {
    int n = people.size();
    int left = 0 ; 
    int right = n - 1 ; 
    int ans = 0 ;
    sort(people.begin() , people.end());
    while(left <= right){
        if(people[left] + people[right] <= limit){
            left ++ ;
            // ans++;
        }
        right -- ;
        ans++;
    }
    return ans;
}

int calPoints(vector<string>& operations) {
    vector <int> temp; // it was list
    int count = 0  ;
    for(int i = 0 ; i < operations.size() ; i++){
        if(isalpha(operations[i][0]) || operations[i][0] == '+'){
            if((operations[i][0]) == 'C'){
                auto it = find(temp.begin(), temp.end(), stoi(operations[i - 1]));
                if(it!= temp.end()){
                temp.erase(it);
                count--;
                }
            }else if(operations[i][0] == 'D'){
                if (!temp.empty()) {
                    int last = temp.back();
                    int a = last * 2;
                    temp.push_back(a);
                    count++;
                }
            }else if(operations[i][0] == '+'){
                auto it = prev(temp.end());
                int last = *it;
                it--;
                int secondLast = *it;
                temp.push_back(last + secondLast);
            }
        }else{
            int a = stoi(operations[i]);
            temp.push_back(a);
            count++;
        }
    }
    int res = 0 ; 
    for(auto it = temp.begin() ; it!=temp.end() ; it++){
        res+= *it;
    }
    return res;
}
int calPoints(vector<string> &operations){
    std::vector<int> stack;

    for (std::string& op : operations){
        if (op == "+")
            stack.push_back(stack[stack.size() - 1] + stack[stack.size() - 2]);
        else if (op == "D")
            stack.push_back(stack[stack.size() - 1] * 2);
        else if (op == "C")
            stack.pop_back();
        else
            stack.push_back(std::stoi(op));
    }

    int sum{0};
    for (int& v : stack) {
        sum += v;
    }

    return sum;
}
// not submitted 682
 
// day 26
bool isVowel(char a){
    if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u' || a =='A' || a == 'E' ||a == 'I' ||a == 'U' ||a == 'O'){
        return true;
    }
    return false;
}
string reverseVowels(string s) {
    vector<char> vec;
    // for(int i = 0 ; i < s.length() ; i++){
    //     if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] =='A' || s[i] == 'E' ||s[i] == 'I' ||s[i] == 'U' ||s[i] == 'O' ){
    //         vec.push_back(s[i]);
    //     }
    // }
    // int count = vec.size() ; 
    // int j  = 0 ;
    // for(int i = 0 ; i < s.length() ; i++){
    //     if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'||s[i] =='A' || s[i] == 'E' ||s[i] == 'I' ||s[i] == 'U' ||s[i] == 'O' ){
    //        s[i] = vec[count - 1 - j];
    //        j ++;
    //     }            
    // }
int left = 0 ;
int right = s.length() - 1 ;
while(left <= right && left != right){
    if(isVowel(s[left]) && !isVowel(s[right])){
        right --;
    }else if(isVowel(s[right]) && !isVowel(s[left])){
        left++;
    }else if(isVowel(s[right]) && isVowel(s[left])){
        swap(s[left] , s[right]);
        left++;
        right--;
    }else{
        left++;
    }
}
    return s;
}

bool isRobotBounded(string instructions) {
    int counter = 0 ;  // 0 = north , +1 = east , +2 = south , +3 = west , -1 = west , -2 = south , -3 westp
    int vertical = 0 ;
    int horizontal = 0 ;  
    int k = 0 ; 
    for(int i = 0 ; i < instructions.length() ; i++){
        if(instructions[i] == 'L'){
            counter = (counter + 3) % 4; ;
        }else if (instructions[i] == 'R'){
            counter = (counter + 1) % 4;
        }else if(instructions[i] == 'G'){
            if(counter == 0){
                vertical++;
            }else if (counter == 1){
                horizontal++;
            }else if (counter == 2){
                vertical--;
            }else {
                horizontal --;
            }
        }
    }
    if(counter != 0 || (vertical == 0 && horizontal == 0)){
        return true;
    }
    return false;
}

int main(){

    // vector <int> nums = {2,7,11,15};
    // int target = 9;
    // TwoSum(nums,target);

    // vector<int> m = {1, 1, -2,2, 0 ,-5, 0, 0, 1,5, 2, 1, 0};
    // sort_Zero_One_Two(m);
    // for(int i = 0 ; i < m.size() ; i++){
    //     cout << m[i] << " " ;
    // }

    // vector<int> majority_elem = {-53 ,75, 56, 56, 56};
    // cout << majorityElement(majority_elem) << endl; 
    // cout << majorityElement_optimal(majority_elem) << endl;

    // cout << "Brute : " <<subArrSum(m) << endl;
    // cout << "Better : " << subArrSum_better(m) << endl;
    // cout << "Optimal : " << subArrSum_optimal(m) << endl;
    // print_Sub_max(m);


    // vector <int> prices = {7,1,5,3,6,4};
    // cout << maxProfit(prices) << endl;
    // cout << maxProfit_better(prices) << endl;

    // vector <int> rearr = {1,2,3,4,-5,-6,-7,-8,-6,-6,-5};
    // // rearrange_elem(rearr);
    // // // rearrange_elem_better(rearr);
    // // for(int i = 0 ; i < rearr.size() ; i++){
    // //     cout << rearr[i] << " " ;
    // // }


    // vector <int> arr = {1,2,2,1};
    // vector <int> res ;
    // res = superiorElements(arr);
    // for(int i = 0 ; i < res.size() ; i++){
    //     cout << res[i] << " " ;
    // }

    // vector<int> longConse = {0,0};
    // longest_consecutive_brute(longConse);
    // longest_consecutive_better(longConse);
    // longest_consecutive_better_2(longConse);
    // cout << "Max consecutive numbers : " << longest_consecutive_optimal(longConse) << endl;

    // vector <vector <int>> matrix = {{1, 1, 1}, {1, 0, 1}, {1, 1, 1}};
    // int n = matrix.size();
    // int m = matrix[0].size();
    // // vector<vector<int>> answer = zeroMatrix(matrix, m, n);
    // vector<vector<int>> answer = zeroMatrix_brute_better(matrix, m, n);

    // for(int i = 0 ; i < m ; i ++){
    //     for(int j = 0 ; j < n ; j++){
    //         cout << answer[i][j] << " ";
    //     }
    //     cout << endl;
    // }

    // int arr[3][3] = {
    //     {1,2,3},
    //     {4,5,6},
    //     {7,8,9}};

    // int m = sizeof(arr)/sizeof(arr[0]);
    // int n = sizeof(arr[0]) / sizeof(arr[0][0]);

    // ninety_deg(arr,m,n);


    vector<vector<int>> mat = {
        {1,2,3,4} , 
        {5,6,7,8} , 
        {9,10,11,12},
        {13,14,15,16}
    };
    spiral(mat);
    vector <int> anss ;
    for(int i = 0 ; i < anss.size() ; i++){
        cout << anss[i] << " ";
    }

    return 0;
}