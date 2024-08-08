import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : [true , "Username is required"],
        unique : [true , "Username is already taken"],
        lowercase : true
    },
    email : {
        type : String ,
        required : [true , "Email is required"],
        unique : [true , "Same email is already in use"],
        lowercase : true
    },
    password : {
        type : String ,
        required : [true , "password is required"],
    },


} , {timestamps : true})


export const User = mongoose.model("User" , userSchema)