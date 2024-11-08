import {React , useEffect , useState} from "react"
import { io } from "socket.io-client";

const WebSocketContext = React.createContext();
export const WebSocketProvider = ({ children }) => {
    const [socket] = useState(io("/classroom"));
    const [members, setMembers] = useState([]);

    useEffect(() => {
        socket.on("updateMembers", setMembers);
        return () => socket.off("updateMembers");
    }, [socket]);

    const joinRoom = (roomId, user) => socket.emit("joinRoom", roomId, user);
    const leaveRoom = (roomId, user) => socket.emit("leaveRoom", roomId, user);

    return (
        <WebSocketContext.Provider value={{ socket, members, joinRoom, leaveRoom }}>
            {children}
        </WebSocketContext.Provider>
    );
};
