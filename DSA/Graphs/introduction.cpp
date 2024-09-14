#include <bits/stdc++.h>
using namespace std;


// there are two types of graphs , directed and undirected
// circular are called nodes / vertex and represented by number , like node 1 , 2 ,3 : no specific order
// nodes are connected by line called edge

//      O----O
//      |    |
//      O----O
//      \   /
//       \ /
//        O

// so there are 5 nodes and 6 edges and edges are undirected

//      O<----O
//      ^     |
//      |     v
//      O---->O
//      \    /
//       \  /
//        O
// directed graph

// two subtypes : cyclic and acylic

// path : contains a lot of nodes and each of them are reachable

// degree of node = edges attached

// total degree = 2 * edges



int main(){
    cout << "GRAPH " << endl ;

    int n , m ;
    cout << "enter number of nodes and edges : " ;
    cin >> n >> m ;
    int adj[n+1][m+1];
    for(int i = 0 ; i < m ; i++){
        cout << "enter u and v : " ; 
        int u , v ;
        cin >>u >> v ;
        adj[u][v] = 1 ;
        adj[v][u] = 1 ;
    }

    // or

    cout << "using vector" << endl; 

    vector<int> adjencyList[n+1];
    for(int i = 0 ; i < n ; i ++ ){
        int u, v;
        cin >> u >> v;
        adjencyList[u].push_back(v);
        adjencyList[v].push_back(u);
    }


    return 0;
}