const express = require("express");


const login = async(req,res)=>{
    // res.send("Fake Login/Register/Signup Route");
    const data = await req.body ;
    res.status(200).json({msg : `Login successful` , Data : data})
}

const dashboard = async(req,res)=>{
    const luckyNum = Math.floor(Math.random()*10000);
    res.status(200).json({msg : `Hello, Raghav Kapoor` , secret : `Here is your Authorized data , OTP = ${luckyNum}`})
}

module.exports = {login , dashboard }