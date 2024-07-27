import React from "react";
import {nanoid} from "nanoid"

function Container(props){
  const refContainer = React.useRef(null)
    function handleClick(){
        props.dispatch({type: "setTasks" , payload : refContainer.current.value});
    }
    function handleClear(){
        props.dispatch({type : "clear"})
    }

  return (
  <div className='container'>
    <div className='input'>
      <input ref={refContainer} type='text' placeholder='Enter Task'></input>
      <button onClick={handleClick} className='button'>Submit</button>
      <button onClick={handleClear} className='button'>Clear</button>
    </div>
    <div className='tasks'>

    {props.tasks.map((item)=> (
      <Task
        value = {item.task}
        id = {item.id} 
        dispatch = {props.dispatch}     
      />
    ))}
      

    </div>
  </div>
)}

function Task(props){

    function handleDelete(){
        props.dispatch({type : "delete" , payload : props.id})
    }
    function handleTest(){
        props.dispatch({type : "test"})
    }

  return(
    <div className='task'>
      <p>{props.value}</p>
      <p>ID : {props.id}</p>
      <button onClick={handleDelete} className="delete">Delete</button>
      <button onClick={handleTest} className="delete">TesT</button>
    </div>
  )
}


export default Container