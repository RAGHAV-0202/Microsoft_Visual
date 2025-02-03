// import React from 'react'


import Navbar from "../../Components/navbar.jsx"
import Footer from "../../Components/Footer.jsx"
import {WorkShopOverView , SpeakerDetails , WorkShopName} from "../../Components/forWorkShopPage.jsx"
import "../../CSS/workshop.css"



const Boot2Root = ()=>{
    return(
        <div className="page_div workShopPage">
            <Navbar/>
            <div className="centeredDiv">
                <div className="workshop_content">
                    <WorkShopName
                        name = "Boot2Root"
                        subheading = "Capture the Flag (CTF)"
                    />

                    <SpeakerDetails
                        name = 'Vikram Pawar'
                        img = ""
                        Designation = "President"
                        Company = "H4CKP13T" 
                        About = ""
                    />

                    <WorkShopOverView
                        overview = 'The Boot2Root CTF workshop is designed for individuals interested in learning and practicing cybersecurity concepts, focusing on penetration testing, ethical hacking, and digital forensics. The workshop is structured around a series of increasingly challenging security tasks where participants are tasked with solving puzzles, exploiting vulnerabilities, and capturing "flags" hidden in a virtual machine environment. The primary goal of the Boot2Root CTF is to guide participants through real-world hacking techniques while emphasizing ethical hacking practices.'

                        agenda = {
                            [
                                ["" , "Apply penetration testing concepts and methodologies." , "Develop problem-solving skills in cybersecurity through hands-on challenges." , "Practice ethical hacking in a controlled environment while adhering to legal guidelines."],
                            ]
                        }

                        takeaway = "By participating in the Boot2Root CTF, individuals will gain valuable, hands-on experience in penetration testing, ethical hacking, and system exploitation. As participants progress through the challenges, they will develop a deeper understanding of the various techniques used in real-world cyberattacks, such as information gathering, vulnerability exploitation, and privilege escalation. The CTF will also enhance participants' problem-solving skills, as they learn to think critically to identify and exploit system weaknesses. Additionally, they will become proficient in using essential cybersecurity tools, further refining their knowledge of attack strategies and defense mechanisms. Ultimately, Boot2Root provides a comprehensive learning experience, helping participants build a strong foundation in cybersecurity and ethical hacking."


                        
                    />

                        <div className='navbar_ticket'>
                            <a href='/ctf'>Click Here</a>
                        </div>


                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Boot2Root