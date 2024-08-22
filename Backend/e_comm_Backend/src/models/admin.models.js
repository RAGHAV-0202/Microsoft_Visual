import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const AdminSchema = new mongoose.Schema({
    email : {
        type : String , 
        required : [true , "email is required"],
        unique : [true , "email already in use"]
    },
    password : {
        type : String , 
        required : [true , "Password is required"] ,
        minlength : 6 , 
    },
    isAdmin : {
        type : Boolean ,
        default : true
    }
} , {timestamps : true})


AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

AdminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const Admin = mongoose.model("Admin" , AdminSchema)
export default Admin