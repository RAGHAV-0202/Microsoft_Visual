#include <bits/stdc++.h>
using namespace std;

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
    int v = edges.size();
    vector<vector<pair<int, int>>> adj(v);
    for(auto it : edges){
        adj[it[0]].push_back({it[1], it[2]});
        adj[it[1]].push_back({it[0], it[2]});
    }

    priority_queue <pair<int,int> , vector <pair<int,int>> , greater<pair<int,int>>> pq ; 
    pq.push({0,0});
    vector <int> visited(v,0);
    int sum = 0 ;

    while(!pq.empty()){
        int node = pq.top().second ;
        int weight = pq.top().first ;

        pq.pop();

        if(visited[node]) continue ;
        visited[node] = 1 ;
        sum+=weight ;
        
        for(auto it : adj[node]){
            int adjNode = it.first  ;
            int edgeWt = it.second ;
            if(!visited[adjNode]){
                pq.push({edgeWt , adjNode});
            }
        }
    }
    
    cout << sum << endl;

}