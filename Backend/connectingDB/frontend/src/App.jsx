import React from 'react'
import './App.css'
import axios from 'axios'

function Joke(joke){
  return(
    <div style={{paddingBottom : "20px"}} key = {joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.joke}</p>
    </div>
  )
}

function App() {
  const [jokes , setJokes] = React.useState([])

  React.useEffect(()=>{
    axios.get("/api/v1/jokes")
      .then((res)=> setJokes(res.data))
      .catch((e)=>{
        console.log(e)
      })
  } , [])



  return ( 
    <>
      <h1>Hello </h1>
      <p>jokes : {jokes.length} </p>
      {
        jokes.map((joke,index)=>(
          <Joke
            id = {joke.id}
            title = {joke.title}
            joke = {joke.joke}
            key = {joke.key}
          />
        ))
      }
    </>
  )
}

export default App
