const express = require('express');
const app = express();

// or const app = require('express) ();

const port = 5000

app.get('/' ,(req,res)=>{
    console.log("user hit the home page")
    res.send("Home Page");
})

app.get('/about' , (req,res)=>{
    console.log("user accessed about page");
    res.send("about page")
})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Resource not Found</h1>`)
    console.log('user accessed invalid url')
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})




//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen