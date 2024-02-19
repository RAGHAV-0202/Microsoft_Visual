require('dotenv').config()

const express = require("express");
const ProductsRouter = require("./routes/products");
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const connectDB = require("./db/connect") ; 

const port = process.env.PORT || 3000;
app.use(express.json())


app.get("/" , (req,res)=>{
    res.status(200).send("<style>body{ height : 100vh ; width : 100v2 ; background-color : lightblue ; display : flex ; align-items : center ; justify-content: center ; flex-direction : column;  } </style><body> <h1>Store API</h1> <br><a href='http://localhost:5000/api/v1/products'> GO </a></body> ")
})

app.use("/api/v1/products", ProductsRouter)

// app.get("*" , (req,res)=>{
//     res.status(404).json("Route not found");
// })
app.use(express.json())
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{console.log(`Live on the port ${port}`);}) 
    } catch (error){
        console.log(error)
    }
}

start()


