import { io } from "socket.io-client";

const socket = io("https://virtual-room-backend.onrender.com/", {
    withCredentials: true,  // Ensure cookies are sent for authentication
});

export default socket;
