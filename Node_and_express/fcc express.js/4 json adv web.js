const app = require('express')()
const {products} = require('../02-express-tutorial/data')

const port = 5000

app.get('/',(req,res)=>{
    res.send(`<h1>HOME PAGE</h1> <a href="/products">LINK</a>`)
})
app.get('/products',(req,res)=>{
    const newProducts = products.map((products)=>{
        const {id,name,image} = products;
        return{id,name,image}
    })
    res.json(newProducts) 
})

//// :productID is a req.params which increments afaik

// there are 4 products in that json file , so :productID increments and changes the url , and if singleProduct doesnt exists we will send error 404 or you can say an error page ,
// to redirect we can use res.writehead(errorcode , {location : "address"})

app.get('/products/:productID' , (req,res)=>{
    const {productID} = req.params ; 
    const singleProduct = products.find((products)=> products.id === Number(productID))
    if(!singleProduct){
        res.status(404).send("Error 404 !!!   not found")
    }
    res.send(singleProduct)
})

app.get('/products/:productID' , (req,res)=>{
    const {productID} = req.params ; 
    const singleProduct = products.find((products)=> products.id === Number(productID))
    if(!singleProduct){
        res.status(404).send("Error 404 !!!   not found")
    }
    res.send(singleProduct)
})

app.get('/products/:productID' , (req,res)=>{
    const {productID} = req.params ; 
    const singleProduct = products.find((products)=> products.id === Number(productID))
    if(!singleProduct){
        res.status(404).send("Error 404 !!!   not found")
    }
    res.send(singleProduct)
})


app.get('/products/:productID' , (req,res)=>{
    const {productID} = req.params ; 
    const singleProduct = products.find((products)=> products.id === Number(productID))
    if(!singleProduct){
        res.status(404).send("Error 404 !!!   not found")
    }
    res.send(singleProduct)
})

app.get('/products/:productID' , (req,res)=>{
    const {productID} = req.params ; 
    const singleProduct = products.find((products)=> products.id === Number(productID))
    if(!singleProduct){
        res.status(404).send("Error 404 !!!   not found")
    }
    res.send(singleProduct)
})

// --------------------------------------- ------------------------- ---------------------------

app.get('/products/:productID/reviews/:reviewID' , (req,res)=>{
    console.log(req.params)
    res.send("hello")
})
app.get('*',(req,res)=>{
    res.status(404).send("Error 404 !!!   not found")
})

app.listen(5000,()=>{
    console.log(`listening on the port ${port}`);
})