const mongoose = require('mongoose')

const login = new mongoose.Schema({
    username : {
        type : String ,
        required : [true , "Must provide a name"] ,
        trim : true ,
        maxlength : [20, "name can't be more than 20 characters"]
    } ,
    password : {
        type : String , 
        required : [true , "Must provide a name"] ,
    },
})

module.exports = mongoose.model("Task" , login)