// import React from "react";


const WorkShopName = (props)=>{
    return(
        <h1 className="workShopName">{props.name}<br></br>Workshop</h1>
    )
}

const SpeakerDetails = (props)=>{
    return(
        <div className="speakerDetails">
            <h2>SPEAKER</h2>
            {props.img.length > 1 && 
                <img src={props.img} alt="speaker img"></img>
            }
            {
                props.name.length > 0 &&
                <p className="speakerName LGBT" >{props.name}</p>
            }
            {
                props.Designation.length > 0 &&
                <p className="speakerDesignation">{props.Designation}</p>
            }
            {
                props.Company.length > 0 &&
                <p className="speakerCompany">@{props.Company}</p>
            }
                <div className="thin_line"></div>            
            {
                props.About.length > 0 &&
                <p className="speakerAbout">{props.About}</p>
            }
        </div>
    )
}

const WorkShopOverView = (props)=>{
    return(
        <div className="speakerDetails">
            <h2>Workshop Overview</h2>
            {
                props.overview.length > 0 &&
                <p className="speakerAbout" >{props.overview}</p>
            }

            <h2 className="agenda">Agenda</h2>
            <div>
                {props.agenda.map((item, index) => (
                <Agenda key={index} agenda={item} />
                ))}
            </div>

            <h2>Requirements</h2>
                <ul>
                    <li>Basic understanding of programming</li>
                    <li>Familiarity of  mobile application development concepts. </li>
                    <li>Laptop with <span className="red"> 100gb </span> hard disk, virtualbox 7+..</li>
                    <li>Bring your <span className="red"> own laptop </span></li>
                </ul>

            <h2>Takeaways</h2>
            <p>By the end of this workshop, participants will have a solid understanding of Windows security, be able to identify and exploit common vulnerabilities, and implement best practices to secure Windows applications. Participants will also gain hands-on experience through practical exercises and a CTF challenge, enhancing their skills and knowledge in Windows hacking.</p>


        </div>
    )
}

const Agenda = (props) => {
  const [heading, ...points] = props.agenda;
  return (
    <div className="agenda_particular">
      <h5 className="LGBT Agenda_Heading" >{heading}</h5>
      {points.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </div>
  );
};

export  {WorkShopOverView , SpeakerDetails , WorkShopName}