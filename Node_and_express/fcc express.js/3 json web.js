const app = require('express')()
const {products} = require('../02-express-tutorial/data')

port = 5000

app.get('/',(req,res)=>{
    res.json(products)
})

app.get('*',(req,res)=>{
    res.status(404).send("Error 404 !!!   not found")
})

app.listen(5000,()=>{
    console.log(`listening on the port ${port}`);
})