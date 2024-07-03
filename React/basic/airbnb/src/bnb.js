import React from "react";

export default function Bnb(props){
    return (
        <div className="bnbDiv">
            <div className="imgDiv">
                <img src={props.src}></img>
                {props.status == "Sold Out" && <span className="out">SOLD OUT</span>}
                {props.status.includes("Coming") && <span className="out up">Coming Up</span>}
            </div>
            
            {props.title && <p>{props.title}</p>}
            {props.host && <h6>Hosted By {props.host}</h6>}
            {props.status && <p>{props.status}</p>}
        </div>
    );
}

