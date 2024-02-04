const express = require('express');
const app = express()
let {people} = require('D:/Microsoft Visual/Node_and_express/02-express-tutorial/data.js')

app.use(express.static('D:/Microsoft Visual/Node_and_express/02-express-tutorial/methods-public'))
//parse form data
app.use(express.urlencoded({extended : false}))

app.get('/api/people' , (req,res)=>{
    res.status(200).json({success : true , data : people})
})
app.post('/api/people' , (req,res)=>{
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success : false , msg : "pleasr provide value"})
    }
    res.status(201).json({success : true , person : name})
})

app.post('/login' , (req,res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }else{
        res.status(401).send("please provide credentials")
    }   
})

app.put('api/people/:id' , (req,res)=>{
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person)=> person.id ===Number(id));

 if(!name) {
        return res
        .status(404)
        .json({success : false , msg : "person not found"})
    }
    res.status(201).json({success : true , person : name})
})



app.get('*' , (req,res)=>{
    res.send("Not found error 404")
})

app.listen(5000,(req,res)=>{
    console.log("listening on the port 5000.")
})