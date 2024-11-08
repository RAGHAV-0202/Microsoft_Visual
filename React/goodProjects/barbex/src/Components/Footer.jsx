import React from "react";


const Footer = () =>{
    return(
        <div className="Footer flex">

            <div className="CenteredContent ai jc">

                <div className="footer_col">
                    <img src="https://html.themeori.net/barbex/assets/img/logo.png" alt="logo"></img>
                    <p>Phasellus vitae purus ac urna consequat facilisis a vel leo.</p>
                </div>
                <div className="footer_col">
                    <h3>Services</h3>
                    <a href=".">Trend haircut</a>
                    <a href=".">Hair Washing</a>
                    <a href=".">Hair Color</a>
                    <a href=".">Facial trimming</a>
                </div>
                <div className="footer_col">
                    <h3>Contact us</h3>

                    <p> Call us : +(123) 456 789</p>
                </div>
                <div className="footer_col"></div>

            </div>
        </div>
    )
}

export default Footer;