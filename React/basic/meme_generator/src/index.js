import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import memeIMG from './memeimg.png'
import { doc } from 'firebase/firestore';
import memesData from './memesData';


function InputBOX(){
  function HandleClick(){
    const a = document.querySelector('.UpperTEXT')
    const b = document.querySelector('.BottomTEXT')

    function getMemeImage(){
      const memesArray = memesData.data.memes ;
      const random = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[random].url;
      memeIMG = url;
      console.log(url);
    }

    getMemeImage();
    
    
    document.querySelector('.UpperTXT').innerText = a.value ;
    document.querySelector('.LowerTXT').innerText = b.value ;
  }
  return(
    <div className='inputDIV'>
      <div className='text'>  
        <span className='one'>Top Text</span>
        <span className='two'>Bottom Text</span>
      </div>
      <div className='input'>
        <input type='text' className='UpperTEXT' placeholder='Shut up'></input>
        <input type='text' className='BottomTEXT' placeholder='And take my money'></input>
      </div>
      <div className='inputBTN'>
        <button onClick={HandleClick}>Get a new meme image 🖼️</button>
      </div>
    </div>
  )
}


function Output(){
  return(
    <div className='outputBox'>
      <img src={memeIMG}></img>
      <span className='UpperTXT'>Shut up</span>
      <span className='LowerTXT'>And take my money</span>
    </div>
    
  )
}

function Body(){
  return (
    <div className='Content'>
        <Header/>
        <InputBOX/>
        <Output/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Body/>
  </>
);
