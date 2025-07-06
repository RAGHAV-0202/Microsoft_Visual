#include <bits/stdc++.h>
using namespace std;

class DS{
    vector <int> rank , parent;

    public :
        DS(int n){
            rank.resize(n,0);
            parent.resize(n,0);
            
            for(int i = 0 ; i < n ; i++){
                parent[i] = i ;
            }
        }

        int findUPar(int x){
            if(parent[x] == x){
                return x ;
            }else{
                return findUPar(parent[x]);
            }
        }

        void unionByRank(int u , int v){
            int ult_u = findUPar(u);
            int ult_v = findUPar(v);

            if(ult_u == ult_v) return ;

            if(rank[ult_u] < rank[ult_v]){
                parent[ult_u] = ult_v;
            }else if (rank[ult_u] > rank[ult_v]){
                parent[ult_v] = ult_u;
            }else{
                parent[ult_u] = ult_v;
                rank[ult_u]++;
            }

        }
};

int main(){
    vector<vector<int>> edges = {
        {0, 1, 1},
        {0, 2, 3},
        {1, 2, 3},
        {1, 3, 6},
        {2, 3, 4},
        {2, 4, 2},
        {3, 4, 5},
        {3, 5, 7},
        {4, 5, 8}
    };  

    vector <pair<int,pair<int,int>>> adj ;
    for(auto it : edges){
        adj.push_back({it[2] , {it[0] , it[1]}});
    }
    sort(adj.begin() , adj.end());
    int mstWt = 0 ;

    DS ds(edges.size());
    for(auto it : adj){
        int wt = it.first ;
        int u = it.second.first;
        int v = it.second.second;

        if(ds.findUPar(u) != ds.findUPar(v)){
            mstWt+=wt;
            ds.unionByRank(u,v);
        }
    }

    cout << mstWt << endl;

}