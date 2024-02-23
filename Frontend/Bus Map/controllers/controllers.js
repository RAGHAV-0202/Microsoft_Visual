const express = require("express")


const function1 = (req,res)=>{
    res.send("hello")
}

const function2= (req,res)=>{
    res.send("hello")
}

module.exports = {function1 , function2} ;