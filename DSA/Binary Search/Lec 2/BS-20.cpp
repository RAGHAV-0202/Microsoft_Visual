#include <bits/stdc++.h>
using namespace std;

// BS 20. Minimize Max Distance to Gas Statio

double findSmallestMaxDistBrute(vector<int> &stations, int k) {
    vector <int> howMany(stations.size() - 1 , 0);

    for(int i = 0 ; i < k ; i++){
        long double maxVal = -1 ; 
        int maxIndex = -1 ;
        for(int j = 0 ; j < stations.size() - 1 ; j++){
            long double diff = stations[j+1] - stations[j];
            long double sectionalLength = diff / (long double)howMany[j] + 1;

            if(maxVal < sectionalLength){
                maxVal = sectionalLength ;
                maxIndex = j;
            }
        }
        howMany[maxIndex]++;
    }

    long double maxAns = -1 ; 
    for(int i = 0 ; i < stations.size() - 1 ; i++){
        long double diff = (stations[i+1] - stations[i]);
        long double sectionalLength = diff / (howMany[i] + 1);
        maxAns = max(maxAns , sectionalLength);
    }

    return maxAns;
}



double findSmallestMaxDist(vector<int> &arr, int k) {
    vector <int> howMany(arr.size() - 1 , 0);
    int n = arr.size();
    priority_queue <pair<long double,int>> pq ;
    for(int i = 0 ; i < n - 1; i++){
        pq.push({arr[i+1] - arr[i] , i});
    }

    for(int gasStations = 1 ; gasStations <= k ; gasStations ++){
        auto topElement = pq.top();
        pq.pop();
        int sectionIndex = topElement.second ;
        howMany[sectionIndex]++;
        long double iniDiff = arr[sectionIndex + 1] - arr[sectionIndex];
        long double newSectionLen = iniDiff / (long double)(howMany[sectionIndex] + 1);
        pq.push({newSectionLen , sectionIndex});
    }

    return pq.top().first;
}

int main(){
    int n = 10 ;
    vector <int> stations = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int k = 9 ;
    cout << findSmallestMaxDistBrute(stations , k) << endl;
    cout << findSmallestMaxDist(stations , k) ;
    return 0;
}