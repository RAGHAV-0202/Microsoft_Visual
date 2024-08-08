import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : [true , "product name is required"],
    },
    price : {
        type : Number , 
        default : 0
    },
    description : {
        type : String , 
        required : [true , "Description is required"]
    },
    productImage : {
        type : String,
    },
    stock : {
        type : Number,
        default : 0,
    },   
    category : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Category",
        required : true,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" ,
        required : true
    }


},{timestamps : true})


export const Product = mongoose.model("Product" , productSchema)