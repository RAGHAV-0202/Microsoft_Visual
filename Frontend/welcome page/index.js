
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");

const step_icon_1 = document.querySelector(".sb_step_icon1")
const step_icon_2 = document.querySelector(".sb_step_icon2")
const step_icon_3 = document.querySelector(".sb_step_icon3")
const step_icon_4 = document.querySelector(".sb_step_icon4")

const step_icon_1p = document.querySelector(".sb_step_icon1 p")
const step_icon_2p = document.querySelector(".sb_step_icon2 p")
const step_icon_3p = document.querySelector(".sb_step_icon3 p")
const step_icon_4p = document.querySelector(".sb_step_icon4 p")

const ar = document.querySelector(".arcade");
const adv = document.querySelector(".advanced");
const pro1 = document.querySelector(".pro")

const arcade_price = document.querySelector(".arcade_price") ;
const pro_price = document.querySelector(".pro_price") ;
const advanced_price = document.querySelector(".adv_price") ;

const onlineSer = document.querySelector(".onlineSer")
const stor = document.querySelector(".stor")
const prof = document.querySelector(".prof")

step_icon_1.style.backgroundColor = "hsl(206, 94%, 87%)" ;
price = 90
plan = "Arcade"

total = 0 ; 


function step1(){
    s1.style.display = "flex"
    s2.style.display = "none"
    s3.style.display = "none"
    s4.style.display = "none"

    step_icon_1.style.backgroundColor = "hsl(206, 94%, 87%)" ;
    step_icon_2.style.backgroundColor = "transparent" ;
    step_icon_3.style.backgroundColor = "transparent" ;
    step_icon_4.style.backgroundColor = "transparent" ;

    step_icon_1p.style.color = "black";
    step_icon_2p.style.color = "white";
    step_icon_3p.style.color = "white";
    step_icon_4p.style.color = "white";

}

function step2(){

    Name = document.querySelector(".name").value
    email = document.querySelector(".email_ad").value
    phone = document.querySelector(".phn").value

    console.log(`Name : ${Name} , Email address : ${email} , Phone : ${phone}`)

    s2.style.display = "flex"
    s1.style.display = "none"
    s3.style.display = "none"
    s4.style.display = "none"

    step_icon_2.style.backgroundColor = "hsl(206, 94%, 87%)" ;
    step_icon_1.style.backgroundColor = "transparent" ;
    step_icon_3.style.backgroundColor = "transparent" ;
    step_icon_4.style.backgroundColor = "transparent" ;

    step_icon_2p.style.color = "black";
    step_icon_1p.style.color = "white";
    step_icon_3p.style.color = "white";
    step_icon_4p.style.color = "white";
}

function step3(){
    
    if(value == 1 && plan == "Arcade"){
        price = 90
    }else if (value == 1 && plan == "Advanced"){
        price = 120
    }else if (value == 1 && plan == "Pro"){
        price = 150 
    }else if (value == 0 && plan == "Arcade"){
        price = 9 
    }else if (value == 0 && plan == "Advanced"){
        price = 12 
    }else if (value == 0 && plan == "Pro"){
        price = 15 
    }

    console.log(`Plan selected = ${plan} and Price = ${price}`)
    s3.style.display = "flex"
    s1.style.display = "none"
    s2.style.display = "none"
    s4.style.display = "none"

    step_icon_3.style.backgroundColor = "hsl(206, 94%, 87%)" ;
    step_icon_1.style.backgroundColor = "transparent" ;
    step_icon_2.style.backgroundColor = "transparent" ;
    step_icon_4.style.backgroundColor = "transparent" ;
    
    step_icon_3p.style.color = "black";
    step_icon_1p.style.color = "white";
    step_icon_2p.style.color = "white";
    step_icon_4p.style.color = "white";
}

function step4(){
total = price
    if(value_OS == 0 ){  
        console.log("Online services")
        document.querySelector(".add-os").style.display = "flex"
        if(value == 1){
            total += 10
        }else {
            total +=1 
        }
    }
    if(value_Stor == 0){
        console.log("Larger Storage")
        document.querySelector(".add-stor").style.display = "flex"
        if(value == 1){
            total += 10
        }else {
            total +=1 
        }
        
    }

    if(value_profile == 0){
        console.log("customizeable profile")
        document.querySelector(".add-prof").style.display = "flex"
        if(value == 1){
            total += 10
        }else {
            total +=1 
        }
        
    }

    console.log("s4")
    yes = "Yearly"
    if(value == 1){
        ok = "yr"
        yes = " (Yearly)"
        var x = document.getElementsByClassName('add-ons-price') ;
        for(i = 0 ; i <x.length;i++){
            x[i].innerHTML = "10"
        }
    }else{
        ok = "mo"
        yes = " (Monthly)"
                var x = document.getElementsByClassName('add-ons-price') ;
        for(i = 0 ; i <x.length;i++){
            x[i].innerHTML = "1"
        }
    }


    document.querySelector(".Total_price").innerHTML = total




    document.querySelector(".final_plan_name").innerHTML = plan + yes
    document.querySelector(".final_plan_price").innerHTML = price


    var kk = document.getElementsByClassName('m_or_y') ;
    for(i = 0 ; i <kk.length;i++){
        kk[i].innerHTML = ok
    }


    s4.style.display = "flex"
    s1.style.display = "none"
    s2.style.display = "none"
    s3.style.display = "none"

    step_icon_4.style.backgroundColor = "hsl(206, 94%, 87%)";
    step_icon_1.style.backgroundColor = "transparent";
    step_icon_2.style.backgroundColor = "transparent";
    step_icon_3.style.backgroundColor = "transparent";

    step_icon_4p.style.color = "black";
    step_icon_1p.style.color = "white";
    step_icon_2p.style.color = "white";
    step_icon_3p.style.color = "white";
}

function arcade(){
    plan = "Arcade"
}
function advanced(){
    plan = "Advanced"
}
function pro(){
    plan = "Pro"
}

value = 1
function plan_duration(){
    if(value == 1){
        var yearlyElements = document.getElementsByClassName("yearlyyyy");

        for (var i = 0; i < yearlyElements.length; i++) {
            yearlyElements[i].style.display = "none";
        }

        arcade_price.innerHTML = "$9/mo"
        advanced_price.innerHTML = '$12/mo'
        pro_price.innerHTML = "$15/mo"

        value = 0 

        var addons_elems = document.getElementsByClassName("price");
        for (var i = 0; i < addons_elems.length; i++) {
            addons_elems[i].innerHTML = "$1/mo";
        }


    }else{
        var yearlyElements = document.getElementsByClassName("yearlyyyy");

        for (var i = 0; i < yearlyElements.length; i++) {
            yearlyElements[i].style.display = "block";
        }

        arcade_price.innerHTML = "$90/yr"
        advanced_price.innerHTML = '$120/yr'
        pro_price.innerHTML = "$150/yr"

        var addons_elems = document.getElementsByClassName("price");
        for (var i = 0; i < addons_elems.length; i++) {
            addons_elems[i].innerHTML = "$10/yr";
        }

        value = 1
    }
}
value_OS = 1 
value_Stor = 1
value_profile = 1  
function onlineServices(){
    if(value_OS == 0){
        onlineSer.style.backgroundColor = "transparent"
        value_OS = 1 
    }else {
        onlineSer.style.backgroundColor = "hsl(228, 100%, 92%)"
        value_OS = 0
    }
   
}

function storage(){
    if(value_Stor == 0){
        stor.style.backgroundColor = "transparent"
        value_Stor = 1 
    }else {
        stor.style.backgroundColor = "hsl(228, 100%, 92%)"
        value_Stor = 0
    }
}
function profile(){
    if(value_profile == 0){
        prof.style.backgroundColor = "transparent"
        value_profile = 1 
    }else {
        prof.style.backgroundColor = "hsl(228, 100%, 92%)"
        value_profile = 0
    }
}


function Confirm(){
    s2.style.display = "none"
    s1.style.display = "none"
    s3.style.display = "none"
    s4.style.display = "none"
    s5.style.display = "flex"
}