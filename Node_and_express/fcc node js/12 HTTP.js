const http = require("http");

const server = http.createServer((req , res)=>{
    if(req.url == '/'){
        res.end('Welcome to our home page');
    }
    if(req.url == '/about'){
        res.end('This is our about page')
    }
    res.end(`
    <style>
    div{
        display: flex;
        align-items : center;
        justify-content : center;
        flex-direction : column;
    }
    </style>
    <div>
    <h1>Error 404 </h1>
    <h4>Couldn't find the address for which you are looking ... </h4>
    </div>
    `)
})

server.listen(5000)