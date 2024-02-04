
const x = document.querySelector('.reveal-btn');
const y = document.querySelector('.hidden-content')

function reveal() {
    if(y.classList.contains('revealed')){
        y.classList.remove('revealed')
    }else {
        y.classList.add('revealed')
    }
}

// x.addEventListener('click' , reveal)

