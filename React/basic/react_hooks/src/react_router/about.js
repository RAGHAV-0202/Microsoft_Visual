import React from "react";

function About(){
    const styles = {
        backgroundColor: 'lightseagreen',
        border: '1px solid black' ,
        padding : "20px",
        margin : "5px"
    }; 
    return(
        <div style={styles} className="about">
            <h1>about</h1>
        </div>
    )
}

export default About;