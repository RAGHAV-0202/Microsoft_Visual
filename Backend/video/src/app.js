import express from "express";
import cors from "cors"
import UserRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import errorRouter from "./routes/error.routes.js"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


 
app.use("/api/v1/users",UserRouter)
app.use(errorRouter)

export {app}