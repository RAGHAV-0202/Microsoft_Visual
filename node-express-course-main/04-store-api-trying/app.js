const express = require("express");
const app = express();

const router = require("./routes")
require("dotenv").config()

const port = process.env.PORT || 4000

app.use("/api/v1/products" , router )

app.get("/",(req,res)=>{
    res.send("hello i am trying to replicate the store api , which i recently learnt from FreeCodeCamp.org")
})

app.listen(port,()=>{
    console.log(`Live on the Port ${port}`);
})