import './App.css';
import React from 'react';

function Input_Area(props){

  async function handleClick() {
    const url = `https://lorem-ipsum-by-api-ninjas.p.rapidapi.com/v1/loremipsum?paragraphs=${props.passedCount}&random=true`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'eec7327446msh8193a5df97bfcd9p15f070jsn8fb598c8bf9b',
        'x-rapidapi-host': 'lorem-ipsum-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.text);
      props.passedTextFn(result.text)
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event){
    let count = event.target.value ;
    count = count < 1 ? 1 : count ;
    props.passedFn(count)
  }

  return(
    <div className='input_area'>
      <p className='h1'>TIRED OF BORING LOREM IPSUM?</p>
      <div className='area_bottom'>
        <p>Paragraphs : </p>
        <input type='number' value={props.passedCount} onChange={handleChange}></input>
        <button onClick={handleClick} >Generate</button>
      </div>
    </div>
  )
}

function TextAreaa(props){
  // console.log(props.passedText)
  // console.log("Text area")
  return(
    <div className='textArea'>
      <p>{props.passedText}</p>
    </div>
  )
}

function Content(){

  const [count , setCount] = React.useState(1);
  const [text , setText] = React.useState("");



  return (
    <div className="content">
      <Input_Area passedTextFn ={setText} passedCount = {count}  passedFn = {setCount} />
      <TextAreaa  passedText = {text}  passedFn = {setText} />
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
