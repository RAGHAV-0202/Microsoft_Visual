const express = require('express')
const path = require('path');
const app = express();

const port = 5000;

app.use(express.static('./public')) /// gives all the required resources //public is folder

app.get('/' , (req,res)=>{
    res.sendFile(path.resolve(__dirname,'D:/Microsoft Visual/Frontend/nothing.tech/nothing.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Error 404</h1> <h2>Web Address Not Found</h2>`)
})

app.listen(port,()=>{
    console.log(`Live on the port ${port}`)
})

