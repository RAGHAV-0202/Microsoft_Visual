import express from "express"
import cors from "cors"
const app = express()
// import validateCertificate from "./routes/validate.routes.js";
import validateRoute from "./routes/validate.routes.js"

const corsOptions = {
    origin: ["*" , "https://hackpiet.vercel.app" , "http://127.0.0.1:5500"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
    // credentials: true ,
    // sameSite: 'None'
};

app.use(express.json())

app.use(cors(corsOptions));

app.get("/" , (req,res)=>{
    res.status(200).json("Server is Live")
})

app.use("/api/certificates" , validateRoute)

export {app}