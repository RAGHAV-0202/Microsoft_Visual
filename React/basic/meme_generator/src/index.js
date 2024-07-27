import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import memeIMG from './memeimg.png'
import memesData from './memesData';

function InputBOX(){

  const [memeIMG , changeIMG] = React.useState("https://i.imgflip.com/1ur9b0.jpg");
  const [top , topText] = React.useState("Ooohh");
  const [bot , botText] = React.useState("Thats better !!!");    
  // handleClick()
  
  function changeIMGfunc(){
    getMemeImage()

    function getMemeImage(){

      changeIMG(()=>{
        let memesArray = memesData.data.memes ;
        let random = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[random].url;

        return url ;
      })}
  }

  function changeTEXT(){
    changer()
    botChanger()
      function changer(){
        topText(()=>{
          const res = document.querySelector(".UpperTEXT").value;
          return res;
      })}

      function botChanger(){
        botText(document.querySelector(".BottomTEXT").value);
      }
  }




  return(
    <>
    <div className='inputDIV'>
      <div className='text'>  
        <span className='one'>Top Text</span>
        <span className='two'>Bottom Text</span>
      </div>
      <div className='input'>
        <input type='text' className='UpperTEXT' placeholder='Ooohh'></input>
        <input type='text' className='BottomTEXT' placeholder='Thats better !!!'></input>
      </div>
      <div className='inputBTN'>
        <button onClick={changeTEXT}>Change text</button>
        <button onClick={changeIMGfunc}>Change Meme image 🖼️</button>
      </div>
    </div>

    <div className='outputBox'>
      <img src={memeIMG}></img>
      <span className='UpperTXT'>{top}</span>
      <span className='LowerTXT'>{bot}</span>
    </div>
    </>

  )
}


// function Output(){

//   return(

//   )
// }

function Body(){
  return (
    <div className='Content'>
        <Header/>
        <InputBOX/>
        {/* <Output/> */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Body/>
  </>
);



// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    
//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
//     function toggleFavorite() {
//         setContact(prevContact => {
//             return {
//                 ... prevContact, isFavorite: !prevContact.isFavorite
//             }
//         })
//     }


// function EventListener(){
//   stateFunction(stateProps =>{
//     return {
//       ... spread , something : !something
//     }
//   })
// }



// properties and functions through props


// <Star src = {starIcon} handleCLick= {toggleFavorite}/>

// function Star(props){
    
//     return(
//         <img 
//             src={`../images/${props.src}`} 
//             className="card--favorite"
//             onClick={props.handleCLick} 
//         />
//     )
// }










// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     function toggle(id) {
//         setSquares(prevSquares => {
//             return prevSquares.map((square) => {
//                 return square.id === id ? {...square, on: !square.on} : square
//             })
//         })
//     }

// if id matches , change data and reload the component
    
//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id} 
//             id={square.id}
//             on={square.on} 
//             toggle={toggle}
//         />
//     ))
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }







