

function count_digit(number){
    let count = 0 ; 
    while(Math.floor(number) > 0){
        number = number / 10 ; 
        number = Math.floor(number);
        count = count + 1  ;
        console.log(number);
    }
    console.log(`number of digits = ${count} \n`)  ;
}
function count_digit2(number){
    var num = number.toString()
    console.log(num.length)
}
function reverse(number){
    var rev = 0 ; 
    while(Math.floor(number) > 0){
        var digit = number % 10 ; 
        rev = (rev * 10) + digit ;
        number = number / 10 ;
        number = Math.floor(number);
    }
    console.log("reversed number = " + rev);
}
function reverse2(number){
    var num2 = number.toString();
    for(var i = 0 ; i <= num2.length ; i++){
        temp = num2[i];
        num2[i] = num2[num2.length - 1 - i];
        num2[num2.length - 1 - i] = temp ;

    }
    console.log(parseInt(num2));
}


let number = 456123 ;
count_digit(number);
reverse(number);
reverse2(number)


