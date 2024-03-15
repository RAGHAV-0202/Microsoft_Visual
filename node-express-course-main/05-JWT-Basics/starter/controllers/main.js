const express = require("express");
const CustomAPIError = require("../errors/custom-error")
const db = require("../db/model")
require("dotenv").config()
const jwt = require("jsonwebtoken")


const login = async(req,res)=>{
    // res.send("Fake Login/Register/Signup Route");
    const {username , password} =  req.body ;

    if(!username || !password){
        throw new CustomAPIError("Please provide email or password",400)
    }else{
        const data = await db.create(req.body)    
        // console.log(data._id)
        const db_id = data._id
        const token = jwt.sign({db_id , username} , process.env.JWT_SECRET, {expiresIn : '30d'})
        res.status(200).json({registered : data , token : token})
        console.log(data , token)
    }


    
}

const dashboard = async(req,res)=>{
    const luckyNum = Math.floor(Math.random()*10000);
    res.status(200).json({msg : `Hello, Raghav Kapoor` , secret : `Here is your Authorized data , OTP = ${luckyNum}`})
}

module.exports = {login , dashboard }