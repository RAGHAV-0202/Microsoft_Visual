import React from "react";
import "../CSS/login.css"
import bg3 from "../Images/login_bg3.png"
import {Link} from "react-router-dom"
import axios from "axios";
import { baseUrl } from "../base_url";
import { useNavigate } from "react-router-dom";

const RegisterPage = ()=>{
    const nameContainer = React.useRef()
    const emailContainer = React.useRef(null);
    const passwordContainer = React.useRef(null);

    const navigate = useNavigate()
    const [response , setResponse] = React.useState("")
    const [errorStyle , setStyle] = React.useState({display : "none"})

    async function handleSubmit(e){
        e.preventDefault()
        const name = nameContainer.current.value
        const email = emailContainer.current.value ;
        const password = passwordContainer.current.value

        try{
            setResponse("Please Wait...") 
            setStyle({display : "block" , color : "green"})

            const result = await axios.post(`${baseUrl}api/auth/register` , {name , email , password} , {withCredentials : true})

            console.log(result)

            setResponse("Registered and Logged In...") 

            navigate("/dashboard")
        }catch(error){
            setResponse(error?.message || "Error while registering") 
            setStyle({display : "block" , color : "red"})

            console.log("error while Registering in")
            console.log(error)
        }
    }



    return(
        <div className="login_page min100  flex row">
            <div className="left50 half50 flex center">
                <form onSubmit={handleSubmit} className="flex col login_form ">
                    <h1>Get Started Now !</h1>
                    <p className="smallFont">Register to access the App</p>

                    <span>
                        <p className="smallFont">Name</p>
                        <input ref={nameContainer} type="text" required placeholder="Enter your Name"></input>
                    </span>

                    <span>
                        <p className="smallFont">Email address</p>
                        <input ref={emailContainer} type="text" required placeholder="Enter your email"></input>
                    </span>
                    <span>
                        <p className="smallFont">Password</p>
                        <input ref={passwordContainer} type="password" required placeholder="Enter your password"></input>
                    </span>

                    <button className="flex center">Sign Up</button>

                    <div class="divider">
                        <span>or</span>
                    </div>

                    <span className="flex row center">
                        <p className="smallFont">Have an account ?</p>
                        <Link className="smallFont" to="/login">Login</Link>
                    </span>
                
                    <span style={errorStyle} className="textRed submit_result">{response}</span>

                </form>
            </div>

            <div className="left50 half50 flex img_area_login_page">
                <img src={bg3}  alt="hii"></img>         
            </div>

        </div>
    )
}
export default RegisterPage