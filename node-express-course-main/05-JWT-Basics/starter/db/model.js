const mongoose = require("mongoose");


const model = new mongoose.Schema({
    username : {
        type : String,
        required : [true , "username is required" ]
    },
    password : {
        type : String ,
        required : [true , "must provide a password"]
    }
})

module.exports = mongoose.model("user" , model)