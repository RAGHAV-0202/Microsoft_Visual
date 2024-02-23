const express = require("express");
const { route } = require("./routes/routes");
const app = express();
require("dotenv").config()
require("./routes/routes")
const port = process.env.PORT || 3000


app.use("/login" , route )

app.listen(port , ()=>{
    console.log(`Live on the port ${port}`)
})