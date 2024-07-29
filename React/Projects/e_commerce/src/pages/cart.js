import React from "react";
import '../index.css';
import Navbar from "./navbar";
import Footer from "./footer";


function CartPage(){
    return(
        <div className="home_page">
            <Navbar/>
            <p>Cart</p>
            <Footer/>
        </div>
    )
}

export default CartPage