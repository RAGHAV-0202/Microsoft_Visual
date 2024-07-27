import React from "react";

function Error(){

    const styles = {
        backgroundColor: 'lightcoral',
        border: '1px solid black' ,
        padding : "20px",
        margin : "5px"
    };

    return(
        <div style={styles} className="home">
            <h1>error</h1>
        </div>
    )
}

export default Error