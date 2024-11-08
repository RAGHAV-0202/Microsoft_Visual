import React from "react";
import "../CSS/room.css"
import axios from "axios";
import { baseUrl } from "../base_url";
import { useNavigate, useParams } from "react-router-dom";
import socket from "../socket";
import {toast} from "react-hot-toast"
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { useSyncDemo } from '@tldraw/sync'
import { usePeer } from "../Components/peer";

import FooterCumOptions from "./FooterRoom";
import { MemberBox , OnlyUserName } from "../Components/forRoom";
import ReactPlayer from "react-player";



const RoomMain = ({members, micOn, setMicOn, onMicToggle , myStream , cameraOn , setCameraOn , myId , remoteStream})=>{

    const [showMembers , setShowMembers] = React.useState(false);
    const [showChat , setShowChat] = React.useState(false);
    const [showBoard , setShowBoard] = React.useState(false)
    const {id} = useParams()
    

    function hidePeople(){
        setShowMembers(false)
    }
    function hideChat(){
        setShowChat(false)
    }

    let MemberStyling = showMembers ? {display : "flex"} : {display : "none"}
    let ChatStyling = showChat ?  {display : "flex"} : {display : "none"}

    const store = useSyncDemo({ roomId: id })

    return(
        <>
            <div className="Room flex row ">
                    <div className="RoomLeft p-3 flex  row">


                            {
                                members.map((member)=>(
                                    <MemberBox
                                    style = {showBoard ? {display : "none"} : {display : "flex"}}
                                    name = {member.name}  
                                    myStream = {myStream}
                                    isCurrentUser={member._id === myId}
                                    remoteStream = {remoteStream}
                                    
                                    />
                                ))
                            }     

                            {   showBoard &&
                                <div className="board_area flex">
                                    <Tldraw
                                        persistenceKey="board"
                                        store={store}
                                    />
                                </div>
                            }                        
                    </div>  

                    <div style={MemberStyling} className="RoomRight flex p-3 col ">

                        <div className="RoomRightMembersNameArea p-3 flex col">
                            <span className="flex row center">
                                <p>People</p>
                                <button onClick={hidePeople} ><i class="fa-solid fa-xmark"></i></button>
                            </span>

                            <p className="textGrey thin smallFont">IN MEETING</p>

                            <div className="flex col userNameAREA">

                                {
                                    members.map((member)=>(
                                        <OnlyUserName
                                        name = {member.name}  
                                        />
                                    ))
                                }                               
                            </div>
                        </div>
                    </div>
                    <div style={ChatStyling} className="RoomRight flex p-3 col ">
                        
                        <div className="RoomRightMembersNameArea p-3 flex col">
                            <span className="flex row center">
                                <p>In-Call Messages</p>
                                <button onClick={hideChat} ><i class="fa-solid fa-xmark"></i></button>
                            </span>

                            <p className="textGrey thin smallFont">Chat</p>

                            <div className="flex col userNameAREA">
                                
                            </div>
                        </div>
                    </div>
            </div>
            <FooterCumOptions
                showMembers={showMembers}
                setShowMembers={setShowMembers}
                setShowChat = {setShowChat}
                setMicOn={setMicOn}
                micOn={micOn}
                onMicToggle={onMicToggle}
                setShowBoard = {setShowBoard}
                showBoard = {showBoard}
                setCameraOn = {setCameraOn}
                cameraOn = {cameraOn}
            />
        </>
    )
}


const Room = () => {
    const [micOn, setMicOn] = React.useState(false);
    const [cameraOn , setCameraOn] = React.useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState("");
    const [members, setMembers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const {peer , createOffer , createAnswer , setRemoteAnswer , sendStream , remoteStream} = usePeer()

    const [myStream , setMyStream ] = React.useState(null)

    const [myId , setMyId] = React.useState(null)
    console.log("remote stream : ")
    console.log(remoteStream)
    

    // Check login and authenticate
    React.useEffect(() => {
        const checkLogin = async () => {
            try {
                setIsLoading(true);
                let res = await axios.get(`${baseUrl}api/auth/verifyLogin`, { 
                    withCredentials: true 
                });

                setMyId(res?.data?.data?._id)
                
                if (res?.data?.success === false) {
                    navigate("/login");
                    return;
                }

                setUser(res?.data?.data);

                res = await axios.get(`${baseUrl}api/class/classes/${id}/authenticate`, { 
                    withCredentials: true 
                });

                if (res?.data?.success) {
                    setLoggedIn(true);
                } else {
                    navigate("/dashboard");
                }
            } catch (err) {
                console.error("Error while checking login:", err);
                toast.error("Authentication failed");
                navigate("/dashboard");
            } finally {
                setIsLoading(false);
            }
        };
        checkLogin();
    }, [navigate, id]);

    // Handle room membership
    React.useEffect(() => {
        if (loggedIn && user) {
            // Safer socket connection check
            if (!socket) {
                console.error("Socket not initialized");
                return;
            }

            // Emit join room event
            socket.emit("joinRoom", id, { name: user });

            // User Joined Handler
            const handleUserJoined = async(newUser) => {
                console.log("User joined:", newUser);
                setMembers(prev => {
                    // More robust duplicate prevention
                    const isDuplicate = prev.some(
                        member => member.email === newUser.email
                    );
                    
                    return isDuplicate 
                        ? prev 
                        : [...prev, newUser];
                });

                const offer = await createOffer();
                socket.emit("call-user" , {newUser , offer})

            };

            // User Left Handler
            const handleUserLeft = (leftUser) => {
                console.log("User left:", leftUser);
                setMembers(prev => 
                    prev.filter(member => member.email !== leftUser.email)
                );
            };

            // Update Members Handler
            const handleUpdateMembers = (updatedMembers) => {
                // Ensure unique members by email
                const uniqueMembers = Array.from(
                    new Map(updatedMembers.map(member => [member.email, member])).values()
                );
                setMembers(uniqueMembers);
            };

            const handleIncommingCall = async(data)=>{
                const {from , offer} = data 
                console.log(`incoming call ${from}`)
                const ans = await createAnswer(offer);
                socket.emit("call-accepted" , {emailId : from , ans})
            }

            const handleCallAccepted = async(data)=>{
                const {ans} = data ;
                await setRemoteAnswer(ans);
                console.log("call got accepted")

            }

            // Attach event listeners
            socket.on("userJoined", handleUserJoined);
            socket.on("userLeft", handleUserLeft);
            socket.on("updateMembers", handleUpdateMembers);
            socket.on("incoming-call" , handleIncommingCall)
            socket.on("call-accepted" , handleCallAccepted)


            
            // Cleanup function
            return () => {
                try {
                    // Safely leave room
                    socket.emit("leaveRoom", id, { name: user });

                    // Remove event listeners
                    socket.off("userJoined", handleUserJoined);
                    socket.off("userLeft", handleUserLeft);
                    socket.off("updateMembers", handleUpdateMembers);
                    socket.off("incoming-call", handleIncommingCall)
                    socket.off("call-accepted" , handleCallAccepted)
                } catch (err) {
                    console.error("Room cleanup error:", err);
                }
            };
        }
    }, [loggedIn, id, user , createOffer , createAnswer , setRemoteAnswer]);

    // Optional: Add error boundary or global error handler
    React.useEffect(() => {
        const handleSocketError = (error) => {
            console.error("Socket connection error:", error);
            toast.error("Connection issues. Reconnecting...");
        };

        socket?.on("connect_error", handleSocketError);

        return () => {
            socket?.off("connect_error", handleSocketError);
        };
    }, []);

    React.useEffect(()=>{
        try{
            const getUserMediaStream = async()=>{
                let stream ;
                try{
                    stream = await navigator.mediaDevices.getUserMedia({audio : true , video : true})
                }catch(Err){
                    console.log("error while getting stream")
                    alert(Err)
                    alert("Enable Camera")
                }
                if(!cameraOn){
                    sendStream(null)
                    setMyStream(null)
                }else{
                    sendStream(stream)
                    setMyStream(stream)
                }
            }

            getUserMediaStream()
        }catch(err){
              console.log("Media access error:", err);
                if (err.name === "NotAllowedError") {
                    toast.error("Permission denied for camera/microphone access");
                } else if (err.name === "NotFoundError") {
                    toast.error("Camera/microphone device not found");
                }

                

                if (err.constraint === "video" || err.name === "NotAllowedError") {
                    setCameraOn(false);
                }
                if (err.constraint === "audio" || err.name === "NotAllowedError") {
                    setMicOn(false);
                }
                setMyStream(null);
                sendStream(null);
        }
    } , [sendStream , cameraOn])

    

    // Render logic
    return (
        <div className="RoomPage flex min100 max100 col">
            {isLoading && <div className="loader"></div>}
            
            {!isLoading && loggedIn && (

                <>
                    <RoomMain
                        micOn={micOn}
                        setMicOn={setMicOn}
                        cameraOn = {cameraOn}
                        setCameraOn = {setCameraOn}
                        members={members}
                        myStream = {myStream}
                        myId = {myId}
                        remoteStream = {remoteStream}
                    />               


                    {/* <ReactPlayer
                        url={remoteStream}
                        playing
                    /> */}
                </>



            )}
        </div>
    );
};

const Room_WO_media_Stream = () => {
    const [micOn, setMicOn] = React.useState(false);
    const [cameraOn , setCameraOn] = React.useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState("");
    const [members, setMembers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    // const {peer , createOffer , createAnswer , setRemoteAnswer , sendStream , remoteStream} = usePeer()

    const [myStream , setMyStream ] = React.useState(null)

    // Check login and authenticate
    React.useEffect(() => {
        const checkLogin = async () => {
            try {
                setIsLoading(true);
                let res = await axios.get(`${baseUrl}api/auth/verifyLogin`, { 
                    withCredentials: true 
                });
                
                if (res?.data?.success === false) {
                    navigate("/login");
                    return;
                }

                setUser(res?.data?.data);

                res = await axios.get(`${baseUrl}api/class/classes/${id}/authenticate`, { 
                    withCredentials: true 
                });

                if (res?.data?.success) {
                    setLoggedIn(true);
                } else {
                    navigate("/dashboard");
                }
            } catch (err) {
                console.error("Error while checking login:", err);
                toast.error("Authentication failed");
                navigate("/dashboard");
            } finally {
                setIsLoading(false);
            }
        };
        checkLogin();
    }, [navigate, id]);

    // Handle room membership
    React.useEffect(() => {
        if (loggedIn && user) {
            // Safer socket connection check
            if (!socket) {
                console.error("Socket not initialized");
                return;
            }

            // Emit join room event
            socket.emit("joinRoom", id, { name: user });

            // User Joined Handler
            const handleUserJoined = async(newUser) => {
                console.log("User joined:", newUser);
                setMembers(prev => {
                    // More robust duplicate prevention
                    const isDuplicate = prev.some(
                        member => member.email === newUser.email
                    );
                    
                    return isDuplicate 
                        ? prev 
                        : [...prev, newUser];
                });

            };

            // User Left Handler
            const handleUserLeft = (leftUser) => {
                console.log("User left:", leftUser);
                setMembers(prev => 
                    prev.filter(member => member.email !== leftUser.email)
                );
            };

            // Update Members Handler
            const handleUpdateMembers = (updatedMembers) => {
                // Ensure unique members by email
                const uniqueMembers = Array.from(
                    new Map(updatedMembers.map(member => [member.email, member])).values()
                );
                setMembers(uniqueMembers);
            };

 

            // Attach event listeners
            socket.on("userJoined", handleUserJoined);
            socket.on("userLeft", handleUserLeft);
            socket.on("updateMembers", handleUpdateMembers);



            
            // Cleanup function
            return () => {
                try {
                    // Safely leave room
                    socket.emit("leaveRoom", id, { name: user });

                    // Remove event listeners
                    socket.off("userJoined", handleUserJoined);
                    socket.off("userLeft", handleUserLeft);
                    socket.off("updateMembers", handleUpdateMembers);
                } catch (err) {
                    console.error("Room cleanup error:", err);
                }
            };
        }
    }, [loggedIn, id, user ]);

    // Optional: Add error boundary or global error handler
    React.useEffect(() => {
        const handleSocketError = (error) => {
            console.error("Socket connection error:", error);
            toast.error("Connection issues. Reconnecting...");
        };

        socket?.on("connect_error", handleSocketError);

        return () => {
            socket?.off("connect_error", handleSocketError);
        };
    }, []);

    

    // Render logic
    return (
        <div className="RoomPage flex min100 max100 col">
            {isLoading && <div className="loader"></div>}
            
            {!isLoading && loggedIn && (

                <>
                    <RoomMain
                        micOn={micOn}
                        setMicOn={setMicOn}
                        cameraOn = {cameraOn}
                        setCameraOn = {setCameraOn}
                        members={members}
                        myStream = {myStream}
                    />               
                </>
            )}
        </div>
    );
};


export default Room