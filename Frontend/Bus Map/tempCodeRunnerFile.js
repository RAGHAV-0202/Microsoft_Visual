const express = require("express");
const { route } = require("./routes/routes");
const path = require("path");
const app = express();
require("dotenv").config()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use("/login", route)

app.get("/", (req, res) => {
    res.send("<h1>Bus map</h1>")
})

app.listen(port, () => {
    console.log(`Live on the port ${port}`)
})
