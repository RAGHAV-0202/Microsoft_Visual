import React from "react";
import ReactDOM from "react-dom";
import reactIMG from "./images/images (1).png"
import "./app.css"

// import Head from "./header";

function Head(){
    return (
        <nav>
            <img src={reactIMG} width="60px"/>
            <ul>
                <li>
                    <a href = "">About</a>
                </li>
                <li>
                    <a href = "">Contact Us</a>
                </li>
                <li>
                    <a href = "">Login</a> 
                </li>
            </ul>
        </nav>
    )
}


function Content(){
    return (
        <div className="content">
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first Released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Is used by Millions of developers</li>
            </ul>
        </div>
    )
}
function Footer(){
    return (
        <footer>
            <p>Footer Footer. </p>
        </footer>
    )
}
function Temp(){
    return (
        <>
            <Head/>
            <Content/>
            <Footer/>
        </>
    )
}

ReactDOM.createRoot(document.querySelector(".root")).render(<Temp/>);
// ReactDOM.createRoot(do)
// ReactDOM.render(<Temp/> , document.querySelector(".root"))