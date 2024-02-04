
// const a = document.querySelector('.full-page');
// const b = document.querySelector('.model')

// function displayModel() {
//     a.setAttribute('class', 'full-page dark')
//     b.removeAttribute('class' , 'hidden')
//     b.setAttribute('class' , 'model')
// }


// function removeModel() {
//     a.removeAttribute('class' , 'dark')
//     a.setAttribute('class' , 'full-page')

//     b.removeAttribute('class' , 'model')
//     b.setAttribute('class' , 'hidden')
// }

let a = document.querySelector('.model')
let b = document.querySelector('.full-page')

function displayModel() { 
    a.style.display = 'block'
}

function removeModel() {
    a.style.display = 'none'
}

window.addEventListener('click' , function(e) {
    if(e.target === b) {
        a.style.display = 'none'
    }
})