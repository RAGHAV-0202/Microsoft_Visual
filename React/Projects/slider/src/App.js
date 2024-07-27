import React from 'react';
import './App.css';
import data from './slider_data';

function Employee(props){
  return(
    <div className={`employee ${props.direction > 0 ? 'slide-left' : props.direction < 0 ? 'slide-right' : ''}`}>
      <div className='img_div'>
        <img src={props.img}></img>
      </div>
      <h2>{props.name}</h2>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon" height="2em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
    </div>
  )
}
let i = 0;

function App() {
  const piche = "<"
  const aage = ">"
  const [direction, setDirection] = React.useState(0);
  const [people , setPeople] = React.useState(data[i])

  function forward(){
    setDirection(1);
    i++;
    i = i % data.length
    setPeople(data[i])
  }

  
  function backward() {
    setDirection(-1);
    i--; 
    if (i < 0) {
      i = data.length - 1;
    }
    setPeople(data[i]); 
  }

  return (
    <div className="App">
      <button onClick={backward} className='backward'>{piche}</button>
        <Employee
          name = {people.name}
          title = {people.title}
          img = {people.img}
          desc = {people.desc}
        />
      <button onClick={forward} className='forward'>{aage}</button>
    </div>
  );
}

export default App;
