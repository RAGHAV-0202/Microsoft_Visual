import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Bnb from './bnb';
import data from './data';

function Header(){
  return (
    <div className='header'>
      <div className='left'>
        <img src='https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg'></img>
      </div>
      <div className='middle'>
        <div className='options'>
          <button>Stays</button>
          <button>Experiences</button>
        </div>
      </div>
      <div className='right'>
        <div className='profile'>
          Login
        </div>
      </div>
    </div>
  )
}




function MainBody(){
  return (
    <div className='body'>
      {data.map((x) => (
        <Bnb
          src = {x.src}
          title = {x.title}
          status = {x.status} 
          host = {x.host}
        />
      )) }
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Header/>
      <MainBody/>
    </>
);
