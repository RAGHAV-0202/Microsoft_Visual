import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : [true , "Must enter a username"] ,
        unique : [true , "Same username exists"] ,
    } , 
    password : {
        type : String , 
        required : [true , "Must enter a password"] ,
    } , 
    email : {
        type : String , 
        required : [true , "Must enter an email"] ,
        unique : [true , "Same email exists"] ,
    } , 
    isActive : {
        type : Boolean ,
        required : false ,
        default : false ,
    } ,
    
} , {timestamps : true})
 



export const User = mongoose.model("User" , userSchema)