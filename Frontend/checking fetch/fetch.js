
const cart_div = document.querySelector('.cart');
const box = document.querySelector(".main-box")
var cart = {}
var data ; 


function cartDisplay(){
    if(cart_div.classList.contains("visible")){
        cart_div.classList.remove("visible");
        cart_div.classList.add("invisible")
        cart_div.classList.add("cart")

        cart_div.style.display = "none"
        const elementsToDelete = cart_div.querySelectorAll(".cart-product");
            elementsToDelete.forEach(element => {
                element.remove();
    });
    }else{
        console.log(cart)
        cart_div.classList.remove("invisible");
        cart_div.classList.add("visible")
        cart_div.classList.add("cart")

        cart_div.style.display = "block"

        for (const id in cart) {
            const productId = parseInt(id); // Convert id to number
            const product = data.find(item => item.id === productId);
            if (product) {
                addDivCart(product , cart[id],id);
            }
        }
    }
}


function addToCart(id){
    if(id in cart){
        cart[id] +=1 ;
    }else{
        cart[id] = 1
    }
}



function addDivCart(product , qty,id){
    const {image} = product
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id" ,`${id}`)
    newDiv.classList.add("cart-product")
    
    const img_span = document.createElement("div")
    img_span.classList.add("cart-image");
    img_span.innerHTML = `<img class="product-img" src="${image}" alt="product img">`;
    newDiv.appendChild(img_span)

    const btn_span = document.createElement("div");
    btn_span.classList.add("cart-button")
    btn_span.innerHTML= `<h5>quantity = ${qty}</h5> <button onclick="reduce(event)">reduce qty</button>`
    newDiv.appendChild(btn_span)
    
    document.querySelector(".cart").appendChild(newDiv)
}

function reduce(e){
    const id = (e.target.parentElement.parentElement.getAttribute("id"));
    cart[id] -= 1 ;

    if(cart[id] == 0){
        e.target.parentElement.parentElement.remove()
        delete cart[id]
    }else{
        const qty = cart[id];
        (e.target.parentElement).innerHTML = `<h5>quantity = ${qty}</h5> <button onclick="reduce(event)">reduce qty</button>`
    }


}

function addDiv(product){
    const {id , image } = product
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id" , `${id}`);
    newDiv.classList.add("products")
    const img_span = document.createElement("span")
    img_span.classList.add("image");
    img_span.innerHTML = `<img class="product-img" src="${image}" alt="product img">`;

    newDiv.appendChild(img_span)

    const btn_span = document.createElement("span");
    btn_span.classList.add("button")
    btn_span.innerHTML= '<button onclick="addToCart(' + id + ')">Add to cart</button>';
    newDiv.appendChild(btn_span)
    
    box.appendChild(newDiv)

}


async function display_products(){
    try{
        const respone = await fetch('https://fakestoreapi.com/products')
        data = await respone.json()

        data.forEach(product => {
            addDiv(product)
        });

    }catch(error){
        console.log(error)
    }
}
