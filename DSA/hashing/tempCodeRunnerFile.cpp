    int hash[1000] = {0} ;  // max limit in main 10e6
    int array[] = {1,2,3,4,1,1,2,4,5,6,2,6,4,2,2,3,6,7,2,1,1,3,6,7,2,7,8,2,4,6,7,2,7,7,3};

    int len = sizeof(array) / sizeof(array[0]);
    for(int i = 0 ; i < len ; i++){
        hash[array[i]] += 1 ;
    }

    cout  << "enter number of frequencies to be searched : " ;
    int q ; 
    cin >> q ;
    while(q--){
        int search ;
        cin >> search ;
        cout << "number of times " << search << " appeared : " << hash[search] << endl;
    }
