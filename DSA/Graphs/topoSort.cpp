#include <bits/stdc++.h>
using namespace std;


void dfs(int node , vector <vector<int>> graph , vector <int> &visited , stack <int> &st){
    visited[node] = 1 ;
    for(auto it : graph[node]){
        if(!visited[it]){
            dfs(it , graph , visited , st);
        }
    }
    st.push(node);
}

int main(){
    vector<vector<int>> graph = {{1, 2},{0, 3, 4},{0, 4},{1},{1, 2}};
    
    stack<int> st;
    vector <int> visited(graph.size() , 0);
    for(int i = 0 ; i < graph.size() ; i++){
        if(!visited[i]){
            dfs(i,graph,visited,st);
        }
    }

    while(!st.empty()){
        int node = st.top();
        cout << node << " ";
        st.pop();
    }


    return 0;
}