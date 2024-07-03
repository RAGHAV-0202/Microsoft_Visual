import React from "react";
import image from './Logologo.png'

export default function Header(){
  return (
    <div className='header'>
      <span>
        <img src={image} ></img>
      </span>
      <span>
        React Course - Project 3
      </span>
    </div>
  )
}