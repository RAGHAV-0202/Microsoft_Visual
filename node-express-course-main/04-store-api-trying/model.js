const mongoose = require("mongoose");

const model = new mongoose.Schema ({
    name : {
        type : String ,
        required : [true , "Product name must be provided"] ,
    } , 
    price :{
        type : Number , 
        requird  : [true , "Product price must be provided"],
    },
    featured :{
        type : Boolean , 
        default : false ,
    },
    ratings : {
        type : Number , 
        default : 4.2 ,
    }, 
    company : {
        type : String
    },
    createdAt : {
        type : Date , 
        default : Date.now()
    }
})

module.exports = mongoose.model("Product" , model)