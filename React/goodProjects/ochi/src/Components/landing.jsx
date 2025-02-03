// import React from 'react'
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";


function Landing() {

  return (
    <div data-scroll data-scroll-speed="-0.3" className="w-full h-full min-h-[100vh] bg-zinc-900 border-t-1"> 
    
        <div className="textstructure mt-50 px-20">

            <div className="masker">
                <div className = "w-fit flex items-center">
                    <h1 className="leading-none uppercase text-[8vw] font-['Founders'] tracking-wide font-semibold">
                        We Create
                    </h1>
                </div>
            </div>
            <div className="masker">
                <div className = "w-fit flex items-center  flex-row">

                    <motion.div initial={{width : "5px"}} animate={{width : "9vw"}} transition={{ease : [0.76, 0, 0.24, 1] , delay : 0.5 , duration : 0.5}} className="w-[9vw] h-[5vw] overflow-hidden flex relative top-[0.6vw] rounded-lg mr-[1.5vw]">
                        <img className="w-full h-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="img"></img>
                    </motion.div>


                    <h1 className="leading-[6vw] uppercase text-[8vw] font-['Founders'] tracking-wide font-semibold">
                        Eye opening
                    </h1>
                </div>
            </div>
            <div className="masker">
                <div className = "w-fit flex items-center">
                    <h1 className="leading-none uppercase text-[8vw] font-['Founders'] tracking-wide font-semibold">
                        Presentations
                    </h1>
                </div>
            </div>        

        </div>

        <div className="mt-32 border-t-[2px] border-zinc-800 flex flex-row justify-between items-center py-5 px-20">

            {["For public and private companies" , "For the first pitch to IPO"].map((item , index)=>(
                <p key={index} className="text-md font-light text-white font-['Neue'] ">{item}</p>
            ))}

            <div className="flex flex-row items-center justify-center uppercase gap-2">
                <div className="px-4 py-2 border-1 border-zinc-700 rounded-full">Start the project</div>
                <div className="w-10 h-10  border-1 flex justify-center items-center border-zinc-700 rounded-full"><FaLocationArrow /></div>
                
            </div>

        </div>

    </div>
  )
}

export default Landing