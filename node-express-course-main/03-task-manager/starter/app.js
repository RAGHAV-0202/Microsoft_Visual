const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
require('dotenv').config()


// app creates routes , routes sends the data in the form of controller and controller has the main content
//middleware
app.use(express.json())
app.use(express.static('./public'))

app.get("/" ,(req,res)=>{
    res.send("<h1>Task Manager app</h1>")
})

app.use("/api/v1/tasks" , tasks)

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>{console.log("Listening on the port 5000.")})
    }catch(error){
        console.log(error)
    }
}

start()








//app.get('api/v1/tasks')          - get all the tasks
//app.post('api/v1/tasks')         - create a new task
//app.post('api/v1/tasks/:id')     - get single task
//app.patch('api/v1/tasks/:id')    - update task
//app.delete('api/v1/tasks/:id')   - delete task
