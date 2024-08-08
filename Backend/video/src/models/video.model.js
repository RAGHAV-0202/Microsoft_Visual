import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new mongoose.Schema({

    title : {
        type : String ,
        required : [true , "video must have a title"],
        trim : true , 
        index : true,
    },
    videoFile : {
        type : String ,
        required : [true , "video required"],
    },
    description : {
        type : String ,
        required : [true , "description required"],     
    },
    thumbnail : {
        type : String ,
        required : [true , "thumbnail required"],     
    },
    duration : {
        type : Number ,
        required : [true , "duration required"],     
    },
    views : {
        type : Number ,
        default : 0    
    },
    isPublished : {
        type : Boolean ,
        default : true
    },
    owner : {
        type : Schema.Types.ObjectId ,
        ref : "User"  
    },
    

} , {timestamps : true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , UserSchema)