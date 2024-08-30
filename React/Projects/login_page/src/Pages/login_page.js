import React from "react"
import { gapi } from "gapi-script"
// import axios from "axios"
import "../css/admin.css"
import {Link} from "react-router-dom"
import { GoogleLogin } from "react-google-login"
const clientId = "413271787614-j8ch2do23jvq9paten0djndccaafqc2m.apps.googleusercontent.com"



function GoogleLoginButton(){

    const onSuccess = (res)=>{
        console.log("Login Success , Current User : " + res.profileObj )
    }
    const onFailure = (res)=>{
        console.log("Login Failder , res : " + res )
    }

    return(
        <div className="GoogleSignInbutton">
            {/* <p>or</p> */}
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                className="GoogleButton"
            />

        </div>
    )
}

function LoginPageComponent({setStep}){
    const [message_for_frontend , setMsg] = React.useState("")

    const emailContainer = React.useRef(null)
    const passContainer = React.useRef(null)
    

    const handleSubmit = async(e) =>{
        e.preventDefault() ;
        const email = (emailContainer.current.value)
        const password = (passContainer.current.value)

       try {
        alert("please wait, process may take 4-5 seconds")
            // const response = await axios.post("https://flashcards-gqs1.onrender.com/api/admin/login", { email, password }, { withCredentials: true })

            // if(response.status === 200){
            //     setStep((prev)=>prev+1)
            // }

            // setMsg(response.data.message)

            console.log({ email, password })

            console.log("Logged in")

            emailContainer.current.value = ""
            passContainer.current.value = ""

       } catch (error) {
            console.log(`error : ${error}`)
            setMsg( "Invalid Email or Password")
            alert(error)
            console.log(error.stack)
       }
    }

    return(
        <div className="login_page">
                <div className="left">
                    <div className="left_header heading">
                        <p>FlashCards <span> Admin</span></p>
                    </div>
                    <div className="left_content">
                        <div className="left_container">
                            <div className="bold heading">Log in</div>
                            <div className="login_form">
                                <span><p>E-Mail address</p></span>
                                <input ref={emailContainer} className="email" type="email" placeholder="admin" />
                                <span><p>Password</p></span>
                                <input  ref={passContainer} className="password" type="password" placeholder="admin" />
                                <p className="login_info">
                                    <p>{message_for_frontend}</p>
                                </p>
                                <button onClick={handleSubmit} className="sign_up_btn" >Login</button>
                                <span className="center" ><p className="black"></p>Not registered yet ?<Link class="login_link" to="/signup"> Sign Up</Link></span>
                                <GoogleLoginButton/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right_header">
                        <div className="button_div">
                            <label className="switch">
                                <input type="checkbox"></input>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        {/* <a href="#" className="btn-other btn">About</a> */}
                        <Link to="/signup" className="btn-login btn">Sign Up</Link>
                    </div>
                    <div className="right_content">
                        <div className="right_container"></div>
                    </div>
                </div>
        </div>
    )
}

function LoginPage(){

    React.useEffect(()=>{
         fetch("https://flashcards-gqs1.onrender.com").then(res=>res.json()).then(data=>console.log(data)).catch("error while loading server status")
    } , [])

    React.useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId : clientId,
                scope : ""
            })
        }
        gapi.load("client : auth2" , start)
    } , [])

    return(
        <div className="admin_page">
            <LoginPageComponent/>

        </div>
    )
}

export default LoginPage