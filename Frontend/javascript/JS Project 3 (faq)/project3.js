
const a = document.querySelector('#first-hidden')
const b = document.querySelector('#second-hidden')
const c = document.querySelector('#third-hidden')

function firstBTN(){
   if(a.classList.contains('hidden')){
    a.setAttribute('class', 'block')
    document.querySelector('.first').style.fontSize = '17px'
    document.querySelector('.first-btn').innerHTML = '<i class="fa-solid fa-minus fa-shake fa-xl" style = "--fa-animation-iteration-count: 1"></i>'
   }else {
    a.setAttribute('class' , 'hidden')
    document.querySelector('.first').style.fontSize = '15px'
    document.querySelector('.first-btn').innerHTML = '<i class="fa-solid fa-plus fa-shake fa-xl" style = "--fa-animation-iteration-count: 1"></i>'
   }
}

function secondBTN(){
   if (b.classList.contains('hidden')){
    b.setAttribute('class', 'block')
    document.querySelector('.second').style.fontSize = '17px'
    document.querySelector('.second-btn').innerHTML = '<i class="fa-solid fa-minus fa-shake fa-xl" style = "--fa-animation-iteration-count: 1"></i>'
   }else {
    b.setAttribute('class' , 'hidden')
    document.querySelector('.second').style.fontSize = '15px'
    document.querySelector('.second-btn').innerHTML = '<i class="fa-solid fa-plus fa-shake fa-xl" style = "--fa-animation-iteration-count: 1"></i>'
   }
}

function thirdBTN(){
   if (c.classList.contains('hidden')){
    c.setAttribute('class', 'block')
    document.querySelector('.third').style.fontSize = '17px'
    document.querySelector('.third-btn').innerHTML = '<i class="fa-solid fa-minus fa-shake fa-xl" style = "--fa-animation-iteration-count: 1"></i>'
   }else {
    c.setAttribute('class' , 'hidden')
    document.querySelector('.third').style.fontSize = '15px'
    document.querySelector('.third-btn').innerHTML = '<i class="fa-solid fa-plus fa-shake fa-xl" style = "--fa-animation-iteration-count: 1"></i>'
   }
}