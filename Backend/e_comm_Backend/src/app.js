import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
dotenv.config()
import dataRouter from "./routes/data.routes.js"
import not_found from "./routes/404.routes.js"
import os from "os"
import userRouter from "./routes/user.routes.js"
import asyncHandler from "./utils/asyncHandler.js";
import mongoose from "mongoose";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.get(/\/.*\/status$/, asyncHandler(async (req, res) => {
  const startTime = Date.now();
  const result = await mongoose.connection.db.command({ ping: 1 });
  const endTime = Date.now();
  const latency = endTime - startTime;

  const isMongoConnected = mongoose.connection.readyState === 1;
  const statusInfo = {
    status: "OK",
    mongoDB: isMongoConnected ? "Connected" : "Disconnected",
    latency: latency + "ms",
    timestamp: new Date(),
  };
  res.status(200).json(statusInfo);
}));



app.use("/api/products/data" , dataRouter )
app.use("/api/auth" , userRouter )



app.get("*" , (req,res)=>{
    res.status(404).send(`
        <body style="display: flex; align-items: center; justify-content: center; min-height: 100vh; min-width: 100vw; box-sizing : border-box">
            <h1>Resource not found <br> Status Code 404</h1>
        </body>
    `)
})

export {app}