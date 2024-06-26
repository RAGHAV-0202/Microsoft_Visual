const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name:{
        type: String , 
        required : [true , "Product name must be provided"],
    },
    price:{
        type : Number,
        required : [true , "Product price must be provided"],
    },
    featured:{
        type : Boolean,
        default : false,
    },
    ratings : {
        type : Number,
        default : 4.5
    },
    createdAt : {
        type : Date ,
        default : Date.now(),
    },
    company : {
        type : String,
        
    }
})

module.exports = mongoose.model("Product" , Schema)