import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Image(){
  return (
    <div className='img_div'>
      <img className='image' src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt="image"></img>      
    </div>
  )
}
function Details(){
  return(
    <div className='details'>
        <h4>Name Surname</h4>
        <h5>Data Scientits</h5>
        <h6>Name.DS</h6>
    </div>
  )
}


function Socials(){
  return (
    <div className='socials'>
      <div className='social_div blue'>LOGO</div>
      <div className='social_div white'>LOGO</div>
    </div>
  )
}
function About(){
  return (
    <div className='about'>
    <h6>About</h6>
    <p>I am a person , this person might be or might not be imaginary , might be present might me absent. This person is a Person</p>
    </div>
  )
}

function Intro(){
  return (
    <div className='about'>
    <h6>Interest</h6>
    <p>I am a person , this person might be or might not be imaginary , might be present might me absent. This person is a Person</p>
    </div>
  )
}
function Footer(){
  return (
    <div className='footer'>
      <div className='icons'></div>
      <div className='icons'></div>
      <div className='icons'></div>
      <div className='icons'></div>
    </div>
  )
}

function App(){
  return(
    <div className='container'>
      <Image/>
      <Details/>
      <Socials/>
      <About/>
      <Intro/>
      <Footer/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  </>
);

