const express = require("express")
const app = express();
require("dotenv").config()

const port = process.env.PORT || 2222

const data = [
    {
        name : "raghav" ,
        branch : "CSE"
    },
    {
        name : "aas" ,
        branch : "AIDS"
    }
]

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.get("/json" , (req,res)=>{
    res.json(data)
})

app.get("*",(req,res)=>{
    res.send("Error 404")
})

app.listen(port , ()=>{
    console.log("listening on the port " + port)
})