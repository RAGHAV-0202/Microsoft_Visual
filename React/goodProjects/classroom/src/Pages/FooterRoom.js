import React from "react";
import "../CSS/room.css"
import axios from "axios";
import { baseUrl } from "../base_url";
import { useNavigate, useParams } from "react-router-dom";


const TimeAndID = ()=>{

    const [currentDateTime, setCurrentDateTime] = React.useState([]);
    const {id} = useParams();

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
        <div className="room_options_div1 flex row center" >
            <p>{currentDateTime[0]}</p>
            <p>|</p>
            <p>{id}</p>
        </div>
    )
}

const Options = ({setMicOn ,micOn,  setShowBoard , setCameraOn , cameraOn})=>{

    const [micIcon , setMicIcon] = React.useState("fa-microphone-slash") 
    const [cameraIcon , setCameraIcon] = React.useState("fa-video-slash") 
    console.log(micOn)

    function handleMicToggle() {
        setMicOn((prev)=>(!prev))
        setMicIcon(micOn ? "fa-microphone-slash" : "fa-microphone");
    }

    function handleCameraToggle(){
        setCameraOn((prev)=>!prev)
        setCameraIcon(cameraOn ? "fa-video-slash" : "fa-video");
    }

    function handleBoard(){
        setShowBoard((prev)=>!prev)
    }

    const {id} = useParams()
    const navigate = useNavigate();

    async function handleQuit(){
        try{
            const res = await axios.post(`${baseUrl}api/class/classes/${id}/leave` , "",{withCredentials : true});
            console.log(res.data?.message)
            if(res.data?.success)navigate("/dashboard")

        }catch(err){
            console.log("Errow while quiting the room")
            console.log(err?.response?.data?.message)
        }
    }

    return(
        <div className="options room_options_div2 flex center">
            <button onClick={handleMicToggle} className="flex center"><i class={`fa-solid ${micIcon}`}></i></button>
            <button onClick={handleCameraToggle} className="flex center"><i class={`fa-solid ${cameraIcon} `}></i></button>
            <button onClick={handleQuit} className="flex center hang"><i class="fa-sharp fa-solid fa-phone-hangup"></i></button>
            <button onClick={handleBoard} className="flex center"><i class="fa-solid fa-chalkboard-user"></i></button>
        </div>
    )
}

const Features = ({setShowMembers , setShowChat , showBoard})=>{

    function handleMembers (){
        setShowMembers((prev)=>!prev)
        setShowChat(false)
    }
    function handleChat (){
        setShowMembers(false)
        setShowChat((prev)=>!prev)
    }

    React.useEffect(()=>{
        if(showBoard){
            setShowMembers(true)
        }else{
            setShowMembers(false)
        }
    } , [showBoard , setShowMembers])

    return(
        <div className="features room_options_div2 room_options_div3  flex center">
            <button onClick={handleMembers} className="flex center"><i class="fa-solid fa-users"></i></button>
            <button onClick={handleChat} className="flex center"><i class="fa-solid fa-messages"></i></button>
        </div>
    )
}


const FooterCumOptions = ({setShowMembers, setMicOn, micOn , setShowChat , setShowBoard , showBoard , cameraOn , setCameraOn}) => {
    return(
        <div className="Options_div flex row ">
            <TimeAndID/>
            <Options
                setMicOn={setMicOn}
                micOn={micOn}
                setShowBoard = {setShowBoard}
                cameraOn = {cameraOn}
                setCameraOn = {setCameraOn}
            />
            <Features
                setShowMembers={setShowMembers}
                setShowChat = {setShowChat}
                showBoard = {showBoard}
            />
        </div>
    )
}


export default FooterCumOptions