import React from "react";
import "../CSS/homepage.css"
import Section1 from "../Components/section1";
import Section2 from "../Components/section2";
import Section3 from "../Components/section3";
import Section4 from "../Components/section4";
import Section5 from "../Components/section5";
import Footer from "../Components/Footer";



const HomePage = ()=>{
    return(
        <div className="HomePage">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Footer/>
        </div>
    )
}

export default HomePage