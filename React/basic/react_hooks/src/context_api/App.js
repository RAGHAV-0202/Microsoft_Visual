import React, { useContext }  from 'react';
import './App.css';
// import Setup from "./useReducer"
// import Container from './to_do';
import {nanoid} from "nanoid"

const data = [
  {
    name : "raghav",
    age : 19,
    id : nanoid()
  },{
    name : "hemant" , 
    age : 24,
    id : nanoid()
  },{
    name : "komal" ,
    age : 24,
    id : nanoid()
  },{
    name : "aas" ,
    age : 18,
    id : nanoid()
  },{
    name : "tan",
    age : 17,
    id : nanoid()
  },{
    name : "asd",
    age : 9,
    id : nanoid()
  }
]


const reducer = (state , action)=>{
  if(action.type === "remove"){
    console.log(action.payload)
    return state.filter(person => person.id !== action.payload);
  }
}

const PersonContext = React.createContext();
// two components => provider , consumer

const initialState = data ;


function Box(){
  const data = useContext(PersonContext).state
  console.log(data)
  const dispatch = useContext(PersonContext).dispatch
  return(
    <div className='box'>
      <h1>Invited Person's List</h1>
      <div className='box-list'>

        {data.map((person)=>(
          <Person
            key={person.key}
            name = {person.name}
            id = {person.id}
            dispatch = {dispatch}
          />
        ))}

      </div>
    </div>
  )
}
function Person(props){

  function handleRemove(){
    props.dispatch({type: "remove" , payload : props.id})
  }

  return (
    <div className='person'>
      <p>{props.name}</p>
      <button onClick={handleRemove} className='btn'>Remove</button>
    </div>
  )
}

function App() {

  const [state , dispatch] = React.useReducer(reducer , initialState)


  return (
    <PersonContext.Provider value={{state,dispatch}} >
      <div className="App">
        <Box state={state} dispatch={dispatch} />
      </div>
    </PersonContext.Provider>
  );
}

export default App;
