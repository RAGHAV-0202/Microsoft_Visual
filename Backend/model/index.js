import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const port = process.env.PORT || 3000

const app = express()


app.get("/" , (req,res)=>{
    res.send("HomePage")
})

app.get("*" , (req,res)=>{
    res.send("Error 404  |  Not Found  | Invalid Route  |  Couldn't find the resource which you were looking for")
})

app.listen(port , ()=>{
    console.log(`Listening on the port ${port}`)
})