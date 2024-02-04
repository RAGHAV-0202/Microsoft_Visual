const display = document.querySelector('.display')
const storedDisplay = document.querySelector('.storedValue')
const elements = document.querySelectorAll('#ao')
const operatorDISP = document.querySelector('.operatorDISPLAY')
// console.log(elements)


var operator = ''
var storedValue = 0
display.value = ''


function one() {
    display.value = display.value  + '1'
}
function two() {
    display.value = display.value  + '2'
}
function three() {
    display.value = display.value  + '3'
}
function four() {
    display.value = display.value  + '4'
}
function five() {
    display.value = display.value  + '5'
}
function six() {
    display.value = display.value  + '6'
}
function seven() {
    display.value = display.value  + '7'
}
function eight() {
    display.value = display.value  + '8'
}
function nine() {
    display.value = display.value  + '9'
}
function zero() {
    display.value = display.value  + '0'
}
function doubleZero() {
    display.value = display.value  + '00'
}
function dot() {
    display.value = display.value  + '.'
}
function AC() {
    display.value = ''
    storedValue = 0
    storedDisplay.value = ''
    operator = ''
    operatorDISP.value = ''
}

function DE() {
   length = display.value.length
   console.log(display.value[length - 1])
   display.value = Array.from(display.value).splice(0, length - 1).join("");
}

elements.forEach(element => {
  element.addEventListener('click', function(e) {
    let target = e.target;
    operator = e.target.value
    // console.log(operator);
    operatorDISP.value = operator

    // storedValue += parseFloat(display.value)
    // storedDisplay.value = storedValue
    
    if(operator === '+'){
        storedValue += parseFloat(display.value)
        storedDisplay.value = storedValue
    }else if (operator === '-')
            {if (storedValue == 0){
                storedValue = parseFloat(display.value)
                storedDisplay.value = storedValue
            }else if(display.value !=''){
                console.log('NaN added, no problem')
                storedValue = display.value
                storedDisplay.value = storedValue
                
            }else{
                storedValue =  storedValue - display.value  
                storedDisplay.value = storedValue  
            }
    }else if (operator === '*'){
        console.log(storedValue)
            if (storedValue == 0){
                storedValue = parseFloat(display.value)
                storedDisplay.value = storedValue
            }else {
                storedValue =  storedValue * display.value  
                storedDisplay.value = storedValue  
            }
    }else if (operator === '/'){
        if (storedValue == 0){
            storedValue = parseFloat(display.value)
            storedDisplay.value = storedValue
        }else {
            storedValue =  storedValue / display.value  
            storedDisplay.value = storedValue  
        }
    }

    
    display.value = ""

  });
});

function equal() {
    if(operator === '+') {
        var ans = parseFloat(storedValue) + parseFloat(display.value)
        display.value = ans.toFixed(2)
    }else if (operator === '-'){ 
        var ans = parseFloat(storedValue) - parseFloat(display.value)
        display.value = ans.toFixed(2)
    }else if (operator === '*'){ 
        var ans = parseFloat(storedValue) * parseFloat(display.value)
        display.value = ans.toFixed(2)
    }else if (operator === '/'){ 
        var ans = parseFloat(storedValue) / parseFloat(display.value)
        display.value = ans.toFixed(2)
    }
}