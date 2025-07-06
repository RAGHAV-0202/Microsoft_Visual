#include <bits/stdc++.h>
using namespace std;

class DS{
    vector <int> rank , parent ;
    public : 
        DS(int n ){
            rank.resize(n+1, 0);
            parent.resize(n+1, 0);
            for(int i = 0 ; i <= n ; i++){
                parent[i] = i;
            }
        };

        int findUPar(int u){
            if(parent[u] == u){
                return u ;
            }else{
                return findUPar(parent[u]);
            }
        };

        void unionByRank(int x , int y){
            int UltX = findUPar(x);
            int UltY = findUPar(y);

            if(UltX == UltY) return;

            if(rank[UltX] > rank[UltY]){
                parent[UltY] = UltX;
            }else if (rank[UltX] < rank[UltY]){
                parent[UltX] = UltY;
            }else{
                parent[UltX] = UltY;
                rank[UltY]++;
            }
        };
};

int maxRemove(vector <vector<int>> &stones){
    int maxRow = 0 ; 
    int maxCol = 0 ;
    for(auto it : stones){
        maxRow = max(maxRow , it[0]);
        maxCol = max(maxCol , it[1]);
    }

    DS ds(maxRow + maxCol + 1);
    unordered_map <int,int> stoneNodes;
    for(auto it : stones){
        int nodeRow = it[0];
        int nodeCol = it[1] + maxRow + 1;

        ds.unionByRank(nodeRow , nodeCol);
        stoneNodes[nodeRow] = 1;
        stoneNodes[nodeCol] = 1;
    }

    int cnt = 0 ;
    for(auto it : stoneNodes){
        if(ds.findUPar(it.first) == it.first){
            cnt++;
        }
    }


    return stones.size() - cnt ;
}

int main(){
    vector <vector <int>> stones = {{0,0},{0,1},{1,0},{1,2},{2,1},{2,2}};
    cout << maxRemove(stones) << endl;

    return 0 ;
}