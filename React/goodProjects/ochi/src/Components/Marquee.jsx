// import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full  bg-[#004D43] py-20 rounded-t-4xl  '>
        <div className='text gap-[4vw]  relative w-full flex flex-row items-center text-[25vw] leading-none font-["Founders"] uppercase border-y-2 overflow-hidden'>

        <motion.h1 initial={{ x: "0" }} animate={{ x: "-300%" }} transition={{ ease: "linear", repeat: Infinity, duration: 20 }} className="flex items-center w-fit whitespace-nowrap leading-none">
            WE ARE OCHI
        </motion.h1>

        <motion.h1 initial={{ x: "0" }} animate={{ x: "-300%" }} transition={{ ease: "linear", repeat: Infinity, duration: 20 }} className="flex items-center w-fit whitespace-nowrap leading-none">
            WE ARE OCHI
        </motion.h1>

        <motion.h1 initial={{ x: "0" }} animate={{ x: "-300%" }} transition={{ ease: "linear", repeat: Infinity, duration: 20 }} className="flex items-center w-fit whitespace-nowrap leading-none">
            WE ARE OCHI
        </motion.h1>

        <motion.h1 initial={{ x: "0" }} animate={{ x: "-300%" }} transition={{ ease: "linear", repeat: Infinity, duration: 20 }} className="flex items-center w-fit whitespace-nowrap leading-none">
            WE ARE OCHI
        </motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee