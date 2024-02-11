const mongoose = require("mongoose");


const connectionString = 'mongodb+srv://RaghavMONGO:RaghavMONGO@cluster0.ogmyrwz.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(connectionString, {
        useNewUrlParser : true ,
        useUnifiedTopology: true ,
        useCreateIndex : true , 
    })
    .then(() => console.log("Connected to the DataBase"))
    .catch((err) => console.log(err))