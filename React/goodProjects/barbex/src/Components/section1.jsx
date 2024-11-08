import React from "react"
import Navbar from "./Navbar"

const Section1 = ()=>{
    return(
            <div className="HomePageSection Section1">
                <Navbar/>
                <div className="CenteredContent">
                    <div className="Section1_cotent">
                        <p className="gold">Welcome to Our Barbex</p>
                        <h1>Best Haircut Salon in the City</h1>
                        <p>Phasellus vitae purus ac urna consequat facilisis a vel leo.<br></br> Maecenas hendrerit lacinia mollis.</p>
                        <a href="."><p>Read More</p></a>
                    </div>
                    <img className="barber_img" src="https://html.themeori.net/barbex/assets/img/bg/banner-3.png" alt="barber"></img>
                </div>
            </div>
    )
}

export default Section1