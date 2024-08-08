import mongoose from "mongoose";
import User from "./user.models"

const SubTodoSchema = new mongoose.Schema({
    content : {
        type : String , 
        required : [true , "must pass a name for the task"] ,
    },
    complete : {
        type : Boolean , 
        default : false ,
    },
    createdBy : {
        type : mongoose.Schema.type.ObjectId , 
        ref : "User"
    }

} , {timestamps : true})


export const SubTodo = mongoose.model("SubTodo" , SubTodoSchema)