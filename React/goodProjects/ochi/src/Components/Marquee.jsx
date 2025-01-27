// import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div className='w-full  bg-[#004D43] py-20 rounded-t-4xl  '>
        <div className='text gap-[4vw] relative w-full flex flex-row items-center text-[25vw] leading-none font-["Founders"] uppercase border-y-2 overflow-hidden'>

            {["We are ochi" , "We are ochi" , "We are ochi" , "We are ochi"].map((item, index)=>{
                return(
                    <motion.h1 initial={{ x: "-100vw" }} animate={{ x: "-300vw" }} transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className="flex items-center w-fit whitespace-nowrap leading-none" key={index}>
                        {item}
                    </motion.h1>
                )
            })}

            
        </div>
    </div>
  )
}

export default Marquee