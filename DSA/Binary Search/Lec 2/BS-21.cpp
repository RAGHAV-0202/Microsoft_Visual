#include <bits/stdc++.h>
using namespace std;

// BS 21: Median of two Sorted Arrays of Different Sizes | Brute and Better Approach

double findMedianSortedArraysBrute(vector<int> nums1, vector<int> nums2) {
    int l1 = 0 ;
    int l2 = 0 ;
    vector <int> merged ;
    while(l1 < nums1.size() && l2 < nums2.size()){
        if(l1 < nums1.size() && nums1[l1] <= nums2[l2]){
            merged.push_back(nums1[l1]);
            l1++;
        }else{
            merged.push_back(nums2[l2]);
            l2++;
        }
    }

    while(l1 < nums1.size()){
        merged.push_back(nums1[l1]);
        l1++;
    }
    while(l2 < nums2.size()){
        merged.push_back(nums2[l2]);
        l2++;
    }
    int n = merged.size() ;
    double ans ;
    if(n % 2 == 1){
        int mid = n / 2 ;
        ans =  (double)merged[mid];
    }else{
        int mid1 = (n / 2) ;
        int mid2 = (n / 2) - 1 ;
        
        ans = (merged[mid1] + merged[mid2]) / (double)(2);
    }
    return (double)ans ;
}

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {

}


int main(){
    vector <int> nums1 = {1,2};
    vector <int> nums2 = {3,4};

    cout << findMedianSortedArraysBrute(nums1 , nums2);
}