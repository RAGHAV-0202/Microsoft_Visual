// import React from "react";


const WorkShopName = (props)=>{
    return(
        <h1 className="workShopName">{props.name}<br></br>{ props.subheading || "Workshop"}</h1>
    )
}

const SpeakerDetails = (props) => {
    return (
        <div className="speakerDetails">
            <h2>SPEAKER</h2>
            {props.img.length > 1 && 
                <img src={props.img} alt="speaker img"></img>
            }
            {
                props.name.length > 0 &&
                <p className="speakerName LGBT">{props.name}</p>
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
            
            {
                props.SPname &&
                <>
                    <h2>SPECIAL SPEAKER</h2>
                    {props.SPimg?.length > 1 && 
                        <img src={props.SPimg} alt="special speaker img"></img>
                    }
                    {
                        props.SPname.length > 0 &&
                        <p className="speakerName LGBT">{props.SPname}</p>
                    }
                    {
                        props.SPDesignation?.length > 0 &&
                        <p className="speakerDesignation">{props.SPDesignation}</p>
                    }
                    {
                        props.SPCompany?.length > 0 &&
                        <p className="speakerCompany">@{props.SPCompany}</p>
                    }
                    {
                        props.SPDesignation2?.length > 0 &&
                        <p className="speakerDesignation">{props.SPDesignation2}</p>
                    }
                    {
                        props.SPCompany2?.length > 0 &&
                        <p className="speakerCompany">@{props.SPCompany2}</p>
                    }
                    <div className="thin_line"></div>
                    {
                        props.SPAbout?.length > 0 &&
                        <p className="speakerAbout">{props.SPAbout}</p>
                    }
                </>
            }
        </div>
    );
}

const WorkShopOverView = (props)=>{
    return(
        <div className="speakerDetails">
            <h2>Workshop Overview</h2>
            {
                props.overview.length > 0 &&
                <p className="speakerAbout" >{props.overview}</p>
            }

            <h2 className="agenda">Objectives</h2>
            <div>
                {props.agenda.map((item, index) => (
                <Agenda key={index} agenda={item} />
                ))}
            </div>

            <h2>Requirements</h2>
                <ul>
                    <li>Basic understanding of programming</li>
                    <li>Cybersecurity Fundamentals (understanding of data privacy, threat intelligence)</li>
                    {/* <li>Familiarity of  mobile application development concepts. </li> */}
                    {/* <li>Laptop with <span className="red"> 100gb </span> hard disk, virtualbox 7+..</li> */}
                    <li>Bring your <span className="red"> own laptop </span></li>
                </ul>

            <h2>Takeaways</h2>
            <p>{props.takeaway}</p>


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