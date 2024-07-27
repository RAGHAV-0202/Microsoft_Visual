import React from "react";

export default function Person(){
    const styles = {
        backgroundColor: 'lightgreen',
        border: '1px solid black' ,
        padding : "20px",
        margin : "5px"
    };

    return(
        <div style={styles} className="Person">
            <h1>Person</h1>
        </div>
    )
}