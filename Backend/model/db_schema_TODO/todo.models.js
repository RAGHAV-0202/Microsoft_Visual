import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : [true , "Please enter the title"]
    },
    complete : {
        type : Boolean , 
        default : false 
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User"
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ]
} , {timestamps : true})


export const Todo = mongoose.model("Todo" , todoSchema)