

const mainBox = document.querySelector(".main-box");

async function display(filters){
    try {
        const response = await fetch(`/api/v1/products/`);
        const data = await response.json();
        console.log(data)
        data.products.forEach(product => {
            addDiv(product)
        });
    } catch (error) {
        alert("cant load")
    }
}

function search(){
    const filters = document.querySelector(".filter_bar").value 
    console.log(filters)
    const elementsToDelete = mainBox.querySelectorAll(".product_div");
    elementsToDelete.forEach(element => {
        element.remove();
    });
    display_new(filters);

}
let data ; 
async function display_new(filters){
    try{
        const response = await fetch(`/api/v1/products/static?${filters}`);
        data = await response.json();
        console.log(data)
        if(data.number == 0){
            alert("no product found with the matching queries")
        }
        data.product.forEach(product => {
            addDiv(product)
        });
    }catch{
        alert("error")
    }
}


function addDiv(product) {

    let {featured} = product
    const {ratings , name , price , company} = product

    if(featured){
        featured_Data = "true"
    }else{
        featured_Data = "false"
    }


    const newDiv = document.createElement("div");
    if(name){
        newDiv.innerHTML += `<h5>Name : ${name}</h5>`
    }
    if(price){
        newDiv.innerHTML += `<h5>Price : ${price}</h5>`
    }
    if(company){
        newDiv.innerHTML += `<h5>Company : ${company}</h5>`
    }
    if(ratings){
        newDiv.innerHTML += `<h5>Ratings : ${ratings}</h5>`
    }
    if(featured_Data){
        newDiv.innerHTML += `<h5>Featured : ${featured}</h5>`
    }

    newDiv.classList.add("product_div");
    mainBox.appendChild(newDiv);
}