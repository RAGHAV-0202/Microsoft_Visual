
import Navbar from "../../Components/navbar.jsx"
import Footer from "../../Components/Footer.jsx"
import {WorkShopOverView , SpeakerDetails , WorkShopName} from "../../Components/forWorkShopPage.jsx"
import "../../CSS/workshop.css"

const Forensic = ()=>{
    return(
        <div className="page_div workShopPage">
            <Navbar/>
            <div className="centeredDiv">
                <div className="workshop_content">
                    <WorkShopName
                        name = "Forensic 101"
                    />

                    <SpeakerDetails
                        name = "Anjali Kharab & Aayush"
                        img = ""
                        Designation = "Core Team Members"
                        Company = "H4CKP13T"
                        About = ""
                        
                        SPname = "Shashank Ingole"
                        SPDesignation = "Core Team Member "
                        SPCompany = "Besides Noida"

                        SPDesignation2 = "CSO "
                        SPCompany2 = "haryana police"
                        SPAbout = "Shashank Ingole is a Certified Ethical Hacker (CEH) and Computer Hacking Forensic Investigator (CHFI) with extensive expertise in cybersecurity. As a Core Team Member of BSides Noida, he actively contributes to the cybersecurity community, fostering awareness and collaboration. Additionally, he serves as the Chief Security Officer (CSO) for Haryana Police, where he plays a pivotal role in strengthening digital security frameworks and combating cyber threats."
                        
                    />

                    <WorkShopOverView
                        overview = "Digital forensics is a crucial field in cybersecurity, law enforcement, and investigations, focusing on the identification, collection, analysis, and preservation of digital evidence. This Forensic Workshop is designed to introduce participants to the fundamentals of forensic science, covering various branches such as digital forensics, cybercrime investigation, and evidence handling. The workshop will include theoretical knowledge, hands-on exercises, and real-world case studies to help participants develop practical forensic skills."

                        agenda = {
                            [
                                ["" , "Understand the fundamentals of forensic science and digital forensics." , "Learn about forensic tools and methodologies used in investigations." , "Explore the legal and ethical aspects of forensic investigations." , "Gain hands-on experience in collecting, analyzing, and preserving digital evidence." , "Understand cybercrime patterns and techniques used by attackers."],
                                // ["Setting Up the Environment" , "Point1" , "Point2" , "Point3"],
                                // ["Exploiting Common Vulnerabilities" , "Point1" , "Point2" , "Point3"],
                            ]
                        }

                        takeaway = "By the end of this workshop, participants will have a strong foundation in forensic science, particularly digital forensics, and will be equipped with practical skills for investigating cybercrimes and analyzing digital evidence. They will gain hands-on experience with forensic tools, learning how to extract, analyze, and preserve data while maintaining legal and ethical integrity. Additionally, they will understand cybercrime trends, forensic methodologies, and best practices in evidence handling. This knowledge will be valuable for careers in cybersecurity, law enforcement, and digital investigations, empowering participants to apply forensic techniques in real-world scenarios. 🚀"

                    />




                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Forensic