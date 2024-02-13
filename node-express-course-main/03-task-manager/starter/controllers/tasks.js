const Task = require('../models/task')
const express = require("express")
const contoller = express()

const getAllTasks = (req, res) => {
    Task.find({}, (err, tasks) => {
        res.json(tasks)
    });
};

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
      res.status(400).json("must provide name")
    }
    
}

const getTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.send("Update Task")
}

const deleteTask = (req, res) => {
    const taskId = req.params.id; // Assuming the task ID is passed as a route parameter

    Task.findByIdAndDelete(taskId, (err, deletedTask) => {
        if (err) {
            console.error("Error deleting task:", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else if (!deletedTask) {
            res.status(404).json({ error: "Task not found" });
        } else {
            res.json({ message: "Task deleted successfully", deletedTask });
        }
        
    });
};


module.exports = {
    getAllTasks , createTask , getTask , updateTask , deleteTask
}