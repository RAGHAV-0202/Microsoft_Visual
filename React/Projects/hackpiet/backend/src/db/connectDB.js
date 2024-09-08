import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

async function connectDB(){
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/HackPIET`)
        console.log("Connected to the DB")
    }catch(error){
        console.log(`Error while connecting to the Database , Error : ${error}`)
    }
}

export {connectDB}