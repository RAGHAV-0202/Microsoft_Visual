import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import Class from "./classroom.models.js";
dotenv.config();

const UserSchema = new mongoose.Schema({
    email : {
        required : [true , "Email is Required"] ,
        type : String 
    },
    name : {
        type : String , 
        required : [true , "Name is Required"] 
    },
    password : {
        type : String ,
        required : [true , "Password is Required"]
    },
    createdClasses : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Class"
    }]
} , {timestamps : true});


UserSchema.pre("save" ,  async function (next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password  , 10);
    next();
})

UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { _id: this._id, email: this.email, name: this.name },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

UserSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password , this.password);
}

const User = mongoose.model("User" , UserSchema)
export default User