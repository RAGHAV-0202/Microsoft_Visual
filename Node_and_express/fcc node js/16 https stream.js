const { createReadStream } = require('fs')
const http = require('http')
var fs = require('fs')

const text = fs.readFileSync('Frontend/javascript/node js/content/first.txt', 'utf8');

const server = http.createServer((req,res)=>{
    res.end(text)
})
server.listen(5000)