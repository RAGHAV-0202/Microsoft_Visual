import React from 'react' 
import {Power4} from "gsap"
import { motion } from "framer-motion"

  

function Cards() {

  const [HoveringCard , setHoveringCard] = React.useState(0)

  return (
    <div className='w-full py-20 '>
      <h1 className="text-[4vw] pb-20 font-light px-10 font-['Neue']">Featured projects</h1>
      <div className="w-full h-[1px] border-t-[1px]  border-zinc-700 tracking-tight"></div>
      <div className="cards flex flex-row flex-wrap w-full h-fit px-10 py-20 gap-7">

        <div onMouseEnter={()=>{setHoveringCard(1)}} onMouseLeave={()=>{setHoveringCard(0)}} className="cardContainer relative flex flex-col w-[48%] h-[75vh] " >
          <h1 className="absolute text-[#CDEA68] z-20 text-8xl font-['Founders'] w-100% text-nowrap top-[50%] left-full -translate-x-[50%] overflow-hidden ">
            {"CARDBOARD SPACESHIP".split('').map((item , index)=>
            <motion.span 
              initial={{y : "100%"}}  
              animate = {HoveringCard == 1 ? ({y : "0"}) : ({y : "100%"})}
              key={index} 
              transition={{ease : Power4.easeInOut , delay : index * 0.03 , duration : 1}}
              className="inline-block">
                {item}
            </motion.span>)
            }
          </h1>
          <div className={`card w-full h-full rounded-2xl overflow-hidden transition-all duration-[0.8s] ${HoveringCard == 1 ? ("scale-95") : " "}`}>
              <img className={`h-full w-full bg-cover rounded-2xl transition-all duration-[0.8s] ${HoveringCard == 1 ? ("scale-110") : " "}`} src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"></img>
          </div>
        </div>

        <div onMouseEnter={()=>{setHoveringCard(2)}} onMouseLeave={()=>{setHoveringCard(0)}} className="cardContainer relative flex flex-col w-[48%] h-[75vh] " >
          <h1 className="absolute text-[#CDEA68] z-20 text-8xl font-['Founders'] w-100% text-nowrap top-[50%] right-full translate-x-[50%] overflow-hidden">
            {"AH2 & Matt Horn".split('').map((item , index)=>
            <motion.span 
              initial={{y : "100%"}} 
              animate  = {HoveringCard == 2 ? ({y : "0"}) : ({y : "100%"})}
              key={index} 
              transition={{ease : Power4.easeInOut , delay : index * 0.03 , duration : 1}}
              className="inline-block">
                {item}
            </motion.span>)
            }
          </h1>
          <div className={`card w-full h-full rounded-2xl overflow-hidden transition-all duration-[0.8s] ${HoveringCard == 2 ? ("scale-95") : " "}`}>
              <img className={`h-full w-full bg-cover rounded-2xl transition-all duration-[0.8s] ${HoveringCard == 2 ? ("scale-110") : " "}`} src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"></img>
          </div>
        </div>

        <div onMouseEnter={()=>{setHoveringCard(3)}} onMouseLeave={()=>{setHoveringCard(0)}} className="cardContainer relative flex flex-col w-[48%] h-[75vh] " >
          <h1 className="absolute text-[#CDEA68] z-20 text-8xl font-['Founders'] w-100% text-nowrap top-[50%] left-full -translate-x-[50%] overflow-hidden ">
            {"TRAWA".split('').map((item , index)=>
            <motion.span 
              initial={{y : "100%"}}  
              animate = {HoveringCard == 3 ? ({y : "0"}) : ({y : "100%"})}
              key={index} 
              transition={{ease : Power4.easeInOut , delay : index * 0.03 , duration : 1}}
              className="inline-block">
                {item}
            </motion.span>)
            }
          </h1>
          <div className={`card w-full h-full rounded-2xl overflow-hidden transition-all duration-[0.8s] ${HoveringCard == 3 ? ("scale-95") : " "}`}>
              <img className={`h-full w-full bg-cover rounded-2xl transition-all duration-[0.8s] ${HoveringCard == 3 ? ("scale-110") : " "}`} src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"></img>
          </div>
        </div>


        <div onMouseEnter={()=>{setHoveringCard(4)}} onMouseLeave={()=>{setHoveringCard(0)}} className="cardContainer relative flex flex-col w-[48%] h-[75vh] " >
          <h1 className="absolute text-[#CDEA68] z-20 text-8xl font-['Founders'] w-100% text-nowrap top-[50%] right-full translate-x-[50%] overflow-hidden">
            {"PREMIUM BLEND".split('').map((item , index)=>
            <motion.span 
              initial={{y : "100%"}} 
              animate  = {HoveringCard == 4 ? ({y : "0"}) : ({y : "100%"})}
              key={index} 
              transition={{ease : Power4.easeInOut , delay : index * 0.03 , duration : 1}}
              className="inline-block">
                {item}
            </motion.span>)
            }
          </h1>
          <div className={`card w-full h-full rounded-2xl overflow-hidden transition-all duration-[0.8s] ${HoveringCard == 4 ? ("scale-95") : " "}`}>
              <img className={`h-full w-full bg-cover rounded-2xl transition-all duration-[0.8s]  ${HoveringCard == 4 ? ("scale-110") : " "}`} src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"></img>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default Cards