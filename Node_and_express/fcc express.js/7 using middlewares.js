const app = require('express')();
const port = 5000
const logger = require('./6 middleware_')
const authorize = require('./authorize')
var morgan = require('morgan')
//req => middleware => res

// app.use([logger,authorize])
// app.use(express.static('folder'))
app.use(morgan('tiny'))


app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("about us")
})
app.get('/api/products',(req,res)=>{
    res.send("Products")
})
app.get('/api/items',[logger,authorize],(req,res)=>{
    res.send("Items") 
})

app.get('*',(req,res)=>{
    res.send("Error 404 Not Found")
})

app.listen(5000,()=>{
    console.log(`listening on the port ${port}`);
})