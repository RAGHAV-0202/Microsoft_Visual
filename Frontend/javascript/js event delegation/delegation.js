

// // document.querySelector('#football').addEventListener('click' , function(a){
// //     console.log('Football Clicked')
// //     const target = a.target;
// //     if(target.matches('li')){
// //         target.style.backgroundColor = 'gray'
// //     }
// // })

// // const x = document.querySelector('#basketball')
// // x.addEventListener('click', function(){
// //     console.log('Basketball Clicked')
// //     x.style.backgroundColor = 'gray'
// // })

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked')

    const target = e.target
    if(target.matches('li')){
        target.style.backgroundColor = 'gray'
        target.style.color = 'black'
    }
})


function addSport() {
    const get = document.querySelector('#newSportInput').value

    const dupliChecker = document.querySelectorAll('li')
    var array = []

    for(i = 0 ; i < dupliChecker.length; i++){
        array.push(dupliChecker[i].innerText)
        console.log(array)    
    }

    for(i = 0; i <array.length  ; i++) {
        var x = array[i]
    }
 
    if(get == "") {
        alert("Sport name can't be empty")
    }else if (get == x ) {
        alert("No duplicates allowed")
    }else {
        const sports = document.querySelector('#sports');
        const newSports = document.createElement('li')

        newSports.innerText = get
        newSports.setAttribute =  ('id', get)

        sports.appendChild(newSports)

        document.querySelector('#newSportInput').value = ""
    }

}


// const x = document.querySelectorAll('li')
// console.log(x[1].innerText)

