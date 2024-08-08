import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Product"
    },
    quantity : {
        type : Number ,
        required : true ,
    }
})


const orderSchema = new mongoose.Schema({
    Customer : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
        required : true,
    },
    price : {
        type : Number ,
        required : true
    },
    orderItems : {
        type : [orderItemSchema],
    },
    address : {
        type : string,
        required : true 
    },
    status : {
        type : string , 
        enum : ["PENDING" , "CANCELLED" , "DELIVERED"],
        default : "PENDING"
    }
    


} , {timestamps : true});


export const Order = mongoose.model("Order" , orderSchema)