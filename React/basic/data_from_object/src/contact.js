import React from "react";

export default function  Contact(props){
    console.log(props)
  return(
    <div className='contact'>
      <div className='top'>
        <img src={props.img} alt=""></img>
      </div>
      <div className='bottom'>
        <p className='name'>{props.name}</p>
        <p className='number'><i className="fa-solid fa-phone"></i>{props.phone}</p>
        {props.email && <p className='email'><i className="fa-solid fa-envelope"></i>{props.email}</p>}
      </div>
    </div>
  )
}