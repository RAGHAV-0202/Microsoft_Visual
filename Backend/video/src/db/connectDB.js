import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDB(){
    try{
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`connected to the DataBase \n Database Host : ${ConnectionInstance.connection.host}`)
    }catch(error){
        console.log("MongoDB Connection Failed : " + error)
        process.exit(1)
    }
} 

export default connectDB