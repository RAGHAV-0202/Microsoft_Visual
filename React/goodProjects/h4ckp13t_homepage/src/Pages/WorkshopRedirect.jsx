// import React from 'react'
import Navbar from '../Components/navbar.jsx'
import Footer from "../Components/Footer.jsx"
import {motion} from "framer-motion"

import osint from "../resources/osint.jpg"
import btr from "../resources/boot2root.jpg"
import forensic from "../resources/forensic.jpg"
import linux from "../resources/linux.jpg"



function WorkshopRedirect() {
    
  return (
        <div className='page_div  workShopRedirectPage'>
            <Navbar/>
            <div style={{padding: "80px 20px 20px 20px" }} className='workshopRedirect max-w-[1440px] w-full h-auto flex justify-start flex-row flex-wrap px-30 gap-5'>

                    <a href='/osint' className='workshop backdrop-blur-8xl w-[30%] h-[500px] border-4 border-zinc-700 rounded-3xl overflow-hidden hover:scale-[1.05] transition  duration-400 ease-in-out'>
                        < div className='h-[70%] flex items-center justify-center text-4xl font-extrabold overflow-hidden'>
                            <motion.img className='cover rounded-t-2xl object-center w-full h-full' src={osint} alt='OSING'></motion.img>
                        </div>
                        <a href='/osint' className='h-[30%] flex items-center justify-center border-t-2 border-zinc-700 text-3xl'>OSINT Workshop</a>
                    </a>

                    <a href='/forensic' className='workshop backdrop-blur-8xl w-[30%] h-[500px] border-4 border-zinc-700 rounded-3xl overflow-hidden hover:scale-[1.05] transition duration-400 ease-in-out'>
                        < div className='h-[70%] flex items-center justify-center text-4xl font-extrabold overflow-hidden'>
                            <img className='cover rounded-t-2xl object-center w-full h-full' src={forensic} alt='OSING'></img>
                        </div>
                        <a href='/forensic' className='h-[30%] flex items-center justify-center border-t-2 border-zinc-700 text-3xl'>FORENSIC 101</a>
                    </a>

                    <a href='/linux' className='workshop backdrop-blur-8xl w-[30%] h-[500px] border-4 border-zinc-700 rounded-3xl overflow-hidden hover:scale-[1.05] transition  duration-400 ease-in-out'>
                        < div className='h-[70%] flex items-center justify-center text-4xl font-extrabold overflow-hidden'>
                            <img className='bg-cover object-cover  rounded-t-2xl object-center w-full h-full ' src={linux} alt='OSING'></img>
                        </div>
                        <a href='/linux' className='h-[30%] flex items-center justify-center border-t-2 border-zinc-700 text-3xl'>Linux 200</a>
                    </a>

                    <a href='/boot2root' className='workshop backdrop-blur-8xl w-[30%] h-[500px] border-4 border-zinc-700 rounded-3xl overflow-hidden hover:scale-[1.05] transition  duration-400 ease-in-out'>
                        < div className='h-[70%] flex items-center justify-center text-4xl font-extrabold overflow-hidden'>
                            <img className='cover rounded-t-2xl object-center w-full h-full' src={btr} alt='OSING'></img>
                        </div>
                        <a href='/boot2root' className='h-[30%] flex items-center justify-center border-t-2 border-zinc-700 text-3xl'>Boot2Root CTF</a>
                    </a>


            </div>
            <Footer/>
        </div>
  )
}

export default WorkshopRedirect