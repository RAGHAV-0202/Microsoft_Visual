import React from 'react';
import './App.css';
import values from "values.js"

function Modal(props){

  return(
    <div className='modal'>
      <img src="   https://cdn-icons-png.flaticon.com/512/5610/5610944.png " width="20" height="20" alt="" title="" class="img-small"></img>
      <p>Color Copied to clipboard!</p>
      <span className='border_btm'></span>
    </div>
  )
}

function Header(props){

  const [value , setValue] = React.useState("#f47351");

  function handleInput(event){
    if(event.target.value )
    setValue(event.target.value)
  }
  function handleSUBMIT(){
    props.setColorsFN(value)
  }

  React.useEffect(() => {
    handleSUBMIT(); 
  }, []);

  return(
    <div className='header'>
      <p>Color Generator</p>
      <div className='input_area'>
        <div style={{ backgroundColor: value }} className='display_color'></div>
        <input maxLength={7} onChange={handleInput} placeholder='#f15025' type='text'></input>
      </div>
      <button style={{ backgroundColor: value }} onClick={handleSUBMIT} className='submit_btn'>Submit</button>
    </div>
  )
}

function Colors(props){
  return(
    <div className='colors_div'>
     { props.array.map((item)=>(
        <Color 
          key = {item.hex}
          value = {item.hex}
          intensity = {item.weight}
          type = {item.type}
          setShow = {props.modalFn}
        />
      ))}
    </div>
  )
}



function Color(props){

  

  const styles = {
    backgroundColor : `#${props.value}`,
    color : props.type === "tint" ? "black" : "white"
  }
  function CopyToClipboard(){
    const tempInput = document.createElement('input');
    tempInput.value = `#${props.value}`;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    // alert('Copied the color code: #' + props.value);

    props.setShow(true)


      
  }

  return(
    <div onClick={CopyToClipboard} style={styles} className='color_div'>
      <p>{props.intensity}%</p>
      <p>#{props.value}</p>
    </div>
  )
}

function App() {

  const [colors , setColors] = React.useState([]);
  const [show , setShow] = React.useState(false);

  // console.log(show)

  if(show){
    setTimeout(()=>{
      setShow((prev)=>!prev)
    } , 3000)
  }
  
  function handleSetColors(value){
    try{
      const color = new values(`${value}`)
      const data = color.all(10);
      setColors(data)
    }catch(error){
      alert(error)
    }
  }


  return (
    <div className="App">
        <Header setColorsFN={handleSetColors} />
        <Colors modalFn={setShow} array = {colors}/>
       {show && <Modal/>}
    </div>
  );
}

export default App;
