import './App.css';
import {nanoid} from "nanoid" ;
import React from 'react';

function Box(props){

  const [taskName , setTaskName] = React.useState("")
  
  function handleClick(){

    if(taskName === ""){
      alert("task name should not be empty")
    }else{
      const newItem = {
          name : taskName ,
          isCompleted : false ,
          id : nanoid()
      }
        props.setData((prev)=>[...prev , newItem])
        setTaskName("")
    }
  }

  function handleChange(event){
    setTaskName(event.target.value)
  }

  return(
    <div className='box'>

      <div className='heading'>
        <p>To-Do List</p>
      </div>
      <div className='input_area'>
        <input onChange={handleChange} value={taskName} type='text'></input>
        <button onClick={handleClick} >Add Item</button>
      </div>

      {props.data.map((item)=>(
        <Tasks
          name = {item.name}
          id = {item.id}
          isCompleted = {item.isCompleted}
          setData={props.setData}
        />
      ))}


    </div>
  )
}

function Tasks(props){

  function handleDelete(){
     props.setData((prev) => prev.filter((item) => item.id !== props.id));
  }

  function handleComplete(event){
    props.setData((prev)=>
      prev.map((item)=>
        item.id === props.id ? {...item , isCompleted : event.target.checked} : item 
      )
    )
  }


  return(
      <div className='tasks'>
        <span>
          <input onChange={handleComplete} type='checkbox'></input>
          {props.isCompleted ? <s>{props.name}</s> : props.name}          
        </span>
        <button onClick={handleDelete} className='delete_btn'>Delete</button>
      </div>
  )
}

function App() {

  const [data , setData] = React.useState(JSON.parse(sessionStorage.getItem("tasks")) || [])
  console.log(data)
  
  React.useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
        <Box data ={data} setData = {setData} />
    </div>
  );
}

export default App;
