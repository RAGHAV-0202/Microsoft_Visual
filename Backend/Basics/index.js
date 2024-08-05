const express = require("express")
const app = express();
require("dotenv").config()

const port = process.env.PORT || 2222

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.get("/mens" , (req,res)=>{
    res.send("mens clothing")
})

app.get("*",(req,res)=>{
    res.send("Error 404")
})

app.listen(port , ()=>{
    console.log("listening on the port " + port)
})