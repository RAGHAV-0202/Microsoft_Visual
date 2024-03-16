const express = require("express");
const CustomAPIError = require("../errors/custom-error")
const db = require("../db/model")
require("dotenv").config()
const jwt = require("jsonwebtoken")

let token;

const login = async(req,res)=>{
    // res.send("Fake Login/Register/Signup Route");
    const {username , password} =  req.body ;

    if(!username || !password){
        throw new CustomAPIError("Please provide email or password",400)
    }else{
        const data = await db.create(req.body)    
        // console.log(data._id)
        const db_id = data._id
        token = jwt.sign({db_id , username} , process.env.JWT_SECRET, {expiresIn : '30d'})
        res.status(200).json({registered : data , token : token})
        console.log(data , token)
    }
}

const dashboard = async(req,res)=>{
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new CustomAPIError("No token present",401);
    }

    const token = authHeader.split(' ')[1];
    console.log(token)
    try{
        var decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded)
    }catch(error){
        throw new CustomAPIError("Unauthorized access" , 401)
    }

    const otp = Math.floor(1000 + Math.random() * 9000);
    res.status(200).json({msg : `Hello, ${decoded.username}` , secret : `Here is your Authorized data , OTP = ${otp}`})
}

module.exports = {login , dashboard }