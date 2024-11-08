import mongoose from "mongoose";
import User from "./user.models.js";

const ClassSchema = mongoose.Schema({
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    expireAt: { 
    type: Date, 
    default: Date.now, 
    expires: 86400 // Document expires after 1 hour
    },
    password: {
        type: String,
        required: false,
        validate: {
            validator: function(v) {
                // Check if password is a 4-digit number (including leading zeros)
                return /^\d{4}$/.test(v);
            },
            message: "Password must be a 4-digit number"
        }
    },
    members : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User" 
    }],
    classCode : {
        type : String ,
        unique : true 
    }
} , {timestamps : true});

function generateClassCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
        if (i === 2) code += '-'; 
    }
    return code;
}

ClassSchema.pre('save', async function(next) {
    if (!this.classCode) {
        this.classCode = generateClassCode();
    }
    next();
});


ClassSchema.methods.isPasswordCorrect = async function(password){
    return password == this.password
}

const Class = mongoose.model("Class" , ClassSchema);
export default Class;