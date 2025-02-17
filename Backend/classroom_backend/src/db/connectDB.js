import mongoose from "mongoose";

async function connectDB(){
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log("Connected to the DB")
    }catch(error){
        console.log(`Error while connecting to the DataBase , Error : ${error}`)
    }
}

export {connectDB}