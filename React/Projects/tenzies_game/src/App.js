import React from 'react';
import './App.css';
import {nanoid} from "nanoid"
import Confetti from "react-confetti"


function Text(){
  return(
    <div className='Text_box'>
      <h1>Tenzies</h1>
      <p>Roll untill all the dices are same. Click each die to freeze it at its current value between rolls.</p>
    </div>
  )
}

function Dice(props){  

  let styles;

  let color = props.isHeld ? "lightgreen" : "white"

  styles = {
    backgroundColor : color
  }


  return(
    <div 
        style={styles}
        onClick={props.passedIsClicked} 
        className='dice'
    >
      {props.value}
    </div>
  )
}
function Dices(props){
  const data = props.passedData
  // console.log(data)


  return(
    <div className='Dices_box'>
      {data.map((dice)=>(
        <Dice
          value = {dice.value}
          isHeld = {dice.isHeld}
          id = {dice.id}
          setData = {props.passedFn}
          passedIsClicked = {()=>props.passedFnDiceClick(dice.id)}
        />
      ))}
    </div>
  )
}
function Submit(props){
  return(
    <div className='submit_box'>
      <button className='Submit_btn' onClick={props.passedFunctionHandleClick} >Roll</button>
    </div>
  )
}

function MainBox(){

  const [data , setData] = React.useState(SetnewDice());

  // console.log(data)

  function SetnewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(generateNewDie())
      }
      return newDice
  }

  function generateNewDie(){
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }
var counter = 0 ; 
  function DiceClicked(id){
    console.log(id)
      setData(oldDice => oldDice.map(die=>{
      if(die.isHeld == true){
        counter ++ ;
        console.log(counter);
      }
        return die.id === id ? {...die , isHeld : !die.isHeld} : die
      }))
   }
 


  function handleClick(){
    counter  = 0 ; 
    setData(oldDice=> oldDice.map(die=>{
      return die.isHeld ? die : generateNewDie()
    }))
  }

  return(
    <div className='tenzies_box'>
      {counter == 9 && <Confetti/>}
      <Text/>
      <Dices passedFnDiceClick={DiceClicked} passedData={data} passedFn= {setData} />
      <Submit passedFunctionHandleClick={handleClick} />
    </div>
  )
}

function App() {



  return (
      <>
        <MainBox/>
      </>
  );
}

export default App;
