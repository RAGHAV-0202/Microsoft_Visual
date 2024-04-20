require('dotenv').config();
const connectDB  = require('./db/connect');

const express = require("express");
const app = express();

const routes = require("./routes/routes");


require("./middlewares/not_found");
const notFound = require("./middlewares/not_found");

app.use(express.static('./public'));
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
