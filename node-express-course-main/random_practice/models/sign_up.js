const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , "Must provide a name"] ,
        trim : true ,
        maxlength : [20, "name can't be more than 20 characters"]
    } ,
    password : {
        type : Boolean , 
        default : false , 
    },
})

module.exports = mongoose.model("signup" , uploadSchema)