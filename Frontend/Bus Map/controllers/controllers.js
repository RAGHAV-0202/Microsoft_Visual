const express = require("express")


const function1 = (req,res)=>{
    res.status(200).json("hii")
}

const function2= (req,res)=>{
    res.send("hello")
}

module.exports = {function1 , function2} ;