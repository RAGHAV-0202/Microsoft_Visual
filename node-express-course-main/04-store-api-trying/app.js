const express = require("express");
const app = express();
require("./middleware/not-found")
const cors = require("cors")

require("./connect");
const router = require("./routes");
const connectDB = require("./connect");
const notFound = require("./middleware/not-found");
require("dotenv").config()

const port = process.env.PORT || 4000
app.use(cors())

app.use("/api/v1/products" , router )
app.use(express.static('./public'))
app.get("/",(req,res)=>{
    res.send("hello i am trying to replicate the store api , which i recently learnt from FreeCodeCamp.org<br> <a  href ='http://localhost:5000/api/v1/products/'>GO </a>")
})
app.use(notFound)

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI) 
        app.listen(port,()=>{
            console.log(`Live on the Port ${port}`);
        })
    }catch(error){
        console.log(error)
    }
}

start()