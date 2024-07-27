import React, { act } from 'react';
import './App.css';
import Setup from "./useReducer"
import Container from './to_do';
import {nanoid} from "nanoid"

const reducer = (state , action) =>{
  if(action.type === "setTasks"){
    return [...state , {task : action.payload , id: nanoid()}];
  }else if (action.type === "clear"){
    return []
  }else if (action.type === "delete"){
    return state.filter(task => task.id !== action.payload)
  }else if (action.type === "test"){
    let temp = [] ;
    for(let i = 0 ; i < 10 ; i++){
      temp.push(i);
    }
    console.log(temp);
    return state;
  }else{
    throw new Error("No matching action")
  }
}
const defaultState = [] 
function App() {
  // const [tasks , setTasks] = React.useState({})
  const [state , dispatch] = React.useReducer(reducer , defaultState)

  return (
    <div className="App">
        <Setup/>
        <Container tasks={state} dispatch = {dispatch}  />
    </div>
  );
}

export default App;
