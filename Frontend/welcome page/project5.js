
array = [0]

function create(){

    const tasksCONTAINER = document.querySelector('.tasks')
    const data = document.getElementById('inputText')

    if(data.value === "") {
        alert("Enter some value to create List")
    }else {

        array.push(array.length + 1)
        y = (array.length-1)

        console.log(y)


    var div = document.createElement('div')
    div.classList.add('task')

    var paragraph = document.createElement('p')
    paragraph.innerText = data.value

    var buttonsDIV = document.createElement('div')
    buttonsDIV.classList.add('buttons-div')

    var tickBTN = document.createElement('button')
    tickBTN.classList.add('tick')
    tickBTN.innerHTML = ' <i class="fa-solid fa-check fa-shake fa-xl" style="--fa-animation-iteration-count: 1"></i>'
    
    var deleteBTN = document.createElement('button')
    deleteBTN.classList.add('delete')
    deleteBTN.innerHTML = '<i class="fa-solid fa-trash fa-shake fa-xl" style="--fa-animation-iteration-count: 1"></i>'



    div.appendChild(paragraph)
    div.appendChild(buttonsDIV)
    buttonsDIV.appendChild(tickBTN)
    buttonsDIV.appendChild(deleteBTN)
    tasksCONTAINER.appendChild(div)
    

    data.value = ""


    deleteBTN.addEventListener('click' , function(e){
        let target = e.target;
        console.log(target.parentElement.parentElement.parentElement)
        if ( target.parentElement.parentElement.parentElement.classList.contains('tasks')){
            console.log('glitch')
            target.parentElement.parentElement.remove()
        }else{ target.parentElement.parentElement.parentElement.remove()}
        // target.parentElement.parentElement.remove()
    })


    tickBTN.addEventListener('click' , function(e) {
        let target = e.target
        tickBTN.parentElement.parentElement.style.textDecoration = 'line-through'
        tickBTN.style.backgroundColor = '#58e894'
    } )








}
}

    // const container = document.querySelector('.delete')
    // container.addEventListener('click', function(event){
    // console.log('inside event');
    // handleDeleteButtonClick()
    // // const item = event.target.closest('.delete');
    // // item.parentElement.parentElement.remove()
    // )}

    //item.remove()
    // const parentdiv = item.parentdiv.parentdiv.parentdiv;
    // console.log(parentdiv)
    // container.remove(parentdiv)

    // if(event.target.classList.contains('delete')){

    //     const item = event.target.closest('.task');
    //     console.log('inside delete button');
    //     // //console.log("name: "+item);
    //     container.removeChild(item);
    //     // handleDeleteButtonClick(event);
    // }


// function handleDeleteButtonClick(event){
//     const item = event.target.closest('.delete');
//     item.parentElement.parentElement.remove()
// }


// const x  = 'div_number2'
// console.log(x[x.length - 1])

