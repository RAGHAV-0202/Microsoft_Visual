// import react from "react"
import Navbar from "../Components/navbar.jsx"
import Footer from "../Components/Footer.jsx"
import {WorkShopOverView , SpeakerDetails , WorkShopName} from "../Components/forWorkShopPage.jsx"
import "../CSS/workshop.css"



const WorkshopPage = ()=>{
    return(
        <div className="page_div workShopPage">
            <Navbar/>
            <div className="centeredDiv">
                <div className="workshop_content">
                    <WorkShopName
                        name = "Windows Hacking"
                    />

                    <SpeakerDetails
                        name = "Raghav Kapoor"
                        img = ""
                        Designation = "CEO"
                        Company = "His Home" 
                        About = "Raghav Kapoor is a distinguished Mobile Application Security Penetration Tester specializing in web applications and APIs. Her dedication to advancing mobile application security and bug bounty programs has made her a driving force in the cybersecurity community. As a core team member of the Seasides Conference and a volunteer at c0c0n23 Conference, Sunita is highly respected for her expertise. She is also a sought-after speaker at NULL/OWASP and THM meetups and serves as the chapter lead for the NULL Bangalore meetup, where she shares her extensive knowledge and insights."
                    />

                    <WorkShopOverView
                        overview = "Welcome to the Windows Hacking Workshop at H4CKP13T! This hands-on session is designed for security enthusiasts, penetration testers, and developers who want to dive deep into the world of Windows security. Over the course of the workshop, participants will learn about various vulnerabilities in Windows applications, exploit techniques, and best practices for securing Windows apps."

                        agenda = {
                            [
                                ["Introduction to Security" , "Point1" , "Point2" , "Point3"],
                                ["Setting Up the Environment" , "Point1" , "Point2" , "Point3"],
                                ["Exploiting Common Vulnerabilities" , "Point1" , "Point2" , "Point3"],
                            ]
                        }

                    />




                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default WorkshopPage