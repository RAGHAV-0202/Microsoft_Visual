// import React from "react";
import Landing from "../Components/landing.jsx"
import Navbar from "../Components/navbar.jsx"
import Marquee from "../Components/Marquee.jsx"
import About from "../Components/About.jsx"
import Eyes from "../Components/Eyes.jsx"
import Cards from "../Components/Cards.jsx"


const HomePage = ()=>{
    return(
        <div className="homepage w-full text-white bg-zinc-900 min-h-screen">  
            <Navbar/>
            <Landing/>
            <Marquee/>
            <About/>
            <Eyes/>
            <Cards/>
        </div>
    )
}

export default HomePage