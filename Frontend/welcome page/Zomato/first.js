var j = 2 ; 
var k = 2 ; 
var l = 2 ;

function handleclick1(){
    if (j % 2 == 0 ){
        document.querySelector('.a1').style.height = "auto";
        document.querySelector('.a2').style.display = "block"
        document.querySelector('.btn1').innerHTML = '<i class="fa-solid fa-angle-down fa-lg"></i>' ;
    }else{
        document.querySelector('.a1').style.height = "40px";
        document.querySelector('.a2').style.display = "none"
        document.querySelector('.btn1').innerHTML = '<i class="fa-solid fa-angle-up fa-lg"></i>' ;
    }
    j = j + 1 ;

}

function handleclick2(){
    if (k % 2 == 0 ){
        document.querySelector('.b1').style.height = "auto";
        document.querySelector('.b2').style.display = "block"
        document.querySelector('.btn2').innerHTML = '<i class="fa-solid fa-angle-down fa-lg"></i>' ;
    }else{
        document.querySelector('.b1').style.height = "40px";
        document.querySelector('.b2').style.display = "none"
        document.querySelector('.btn2').innerHTML = '<i class="fa-solid fa-angle-up fa-lg"></i>' ;
    }
    k++;
}

function handleclick3(){
    if (l % 2 == 0 ){
        document.querySelector('.c1').style.height = "auto";
        document.querySelector('.c2').style.display = "block"
        document.querySelector('.btn3').innerHTML = '<i class="fa-solid fa-angle-down fa-lg"></i>' ;
    }else{
        document.querySelector('.c1').style.height = "40px";
        document.querySelector('.c2').style.display = "none"
        document.querySelector('.btn3').innerHTML = '<i class="fa-solid fa-angle-up fa-lg"></i>' ;
    }
    l++
}