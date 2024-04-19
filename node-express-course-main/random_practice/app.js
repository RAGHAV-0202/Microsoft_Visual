require('dotenv').config();
const express = require("express");
const app = express();
require("./middlewares/not_found");
const routes = require("./routes/routes");
const notFound = require("./middlewares/not_found");
const connectDB  = require('./db/connect');
const port = 5000;

app.use(express.json())

app.use("/main" , routes);
app.get("/" , (req,res)=>{
    res.send("Homepage");
})
app.use(notFound);

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT , ()=>{console.log(`Listening on the port ${process.env.PORT}`)})
    }catch(Err){
        console.log("error");
    }
}
start();
