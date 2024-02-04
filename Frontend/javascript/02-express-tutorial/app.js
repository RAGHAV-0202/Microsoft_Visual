const http = require('http');
const {readFileSync} = require('fs');
        
        //to redirect
        // res.writeHead(302, {location : "https://www.google.com/"})
        // res.end()

// get all files 

const homePage = readFileSync('D:/Microsoft Visual/Frontend/Zomato/first.html')
const homePageCSS = readFileSync('D:/Microsoft Visual/Frontend/Zomato/first.css')
const homePageJS = readFileSync('D:/Microsoft Visual/Frontend/Zomato/first.js')
const font1 = readFileSync('D:/Microsoft Visual/Frontend/Zomato/bold.woff2')
const font2 = readFileSync('D:/Microsoft Visual/Frontend/Zomato/thin.woff2')
const font3 = readFileSync('D:/Microsoft Visual/Frontend/Zomato/lessbold.woff2')
const img = readFileSync('D:/Microsoft Visual/Frontend/Zomato/get zomato.png')

const server = http.createServer((req ,res)=>{
    const url = req.url;
            console.log(url)
    if(url == '/'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }else if (url == '/first.css'){
        res.writeHead(200,{'content-type' : 'text/css'})
        res.write(homePageCSS)
        res.end()    
    }else if (url == '/first.js'){
        res.writeHead(200,{'content-type' : 'text/javascript'})
        res.write(homePageJS)
        res.end()        
    }else if(url == '/bold.woff2'){
        res.writeHead(200, {'content-type' : 'text/woff2'})
        res.write(font1)
        res.end()
    }else if(url == '/thin.woff2'){
        res.writeHead(200, {'content-type' : 'text/woff2'})
        res.write(font2)
        res.end()
    }else if(url == '/lessbold.woff2'){
        res.writeHead(200, {'content-type' : 'text/woff2'})
        res.write(font3)
        res.end()
    }else if(url == '/get%20zomato.png'){
        res.writeHead(200,{'content-type' : 'text/png'})
        res.write(img)
        res.end()   
    } else{
        res.writeHead(404,{'content-type' : 'text/plain'})
        res.write(`404`)
        res.end() 
    }

})
server.listen(5000)