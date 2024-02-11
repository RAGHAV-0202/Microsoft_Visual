const express = require("express")
const contoller = express()

const getAllTasks = (req,res)=>{
    res.send(" <style> body{padding : 0 ; margin : 0 ; box-sizing : border-box ; display : flex ; align-items : center; justify-content : center ; background-color : lightblue; } </style>    <body> <h1> Get all tasks </h1> </body> ")
}

const createTask = (req,res)=>{
    // res.send(" <style> body{padding : 0 ; margin : 0 ; box-sizing : border-box ; display : flex ; align-items : center; justify-content : center ; background-color : lightblue; } </style>    <body> <h1> Create Task </h1> </body> ")
    res.json(req.body)
}

const getTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.send("Update Task")
}

const deleteTask = (req,res)=>{ 
    res.send("Delete task")
}


module.exports = {
    getAllTasks , createTask , getTask , updateTask , deleteTask
}