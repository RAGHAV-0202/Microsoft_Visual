// // const cars = ["Saab", "Volvo", "BMW", "alto" ,"amaze", "abcd" , "b" , "merc"];

// // var Car 

// // for (Car in cars){
// //     if(cars[Car] == "merc"){
// //         console.log("car found : " +  cars[Car])
// //         var index = parseInt(Car) + 1
// //         console.log("its index : " + index)
// //     }
// // }

// var newList = []
// var inserted = false

// var l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 14, 17]
// var x
// var z = 11
// for (x of l) {
//     if (!inserted) {
//         if (x < z) {
//             newList = newList + [x]
//             inserted = true
//         }
//     }
// } newList = newList + [z]
// if (!inserted) {
//     newList = newList + [x]
// }
// console.log(newList)



// var array = []
// var x = 0
// function fibonacci() {
//     var number1 = 0
//     var number2 = 1
//     for(x=0 ; x < 20 ; x++){
//         var next_number = number2 + number1
//         number1 = number2
//         number2 = next_number
//         array.push(next_number)
//     }
// }

// fibonacci()
// console.log(array)

// var array = []
// var x = 0
// function febonacci(){
//     var number1= 0
//     var number2 = 1
//     for (x = 0 ; array.length <20 ; x++){
//         var next_number = number2 + number1
//         number1 = number2
//         number2 = next_number
        
//         array.push(next_number)

//     }
// }

// febonacci()
// console.log(array)

// function factorial(x){
//     var number = x
//     var factorial = 1
//     for (i = 0 ; number - i > 1 ; i ++){
//         if(x == 0) {
//             factorial = 1
//         }else {
//             var factorial = factorial * (number-i)
//         }     
//     }
//     console.log(factorial)
// }

// factorial(4)


// function checkPrime(x){
//     var flag = 1;
//     if(x == 1 || x ==0){
//         flag = 0;
//     }else if(x == 2){
//         flag = 1;
//     }else {
//         for (y = 2 ; y <= (x / 2); y ++){
//             if(x%y == 0){
//                 flag = 0;
//             }
//         }
//     }
//     if(flag == 0){
//         console.log(x + " is Not Prime");
//     }else {
//         console.log(x + " is Prime")
//     }
// }

// checkPrime(17)


// var number1 = 0;
// var number2 = 1;
// for(var x = 0 ; x < 10 ; x++){
//     var number = number1 + number2;
//     number1 = number2 ; 
//     number2 = number;
//     console.log(number);
// }


// var array = [40, 69, 64, 44, 44, 43, 56, 67, 47];
// array.sort((a, b) => a - b);

// var top5array = [];
// for (let x = array.length - 1; x >= 0 && top5array.length < 5; x--) {
//     top5array.push(array[x]);
// }

// const sum = top5array.reduce((total, num) => total + num, 0);
// const average = sum / Math.min(5, top5array.length);

// console.log(average);

// var D = {}

// D.raghav1 = { "P": 80, "C": 95, "M": 76 }
// D.raghav2 = { "P": 22, "C": 23, "M": 95 }
// D.raghav3 = { "P": 64, "C": 78, "M": 99 }

// console.log(D)

// console.log(D.raghav1.P)


// function sort(array){
//     for(i = 0 ; i < array.length ; i++){
//         for(j = 0 ; j < array.length -i - 1; j++){
//             if(array[j] > array[j+1]){
//                 const temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
// }

// var tempArray = [1,23,4,23,2,2,3454235,345,5,5,6,2,1,14,6,7,8];
// sort(tempArray);
// console.log(tempArray)

// var letterCombinations = function(digits){
//     var presentArray = [];
//     for(i = 0 ; i < digits.length ; i ++){
//         if (digits[i] == '2') {
//             presentArray.push(['a','b','c']);
//         } else if (digits[i] == '3') {
//             presentArray.push(['d','e','f']);
//         } else if (digits[i] == '4') {
//             presentArray.push(['g','h','i']);
//         } else if (digits[i] == '5') {
//             presentArray.push(['j','k','l']);
//         } else if (digits[i] == '6') {
//             presentArray.push(['m','n','o']);
//         } else if (digits[i] == '7') {
//             presentArray.push(['p','q','r','s']);
//         } else if (digits[i] == '8') {
//             presentArray.push(['t','u','v']);
//         } else if (digits[i] == '9') {
//             presentArray.push(['w','x','y' , 'z']);
//         }
//     }
    
//     if(digits == ''){
//         var result = []
//     }else{
//         var result = ['']
//     }
    
    // console.log(presentArray);
    // for(i = 0; i < presentArray.length ; i++){
    //     for(j = 0 ; j < presentArray[i].length ; j++){
    //         for(k = 0 ; k < presentArray[i+1].length ; k++){
    //             result.push(presentArray[i][j] + presentArray[i+1][k])
    //         }
    //     }
    // }

    // console.log(result)


//     for (let i = 0; i < presentArray.length; i++) {
//         const tempResult = [];
//         for (let j = 0; j < result.length; j++) {
//             for (let k = 0; k < presentArray[i].length; k++) {
//                 tempResult.push(result[j] + presentArray[i][k]);
//             }
//         }
//         result = tempResult;
//     }
    
//     return result;
// };

// var digits = "23";
// letterCombinations(digits)

// /**
//  * @param {number} num
//  * @return {string}
//  */
// var intToRoman = function(num) {
//     var thousand = ["" , "M" , "MM" , "MMM"];
//     var hundered = ["" , "C" , "CC" , "CCC" ,"CD" , "D" , "DC" , "DCC" , "DCC" , "CM"];
//     var tens = ["" , "X", "XX" , "XXX" , "XL" , "L" , "LX" , "LXX" , "XCC" , "XC"];
//     var ones = ["" , "I" , "II" , "III" , "IV" , "V" , "VI" , "VII", "VIII" , "IX"];
    
//     var thousand_index = Math.floor(num/1000);
//     var hundred_index = Math.floor((num%1000)/100);
//     var tens_index = Math.floor(((num%1000)%100)/10);
//     var ones_index =  Math.floor(((num%1000)%100)%10);
    
    
//     return(thousand[thousand_index] + hundered[hundred_index] + tens[tens_index] + ones[ones_index])
// };

// var num = 58;
// console.log(intToRoman(num))

/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     maxVol = 0 ; 
//     for(i = 0 ; i < height.length ; i++){
//         barrier1 = height[i];
//         for(j = i+1 ; j < height.length ; j++){
//             barrier2 = height[j];
//             if(barrier2 > barrier1){
//                 currentVol = barrier1 * (j-i);
//                 maxVol = Math.max(maxVol, currentVol);
//             }else if(barrier1 >= barrier2){
//                 currentVol = barrier2 *(j-i);
//                 maxVol = Math.max(maxVol, currentVol);
//             }
//         }
//     }
//     return maxVol;
// };


// height = [1,1]
// maxArea(height)




// a = prompt()

// gcd = (num1,num2)=>{
//     max = 0
//     for(i = 0 ; i <= num1 ; i++){
//         if(num1 % i == 0 && num2 % i == 0 ){
//             if(i > max){
//                 max = i 
//             }
//         }
//     }
//     return max
// }

// lcm = (a * b) / gcd(a,b)
// console.log(lcm)

// let x = 52 ;

// y = x < 10 ? 2 : 4 ;

// console.log(y);

const isGoingOut = false;
let answer = isGoingOut ? "Yes" : "No" ;
console.log(answer);