const app = require('express')();
const port = 5000
const logger = require('./6 middleware_')
//req => middleware => res



app.get('/', logger,(req,res)=>{
    res.send("Home Page")
})

app.get('/about',logger,(req,res)=>{
    res.send("about us")
})

app.get('*',(req,res)=>{
    res.send("Error 404 Not Found")
})

app.listen(5000,()=>{
    console.log(`listening on the port ${port}`);
})