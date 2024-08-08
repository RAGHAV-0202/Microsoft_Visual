import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
dotenv.config()
import { app } from "./app.js"


const port = process.env.PORT || 4040


async function Host(){
    try{
        await connectDB() ;
        app.listen(port , ()=>{
            console.log(`Listening on the port ${port}`)
        })
    }catch(error){
        console.log("Couldn't Host : " + error)
    }
}
Host()

