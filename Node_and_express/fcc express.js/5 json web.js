const app = require('express')();
const {products} = require('../02-express-tutorial/data')

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    // http://localhost:5000/api/v1/query?search=a&limit=4
    const {search,limit} = req.query
    let sorted = [...products]
    if(search){
        sorted = sorted.filter((products)=>{
            return products.name.startsWith(search)
        })
    }
    if(limit){
        sorted = sorted.slice(0,Number(limit))
    }
    if(sorted.length < 1 ){
        // res.status(200).send('No products matched your search')
        return res.status(200).json({success : true , data : []})
    }
    
    res.status(200).json(sorted)
})



app.get('*',(req,res)=>{
    res.status(404).send("Can not find the resource.")
})


app.listen(5000,(req,res)=>{
    console.log(`Listening on the port 5000...`)
})