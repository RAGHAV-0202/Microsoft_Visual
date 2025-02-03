// import React from 'react'
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="z-20 about w-full px-20 py-25 flex rounded-t-4xl bg-[#CDEA68] flex-col">
        <h4 className="text-[3.5vw] text-black font-['Neue']">
            Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline"> raise funds, sell products, explain complex ideas</span>, and <span className="underline">hire great people.</span> 
        </h4>
        <div className="w-full h-[1px] border-t-1 mt-20 border-[#a1b562]"></div>
        
        <div className="flex flex-row">
            <div className="w-1/2 py-10 ">
                <h3 className="text-[3vw] pb-5 text-black">Our approach : </h3>
                <button className="px-4.5 py-3 bg-black rounded-4xl flex items-center justify-center gap-7">
                    <p>Read More</p>
                    <GoDotFill />
                </button>
            </div>
            <div className="w-1/2 py-10 h-[70vh]">
                <img className="rounded-3xl w-full h-full" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""></img>
            </div>
        </div>
    </div>

    
  )
}

export default About