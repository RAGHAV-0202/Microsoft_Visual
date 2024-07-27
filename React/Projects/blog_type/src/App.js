import './App.css';
import React, { act } from 'react';
import data from './data';
import {nanoid} from "nanoid"

function SideBar(props){

  const class_name = props.active ? "active" : ""

  function Click() {
    props.passedFn(props.id)
  }
  
  return(
    <button onClick={Click} className={`SideBarBtn ${class_name}`}>
      {props.name}
    </button>
  )
}


function Content(props){

  return(
    <>
      <div className='intro'>
        <h1>{props.title}</h1>
        <p className='nameP'>{props.name}</p>
        <p className='experienceP'>{props.start} - {props.end}</p> 
      </div>
      <div className='desc'>



        {props.info.map((desc)=>(
          <Desc data={desc} />
        ))}

      </div>
    </>
  )
}

function Desc(props){
  return(
    <div className='textArea'>
      <p className='arrows' >>></p>
      <p className='desc_text'>
        {props.data}
      </p>   
    </div>
  )
}

function App() {

  
  
  const [info , setInfo] = React.useState(data[0])
  const [activeId, setActiveId] = React.useState(data[0].id);

  function handleClick(id){
    console.log("app func : " + id)
    const newInfo = data.find(item => item.id === id);
    setInfo(newInfo);
    setActiveId(id)
  }



  return (
    <div className="App">
      <div className='box'>

        <div className='sidebar'>

          {data.map((persons)=>(
            <SideBar
              name = {persons.name}
              id =  {persons.id}
              active = {persons.id === activeId}
              passedFn = {handleClick}

            />
          ))}

        </div>

        <div className='content'>
          <Content 
            name = {info.name}
            title = {info.title}
            start = {info.start}
            end = {info.end}
            id = {info.id}
            info = {info.info}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
