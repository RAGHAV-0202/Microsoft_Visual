const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data recieved `)
})

customEmitter.on('response2',()=>{
    console.log("Second response")
})

customEmitter.on("keyword", ()=>{ //on listens for callback
    //work
})

customEmitter.on("greet",(student , id)=>{
    console.log(`Hello ${student} #${id}`)
})

// on listen
// emit requests callback from on command

customEmitter.emit('response')
customEmitter.emit('response2')
customEmitter.emit('greet' , 'raghav' , 2823179)


// const http = require('http');
// const event = require('events')
// const server = http.createServer


// server.on('request' , (req,res)=>{
//     res.end("hii")
// })

// server.listen(5000,()=>{
//     console.log('Hosted')
// })