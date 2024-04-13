
    for(int i = 0 ; i < n/2 ; i++){
        int temp = arr[i] ; 
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp ; 
    } 
    for(int i = n ; i < len/2 ; i++){
        int temp = arr[i] ;
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp ; 
    } 

    for(int i = 0 ; i < len/2 ; i++){
        int temp = arr[i] ; 
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp ; 
    } 