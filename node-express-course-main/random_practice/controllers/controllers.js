const express = require("express");
const schema = require("../models/sign_up")
require("dotenv").config()
const jwt = require("jsonwebtoken");

let token ;


const login = async(req,res)=>{
    const data = req.body;
    console.log(data);
    const {username , password} = data ;
    if(!username || !password){
        console.log("Please Provide email or password.");
    }else{
        const user = await schema.create(data); 
        const db_id = data._id;
        token = jwt.sign({db_id , username} , process.env.JWT_SECRET , {expiresIn : '30d'});
        const dict = {registered : data , token : token} 
        res.status(200).json(dict);
    }
}
const dashboard = async(req,res)=>{
    const number = 1234;
    res.status(200).json({msg : `Hello guys , otp is 1234`});
}



module.exports = {login,dashboard} ;