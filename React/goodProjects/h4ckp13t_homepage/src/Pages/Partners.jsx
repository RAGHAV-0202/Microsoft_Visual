// import React from 'react'

import Footer from "../Components/Footer"
import Navbar from "../Components/navbar"

import partner0 from "../resources/Partners/0x0.jpg";
import partner1 from "../resources/Partners/BsidesNoida.jpeg";
import partner2 from "../resources/Partners/Cybergenix.png";
import partner3 from "../resources/Partners/cybernet.svg";
import partner4 from "../resources/Partners/cyndia.png";
import partner5 from "../resources/Partners/defcon.png";
import partner6 from "../resources/Partners/ncsrc.jpeg";
import partner7 from "../resources/Partners/NEXTGEN.png";
import partner8 from "../resources/Partners/Offsec.png";
import partner9 from "../resources/Partners/OwaspKalyan.jpeg";
import partner10 from "../resources/Partners/owaspNoida.png";
import partner11 from "../resources/Partners/owaspThapar.png";
import partner12 from "../resources/Partners/xyz.png"  ;
import partner13 from "../resources/Partners/AS.png"  ;
import partner14 from "../resources/Partners/GMS.png"  ;
import partner15 from "../resources/Partners/unstop.jpg"  ;

import "../CSS/partners.css"


const Partner = ({src}) =>{
    // console.log(src)
    return(
        <div style={{padding : "20px"}} className="partner w-[200px] border-[4px] rounded-[10px]" >
            <img className="w-full h-full rounded-2xl " src={src} alt="Partner-Logo"></img>
        </div>
    )
}

function PartnersDIv({title , src}){
    return(
        <div style={{padding : "50px 0"}} className="CP w-full min-h-[120px]  flex flex-row">
            <div style={{padding : "50px 10px"}} className="title_partner w-[30%] flex ">
                <h1 className="text-md flex uppercase font-bold ">{title}</h1>
            </div>
            <div className="partners w-[70%]  flex flex-row flex-wrap max-w-[860px] justify-start gap-x-[20px] gap-y-[20px]">

                {
                    src.map((item , index)=>(
                        <Partner
                            key = {index}
                            src = {item}
                        />
                    ))
                }

            </div>

        </div>
    )
}

function Partners() {
  return (
    <div className="partners page_div">
        <Navbar/>
        <div style={{padding : "60px 20px"}} className="centeredDiv flex gap-[30px]  ">
            <h1 className="text-[2.5vw] font-bold">Sponsors & Community Partners</h1>
            <p className="text-[1.2vw] font-bold " >Unlock the treasures and meet our trusted crew!</p>

            <div className="line h-[1px] block border-t-1 border-zinc-100"></div>
            

            <PartnersDIv
                title = "Kind Sponsor"
                const src = {[partner12 , partner4]}
            />

            <PartnersDIv
                title = "CTF Prize Sponsor"
                const src = {[partner13 , partner8]}
            />

            <PartnersDIv
                title = "Certificate Sponsor"
                const src = {[partner14]}
            />

            <PartnersDIv
                title = "Platform Partner"
                const src = {[partner15]}
            />

            <PartnersDIv
                title = "Community Partners"
                const src = {[partner0,partner1,partner2,partner3,partner4,partner5,partner6,partner7,partner8,partner9,partner10, partner11]}
            />

        </div>
        <Footer/>
    </div>
  )
}

export default Partners