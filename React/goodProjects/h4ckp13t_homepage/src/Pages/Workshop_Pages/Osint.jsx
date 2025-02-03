// import React from 'react'

// import react from "react"

import Navbar from "../../Components/navbar.jsx"
import Footer from "../../Components/Footer.jsx"
import {WorkShopOverView , SpeakerDetails , WorkShopName} from "../../Components/forWorkShopPage.jsx"
import "../../CSS/workshop.css"


const Osint = ()=>{
    return(
        <div className="page_div workShopPage">
            <Navbar/>
            <div className="centeredDiv">
                <div className="workshop_content">
                    <WorkShopName
                        name = "OSINT "
                        subheading = "Untold secret of internet"
                    />

                    <SpeakerDetails
                        name = "Vikram Pawar"
                        img = ""
                        Designation = "President"
                        Company = "H4CK13T CLUB" 
                        About = ""
                    />

                    <WorkShopOverView
                        overview = "Open Source Intelligence (OSINT) is the practice of collecting and analyzing publicly available information from various sources to gain insights, identify threats, and support decision-making. This OSINT Workshop aims to introduce participants to the fundamentals of OSINT, its applications, and ethical considerations while providing hands-on experience with OSINT tools and techniques."

                        agenda = {
                            [
                                ["", "Understand the fundamentals of OSINT and its significance." , "Explore various sources of OSINT, including social media, search engines, and public databases." , "Learn about OSINT methodologies, tools, and best practices." , "Identify real-world applications of OSINT in cybersecurity, investigations, business intelligence, and more." , "Practice ethical OSINT techniques while avoiding legal and ethical pitfalls."],
                            ]
                        }

                        takeaway = "By the end of this workshop, participants will have a strong understanding of OSINT methodologies and tools, enabling them to conduct intelligence gathering effectively and ethically. They will gain hands-on experience with real-world OSINT techniques, including social media intelligence, geospatial analysis, and data correlation. Additionally, attendees will develop the ability to verify and analyze publicly available information while adhering to legal and ethical guidelines. This workshop will equip them with practical skills applicable in cybersecurity, investigations, journalism, and business intelligence, empowering them to leverage OSINT for informed decision-making and enhanced investigative capabilities."

                    />




                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Osint