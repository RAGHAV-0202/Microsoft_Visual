import express from "express"
import dotenv from "dotenv"
const app = express()
dotenv.config()
import cors from "cors"

const port = process.env.PORT || 4040 

const jokes = [
    {
      "id": 1,
      "title": "Why don't scientists trust atoms?",
      "joke": "Because they make up everything!"
    },
    {
      "id": 2,
      "title": "How do you organize a space party?",
      "joke": "You planet."
    },
    {
      "id": 3,
      "title": "Why did the scarecrow win an award?",
      "joke": "Because he was outstanding in his field!"
    },
    {
      "id": 4,
      "title": "Why don't skeletons fight each other?",
      "joke": "They don't have the guts."
    },
    {
      "id": 5,
      "title": "What do you call fake spaghetti?",
      "joke": "An impasta!"
    }
  ]



app.get("/" , (req,res)=>{
    res.send("Homepage")
})

app.get("/api/v1/jokes" , (req,res)=>{
    res.json(jokes)
})

app.get("*", (req, res) => {
    res.send("<h1 style='padding : 50px; '>Error 404: Invalid Route</h1>");
});


app.listen(port , ()=>{
    console.log(`Listening on the port ${port}`);
})
