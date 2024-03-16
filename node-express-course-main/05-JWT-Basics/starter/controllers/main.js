const express = require("express");
const CustomAPIError = require("../errors/custom-error")
const db = require("../db/model")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const {BadRequest} = require("../errors/index")

let token;

const login = async(req,res)=>{
    const {username , password} =  req.body ;
    if(!username || !password){
        throw new BadRequest("Please provide email or password")
    }else{
        const data = await db.create(req.body)    
        const db_id = data._id
        token = jwt.sign({db_id , username} , process.env.JWT_SECRET, {expiresIn : '30d'})
        const dict = {registered : data , token : token}
        res.status(200).json(dict)
        console.log(dict)
    }
}

const dashboard = async(req,res)=>{
    const otp = Math.floor(1000 + Math.random() * 9000);
    res.status(200).json({msg : `Hello, ${req.user.username}` , secret : `Here is your Authorized data , OTP = ${otp}`})
}
 
module.exports = {login , dashboard }