import React from "react"
import Footer from "./footer";
import Navbar from "./navbar";
import "../css/profilePage.css"
import baseUrl from "../base_url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile({name}){
    return(
        <div className="userProfile">
            <div className="welcomeUser">
                <p>Hello <span className="userName">{name}</span></p>
                <p className="smallerText">Hope you are doing Fine !!!</p>
            </div>
        </div>
    )
}

function Offer(){
    return(
        <div className="offer">
            <div className="offer_img">
                <img src="https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/Hm_Member_and_Loyalty/seasonal-images-loyalty/6010/6010_110_3x2.jpg]&scale=size[150]&sink=format[jpeg],quality[80]" alt="offer_image"></img>
            </div>
            <div className="offer_details">
                <h5>10% off your entire purchase</h5>
                <p>Welcome Offer</p>
                <p>Valid Until : 14/12/2025</p>
            </div>
        </div>
    )
}

function SectionOne({userData}){
    return(
        <div className="SectionOne">
            <div className="UserProfileArea">
                <UserProfile
                    name = {userData.firstName}
                />
            </div>
            <div className="UserOffers">
                <span><h4>My Offers</h4></span>
                <span className="row offers_area">
                    <Offer/>
                    <Offer/>
                    <Offer/>

                </span>
            </div>
        </div>
    )
}
function SectionTwo({userData}){
    return(
        <div className="SectionTwo">
            <div className="SettingsOptions"></div>
            <div className="SettingsArea"></div>
        </div>
    )
}

function ProfilePage(){

    const Navigate = useNavigate()
        React.useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                await axios.get(`${baseUrl}api/auth/IsLoggedIn` , { withCredentials: true });
            } catch (err) {
                console.error("Error while checking login status:", err.response?.data || err.message);
                Navigate("/")
            }
        };
        checkLoginStatus();
    }, []);

    const [userData , setUserData] = React.useState({})

    React.useEffect(()=>{
        const getUserData = async()=>{
            try{

                const response = await axios.get(`${baseUrl}api/user/profile` , { withCredentials: true });

                // console.log(response?.data?.data); 
                setUserData(response?.data?.data)

            } catch (err) {
                console.error("Error while retreiving user data :", err.response?.data || err.message);
                Navigate("/")
            }
         }

         getUserData();

    } , [])

    console.log(userData)



    return (
        <div className="profilePageDiv">
            <Navbar/>
            <div className="profilePageCenterDiv">
                <SectionOne userData = {userData}/>
                <SectionTwo userData = {userData} />
            </div>
            <Footer/>
        </div>
    )
}

export default ProfilePage ;