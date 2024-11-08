import React from "react";
import "../CSS/dashboard.css"
import axios from "axios";
import { baseUrl } from "../base_url";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
    const navigate = useNavigate();

    async function HandleLogout(){
        try{
            await axios.post(`${baseUrl}api/auth/logout` , "" , {withCredentials : true});

            navigate("/login");
        }catch(error){
            console.log("error while logging out")
            console.log(error)
        }
    }

    const [currentDateTime, setCurrentDateTime] = React.useState([]);

    React.useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
            const formattedTime = now.toLocaleString('en-US', optionsTime);

            const optionsDate = { weekday: 'short', month: 'short', day: 'numeric' };
            const formattedDate = now.toLocaleString('en-US', optionsDate);
            setCurrentDateTime([formattedTime , formattedDate]);
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="navbar flex">
            <div className="logo flex row center">
                <i class="fa-brands fa-slack" style={{color: "#74c0fc"}}></i>
                <p className="textGrey bold" >Virtual</p>
                <p className="textGrey thin">Meet</p>
            </div>
           <div className="options_navbar flex row center">

                <p className="textGrey thin flex row center">
                    {currentDateTime[0]}
                    <i class="fa-sharp-duotone fa-solid fa-circle-dot"></i>
                    {currentDateTime[1]}
                </p>


                <button className="bold" onClick={HandleLogout}>Logout</button>
           </div>
        </div>
    )
}

const LeftHalfInfo = ()=>{
    return(
        <>
            <h1>Video Calls and Meetings for everyone</h1>
                <h4 className="textGrey">Connect, Collaborate, and celebrate from anywhere on Virtual Meet</h4>
        </>
    )
}

const NewRoom = ()=>{
    const navigate = useNavigate()

    const [create_room , setRoom] = React.useState(false);

    function handleCloseSetPassword(){
        setRoom(false)
    }

    function handleSetPassword(){
        setRoom(true)
    }
    
    const passwordContainer = React.useRef()

    async function CreateRoom(){
        const password = passwordContainer.current.value

        try{
            const res = await axios.post(`${baseUrl}api/class/classes` , {password : password} , {withCredentials  : true} )

            const ClassCode = res?.data?.data?.classCode ;

            navigate(`/room/${ClassCode}`)


        }catch(err){
            console.log("error while creating room")
            console.log()
            alert(err?.response?.data?.message)
        }
    }

    return(
        <>
            {       
            create_room &&     
             <div className="CreateNewRoom flex col">
                <div onClick={handleCloseSetPassword} className="CLoseCreateRoom">
                    <i onClick={handleCloseSetPassword} class="fa-light fa-circle-xmark" style={{color : "red"}}></i>
                </div>
                <p>Set Password</p>
                <input ref={passwordContainer} type="number" max={9999} maxLength={4} placeholder="4 digit Number"></input>
                <button onClick={CreateRoom}>Create Room</button>
            </div>
            }
            <button onClick={handleSetPassword} className="flex center row bgLBlue">
                <i class="fa-sharp fa-solid fa-video" style={{color: "white"}}></i>
                <p>New Room</p>
            </button>        
        </>

    )
}
const JoinRoom = ()=>{
    const navigate = useNavigate()

    const [enterPassword , setRoom] = React.useState(false);

    function handleCloseEnterPassword(){
        setRoom(false)
    }
    
    const RoomIDContainer = React.useRef(null)

    async function handleJoinRequest(){
        const roomID = RoomIDContainer.current.value ;
        try{
            const res = await axios.get(`${baseUrl}api/class/classes/${roomID}` , {withCredentials  : true} , {withCredentials  : true})
            
            if(res?.data?.success === true){
                setRoom(true);
            }
        }catch(err){
            alert(err?.response?.data?.message)
            console.log(err?.response?.data?.message)
        }
    }
    
    const passwordContainer = React.useRef()

    async function HandleJoin(){
        const roomID = RoomIDContainer.current.value ;
        const password = passwordContainer.current.value

        try{
            const res = await axios.post(`${baseUrl}api/class/classes/${roomID}/join` , {password : password} , {withCredentials  : true} )


            const classCode = (res?.data?.data?.classCode);
            navigate(`/room/${classCode}`)
        }catch(err){
            console.log("error while joining")
            console.log()
            alert(err?.response?.data?.message)
        }
    }

    return (

        <>
            {       
            enterPassword &&     
             <div className="CreateNewRoom flex col">
                <div onClick={handleCloseEnterPassword} className="CLoseCreateRoom">
                    <i onClick={handleCloseEnterPassword} class="fa-light fa-circle-xmark" style={{color : "red"}}></i>
                </div>
                <p>Enter Password</p>
                <input ref={passwordContainer} type="number" max={9999} maxLength={4} placeholder="4 digit Number"></input>
                <button onClick={HandleJoin}>Join Room</button>
            </div>
            }
            <div className="flex center row bgLBlue input">
                <i class="fa-regular fa-keyboard" style={{color: "grey"}}></i>
                <input ref={RoomIDContainer} placeholder="Enter the Code" type="text"></input>
                <button onClick={handleJoinRequest} >Join</button>
            </div>
        </>
    )
}

const LeftHalfButtons = ()=>{
    return(
        <>
            <div className="buttons_for_rooms flex row ">
                <NewRoom/>
                <JoinRoom/>
            </div>
        </>
    )
}

const LeftHalf = ()=>{
    return(
        <div className="half50 flex LeftHalfDashboard center">
            <div className="dashboard_options flex col">
                <LeftHalfInfo/>
                <LeftHalfButtons/>
            </div>
        </div>
    )
}

const RightHalf = ()=>{
    return(
       <div className="half50 flex center rightHalf col">
            <div className="rightHalf_info flex center col">
                <img src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg" alt="feature_img"></img>
                <h3>Your Meeting is Safe</h3>
                <p className="textGrey">No one can join a meeting unless admitted or invited by the host</p>
            </div>
       </div>
    )
}


const Dashboard = ()=>{
    const navigate = useNavigate();
    const [loggedIn , setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const checkLogin = async () => {
            try {
                const res = await axios.get(`${baseUrl}api/auth/verifyLogin`, { withCredentials: true });

                if (res?.data?.success === false) { 
                    navigate("/login");
                }
                setLoggedIn(true);
            } catch (err) {
                console.error("Error while checking if user is logged in", err);
                navigate("/login"); 
            }
        };

        checkLogin();  
    }, [navigate]); 


    return(
        <>

            <div className="dashboard flex min100 max100 col">

                <NavBar/>

                {!loggedIn && <div class="loader"></div>}

                { loggedIn && 
                <div className="dashboard_area flex row">
                    <LeftHalf/>
                    <RightHalf/>               
                </div>
                }   
            </div>      
        
        </>
    )
}
export default Dashboard