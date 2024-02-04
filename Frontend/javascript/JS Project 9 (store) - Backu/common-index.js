const category = document.querySelector('.allCategory')

function categoryExtend() {
    category.classList.add('fadeIn')
     category.classList.remove('fadeOut')
    category.style.display = 'block'
}

function disNone(){
    category.style.display = 'none'
}

function exitBTN() {
    category.classList.add('fadeOut')


    setTimeout(disNone() , 5000)

}