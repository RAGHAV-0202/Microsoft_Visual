import React from "react";
import "../CSS/Navbar.css"

const Navbar = ()=>{
    return(
        <div className="Navbar">
            <div className="NavBar_col1">
                <img src="https://html.themeori.net/barbex/assets/img/logo.png" alt="logo"></img>
            </div>
            <div className="NavBar_col2">
                <button>Home + </button>
                <button>Pages + </button>
                <button>Shop + </button>
                <button>Blog + </button>
                <button>Contact </button>
            </div>
            <div className="NavBar_col3">
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    )
}

export default Navbar