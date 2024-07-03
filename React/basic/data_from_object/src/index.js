import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './contact';

function Video(){
  return(
    <>
      <video width="100%" height="100%" autoPlay loop>
        <source src="https://cdn.dribbble.com/userupload/5999271/file/original-95b39c963d2d05ef93d4459cf213c8cb.mp4" type="video/mp4"/>
      </video>
    </>
  )
}

// function Footer(){
//   return(
//     <>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//       <path fill="#00cba9" fill-opacity="1" d="M0,160L40,154.7C80,149,160,139,240,122.7C320,107,400,85,480,74.7C560,64,640,64,720,106.7C800,149,880,235,960,245.3C1040,256,1120,192,1200,160C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
//     </svg>
//     </>
//   )
// }

function Cars(){
  return (
    <>
      <Contact
        img = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name='car 1'
        phone='+91 9801003000'
        email='cars@gmail.com'
      />
      <Contact
        img='https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D'
        name='car 2'
        phone='+91 9801003000'
        email='cars2s@gmail.com'
      />
      <Contact
        img="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
        name='car 3'
        phone='+91 9801003000'
        email='cars4@gmail.com'
      />
      <Contact
        img='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D'
        name='car 4'
        phone='+91 9801003000'
        email='cars4@gmail.com'
      />
      <Contact
        img='https://images.unsplash.com/photo-1542362567-b07e54358753?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D'
        name='car 5'
        phone='+91 9801003000'
        email='cars5@gmail.com'
      />
      <Contact
        img='https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnN8ZW58MHx8MHx8fDA%3D'
        name='car 6'
        phone='+91 9801003000'
        email='cars6@gmail.com'
      />
      <Contact
        img='https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnN8ZW58MHx8MHx8fDA%3D'
        name='car 7'
        phone='+91 9801003000'
        email='cars7@gmail.com'
      />    
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Cars/>
    <Video/>
    {/* <Footer/> */}
  </>
);
