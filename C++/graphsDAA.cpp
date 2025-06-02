#include <bits/stdc++.h>
using namespace std;

vector <int> bfs(int src , vector<vector<int>> graph){
    vector <int> visited(graph.size() , 0);
    vector <int> answer;

    queue <int> q ;

    q.push(src);
    visited[src] = 1;

    while(!q.empty()){
        int node = q.front();
        q.pop();
        answer.push_back(node);
        for(auto it : graph[node]){
            if(!visited[it]){
                visited[it] = 1;
                q.push(it);
            }
        }
    }
    return answer ;
}

void dfs(int n , vector <int> &ans , vector <vector <int>> &adj , vector <int> &visited){
    visited[n] = 1;
    for(auto it : adj[n]){
        if(!visited[it]){
            dfs(it , ans , adj , visited);
        }
    }
    ans.push_back(n);
}

void dfsForTopo(int n , vector <int> &visited , vector <vector<int>> &adj , stack<int> &st){
    visited[n] = 1;
    for(auto it : adj[n]){
        if(!visited[it]){
            dfsForTopo(it, visited, adj, st);
        }
    }
    st.push(n);
}


vector <int> topo(vector<vector<int>> graph){
    stack<int> st;
    vector<int> visited(graph.size() , 0);
    for(int i = 0 ; i < graph.size() ; i++){
        if(!visited[i]){
            dfsForTopo(i, visited, graph, st);
        }
    }
    vector <int> ans ;
    while(!st.empty()){
        int node = st.top();
        ans.push_back(node);
        st.pop();
    }
    return ans;    
}

// int prim(vector<vector<int>> graph){
//     vector<vector<pair<int,int>>> adj(graph.size());

//     for (auto &edge : graph) {
//         int u = edge[0];
//         int v = edge[1];
//         int wt = edge[2];
//         adj[u].push_back({v, wt});
//         adj[v].push_back({u, wt});
//     }
    

//     priority_queue <pair<int,int> , vector<pair<int,int>> , greater <pair<int,int>>> pq;
//     pq.push({0,0});
//     vector <int> visited(graph.size() , 0);
    // int sum = 0 ;

    // while(!pq.empty()){
    //     int node = pq.top().second ;
    //     int weight = pq.top().first ;

//         pq.pop();

//         if(visited[node]) continue ;
//         visited[node] = 1 ;
//         sum+=weight ;

//         for(auto it : adj[node]){
//             int adjNode = it.first ;
//             int edgeWt = it.second ;

//             if(!visited[adjNode]){
//                 pq.push({edgeWt , adjNode});
//             }
//         }
//     }

//     return sum;
// }

class DS{
    private :
        vector <int> parent ;
        vector <int> rank;

    public :
        DS(int n){
            parent.resize(n+1 , 0);
            rank.resize(n+1 , 0);

            for(int i = 0 ; i <=n ; i++){
                parent[i] = i;
            }
        }

        int findUPar(int x){
            if(parent[x] == x){
                return x ;
            }else {
                return findUPar(parent[x]);
            }
        }

        void unionByRank(int u , int v){
            int UltU = findUPar(u);
            int UltV = findUPar(v);
            if(UltU == UltV) return ;

            if(rank[UltU] < rank[UltV]){
                parent[UltU] = UltV;
            }else if (rank[UltU] > rank[UltV]){
                parent[UltV] = UltU;
            }else{
                parent[UltV] = UltU;
                rank[UltU]++;
            }
        }
};

void kruskal(){
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
    vector <pair<int,pair<int,int>>> adj;
    for(auto edge : edges){
        int u = edge[0];
        int v = edge[1];
        int wt = edge[2];

        adj.push_back({w , {u,v}});
    }
    sort(adj.begin() , adj.end());
    int mstWt = 0;
    DS ds(edges.size() + 1);
    for(auto it : adj){
        int wt = it.first ;
        int u = it.second.first ;
        int v = it.second.second ;
        
        if(ds.findUPar(u) != ds.findUPar(v)){
            mstWt+= wt;
            ds.unionByRank(u,v);

        }
    }
    cout << mstWt << endl;
}

void Dijakstra(int src , vector<vector<int>> edges){
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<vector<pair<int,int>>> adj(edges.size());
    for (auto &edge : edges) {
        int u = edge[0];
        int v = edge[1];
        int wt = edge[2];

        adj[u].push_back({v, wt});
    }

    vector <int> dist(edges.size(),1e8);
    dist[src]  = 0;
    pq.push({0,src});

    while(!pq.empty()){
        int dis = pq.top().first;
        int node = pq.top().second ;
        pq.pop();
        
        for(auto it : adj[node]){
            int edgeWt = it.first;
            int adjNode = it.second;
            if(dis + edgeWt < dist[adjNode]){
                dist[adjNode]  = dis + edgeWt ;
                pq.push({dis + edgeWt , adjNode});
            }
        }
    }
}

// to check negative cycles
void bellmanFord(int V, vector<vector<int>>& edges, int S){
    vector <int> dist(V,1e8);
    dist[S] = 0;
    for(int i = 0 ; i < V - 1 ; i++){
        for(auto it : edges){
            int u = it[0];
            int v = it[1];
            int wt = it[2];
            if(dist[u] != 1e8 && dist[u] + wt < dist[v]){
                dist[v] = dist[u] + wt;
            }
        }
    }

    for(auto it : edges){
        int u = it[0];
        int v = it[1];
        int wt = it[2];
        if(dist[u] != 1e8 && dist[u] + wt < dist[v]){
            cout << "Negative cycle detected" << endl;
            return;
        }
    }
}

int main(){

    return 0;
}