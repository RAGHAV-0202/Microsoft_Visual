// import React from "react";
import Landing from "../Components/landing.jsx"
import Navbar from "../Components/navbar.jsx"
import Marquee from "../Components/Marquee.jsx"
import About from "../Components/About.jsx"
import Eyes from "../Components/Eyes.jsx"
import Cards from "../Components/Cards.jsx"
import ThreeCards from "../Components/ThreeCards.jsx"
import Eye2 from "../Components/eye2.jsx"
import Footer from "../Components/Footer.jsx"
import LocomotiveScroll from 'locomotive-scroll';

const HomePage = ()=>{

    const locomotiveScroll = new LocomotiveScroll();

    return(
        <div className="homepage w-full text-white bg-zinc-900 min-h-screen overflow-x-hidden">  
            <Navbar/>
            <Landing/>
            <Marquee/>
            <About/>
            <Eyes/>
            <Cards/>
            <ThreeCards/>
            <Eye2/>
            <Footer/>
        </div>
    )
}

export default HomePage