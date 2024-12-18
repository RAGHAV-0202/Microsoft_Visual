import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Must have a username"],
        unique: [true, "username is already in use"],
        lowercase: true,
        trim: true,
        index: true,
    },
    fullName: {
        type: String,
        required: [true, "Must enter your fullname"],
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: [true, "Must enter an email"],
        unique: [true, "email is already in use"],
        lowercase: true,
        trim: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Must enter a password"],
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
    ],
    refreshToken: {
        type: String,
    },
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { _id: this._id, email: this.email, username: this.username, fullName: this.fullName },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export const User = mongoose.model("User", UserSchema);
