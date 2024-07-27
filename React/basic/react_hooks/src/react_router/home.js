import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const styles = {
        backgroundColor: 'lightblue',
        border: '1px solid black' ,
        padding : "20px",
        margin : "5px"
    };

    return (
        <div style={styles} className="home">
            <h1>Home</h1>
            <p>It is a home page</p>
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/people">people</Link>
            <br></br>
            <Link to="/person">person</Link>
            <br></br>
            <Link to="/home">home</Link>
        </div>
    );
}

export default Home;