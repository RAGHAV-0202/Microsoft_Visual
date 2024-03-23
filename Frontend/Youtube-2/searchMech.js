const searchData = document.querySelector(".two input").value

function searchMech(e){
    let searchData = document.querySelector(".two input").value
    if(searchData == ""){
        console.log("nothing");
        e.preventDefault()
    }else{
        console.log(searchData);
        // e.preventDefault()
        sessionStorage.setItem("search" , searchData)
    }
}
