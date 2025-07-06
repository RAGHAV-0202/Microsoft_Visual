#include <bits/stdc++.h>
using namespace std;

void traverse(vector <int> arr){
    for(int i = 0 ; i < arr.size() ; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

void bfs(vector <vector <int>> graph , vector <int> &output){
    queue <int> q ; 
    vector <int> visited(graph.size() , 0);
    q.push(0);
    visited[0] = 1 ;

    while(!q.empty()){
        int node = q.front();
        q.pop();
        output.push_back(node);
        for(auto it : graph[node]){
            if(!visited[it]){
                visited[it] = 1 ;
                q.push(it);
            }
        }
    }
}

void dfs(int node , vector <vector<int>> graph, vector <int> &visited , vector <int> &output){
    visited[node] = 1 ;
    output.push_back(node);
    for(auto it : graph[node]){
        if(!visited[it]){
            dfs(it,graph,visited,output);
        }
    }
}



int main(){

    vector<vector<int>> graph = {{1, 2},{0, 3, 4},{0, 4},{1},{1, 2}};

    vector <int> bfsOutput , dfsOutput;
    vector <int> visited(graph.size() , 0);
    bfs(graph , bfsOutput);
    dfs(0,graph,visited,dfsOutput);
    
    traverse(bfsOutput);
    traverse(dfsOutput);
    
    stack<int> st;


    return 0;
}