// import React from 'react'

// import react from "react"

import Navbar from "../Components/navbar.jsx"
import Footer from "../Components/Footer.jsx"
import {WorkShopOverView , SpeakerDetails , WorkShopName} from "../Components/forWorkShopPage.jsx"
import "../CSS/workshop.css"

const Wireless = ()=>{
    return(
        <div className="page_div workShopPage">
            <Navbar/>
            <div className="centeredDiv">
                <div className="workshop_content">
                    <WorkShopName
                        name = "Wireless Pentesting  "
                        subheading = "(Hack 5G and 4G wifi network)"
                    />

                    <SpeakerDetails
                        name = "Vikram Pawar"
                        img = ""
                        Designation = "President"
                        Company = "H4CK13T CLUB" 
                        About = ""
                    />

                    <WorkShopOverView
                        overview = "Wireless Penetration Testing is a crucial skill in modern cybersecurity, focusing on the identification, analysis, and exploitation of vulnerabilities in wireless networks. As 5G and 4G networks become increasingly prevalent, understanding how to assess their security is essential. This challenge allows participants to simulate attacks on 5G and 4G WiFi networks, uncovering vulnerabilities and gaining insight into network security flaws. The goal is to test the security of wireless communication systems and learn ethical hacking techniques to secure these networks."

                        agenda = {
                            [
                                ["", "Discover and identify 5G and 4G networks, analyzing signals and identifying vulnerabilities." , "Learn techniques to break encryption algorithms used in 4G and 5G networks." , "Learn about OSINT methodologies, tools, and best practices." , "Use tools to exploit vulnerabilities in wireless communication protocols such as WEP, WPA, WPA2, and the emerging WPA3." , "Practice ethical OSINT techniques while avoiding legal and ethical pitfalls."],
                            ]
                        }

                        takeaway = "By participating in the Wireless Pentesting challenge, participants will gain practical, hands-on experience in assessing the security of 5G and 4G WiFi networks. They will learn how to discover network vulnerabilities, crack encryption, exploit weaknesses, and hijack sessions. Participants will also become familiar with industry-standard penetration testing tools and techniques. Beyond the technical knowledge, this challenge will help participants build the skills necessary to secure wireless networks against cyberattacks. Most importantly, they will learn the ethical principles of penetration testing and how to conduct these tests in a responsible and legal manner."

                    />




                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Wireless