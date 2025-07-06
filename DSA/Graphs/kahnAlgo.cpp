#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<vector<int>> graph = {{1, 2},{3},{3, 4},{5},{5, 6},{7},{7, 8},{},{9},{}};

    int v = graph.size();

    vector <int> indegree(v , 0);
    for(int i = 0 ; i < v ; i++){
        for(auto it : graph[i]){
            indegree[it]++;
        }
    }
    queue <int> q;

    for(int i = 0 ; i < v ; i++){
        if(indegree[i] == 0){
            q.push(i);
        }
    }

    vector <int> topo;

    while(!q.empty()){
        int node = q.front();
        q.pop();
        topo.push_back(node);
        cout << node << " ";
        
        for(auto it : graph[node]){
            indegree[it]--;
            if(indegree[it] == 0) q.push(it);
        }
    }

    return 0;
}