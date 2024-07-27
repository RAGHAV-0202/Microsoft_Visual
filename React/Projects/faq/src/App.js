import './App.css';
import data from "./FAQ"
import React from 'react';

function FAQ(props){

  const [extended , setExtended] = React.useState(false)

  const styles = {
    height : extended ? "auto" : "68px"
  }
  const icon = extended ? "-" : "+"
  
  function handleClick(){
    setExtended(prev=>!prev)
  }
  const iconClass = extended ? "rotate" : "";

  return(
    <div style={styles} className='FAQ'>
      <div className='question'>
        <p>{props.question_from_data}</p>
        <button onClick={handleClick}  className={`btn ${iconClass}`}>{icon}</button>
        
        </div>
      <div className='answer'>{props.answer_from_data}</div>
    </div>
  )
}

function Content(){
  return(
    <div className='content'>
      <h1>Questions</h1>

      {data.map(que=>(
        <FAQ
          question_from_data = {que.question}
          answer_from_data = {que.answer}
        />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Content/>
    </div>
  );
}

export default App;
