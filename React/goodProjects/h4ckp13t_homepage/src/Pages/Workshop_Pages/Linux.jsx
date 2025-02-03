// import React from 'react'

// import react from "react"

import Navbar from "../../Components/navbar.jsx"
import Footer from "../../Components/Footer.jsx"
import {WorkShopOverView , SpeakerDetails , WorkShopName} from "../../Components/forWorkShopPage.jsx"
import "../../CSS/workshop.css"

const Linux = ()=>{
    return(
        <div className="page_div workShopPage">
            <Navbar/>
            <div className="centeredDiv">
                <div className="workshop_content">
                    <WorkShopName
                        name = "Linux 200"
                    />

                    <SpeakerDetails
                        name = "Aryan & Vaishnavi"
                        img = ""
                        Designation = "Core Team Members"
                        Company = "H4CKP13T" 
                        About = ""
                    />

                    <WorkShopOverView
                        overview = "Linux is a powerful, open-source operating system widely used in various fields including software development, system administration, cybersecurity, and networking. The Linux Workshop is designed to introduce participants to the fundamentals of Linux, from basic commands to advanced system administration and shell scripting. This hands-on workshop will help participants gain practical knowledge of Linux and its applications in real-world environments."

                        agenda = {
                            [
                                ["" , "Understand the core concepts of Linux" , "Learn basic and advanced Linux commands to manage files, processes, and users." , "Gain practical experience with Linux shell scripting" , "Understand Linux's role in networking and Security."],
                            ]
                        }

                        takeaway = "By the end of this workshop, participants will have gained a comprehensive understanding of Linux, from navigating the command line to performing system administration tasks. They will be proficient in using Linux for software development, network management, and system automation. Additionally, they will be equipped to troubleshoot common Linux issues, write efficient shell scripts, and securely manage Linux environments. These skills will empower them to confidently work in Linux-based environments, whether in software development, server management, or cybersecurity. 🚀"

                    />




                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Linux