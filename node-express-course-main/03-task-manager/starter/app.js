require('./db/connect')
const express = require('express');
const app = express()
const tasks = require('./routes/tasks')

// app creates routes , routes sends the data in the form of controller and controller has the main content

//middleware
app.use(express.json())

var visit_count = 0 ; 
app.get("/" ,(req,res)=>{
    res.send("<h1>Task Manager app</h1>")
    visit_count++ 
    console.log(`visited ${visit_count} times`);
})

app.use("/api/v1/tasks" , tasks)


//app.get('api/v1/tasks')          - get all the tasks
//app.post('api/v1/tasks')         - create a new task
//app.post('api/v1/tasks/:id')     - get single task
//app.patch('api/v1/tasks/:id')    - update task
//app.delete('api/v1/tasks/:id')   - delete task






app.listen(5000,()=>{
    console.log("Listening to the port 5000.");
})