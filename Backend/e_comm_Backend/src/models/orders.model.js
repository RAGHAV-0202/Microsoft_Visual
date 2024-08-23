import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products : [
        {
        productId: {
            type: String,
            // ref: 'Product',
            requried : [true , "product id is required"]
        },
        quantity: {
            type: Number,
            default: 1,
        },
        }
    ],
    status : {
        type : String,
        enum : ["Placed" , "Processing" , "Confirmed" , "Shipped" , "Out for Delivery" , "Delivered" , "Canceled" , "Refunded" , "Returned" , "Completed"],
        default : "Placed"
    }
}  , {timestamps : true})