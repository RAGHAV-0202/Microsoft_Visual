import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import asyncHandler from "./utils/asyncHandler.js";
import authRouter from "./routes/auth.routes.js";
import classesRouter from "./routes/classes.routes.js";
import mongoose from "mongoose";
import ApiResponse from "./utils/apiResponse.js";
import { Server } from "socket.io"; 
import http from "http"; 
import apiError from "./utils/apiError.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:3000", "http://172.20.10.2:3000", "http://192.168.29.76:3000" , "https://myvirtualroom.netlify.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    credentials: true,
    sameSite: 'None'
};

app.use(cors(corsOptions));

async function getStats() {
    const startTime = Date.now();
    const result = await mongoose.connection.db.command({ ping: 1 });
    const endTime = Date.now();
    const latency = endTime - startTime;

    const isMongoConnected = mongoose.connection.readyState === 1;
    const statusInfo = {
        status: "OK",
        mongoDB: isMongoConnected ? "Connected" : "Disconnected",
        latency: latency + "ms",
        timestamp: new Date(),
    };
    return statusInfo;
}

app.get(/\/.*\/status$/, asyncHandler(async (req, res) => {
    const statusInfo = await getStats();
    res.status(200).json(statusInfo);
}));

app.get("/", async (req, res) => {
    const statusInfo = await getStats();
    res.status(200).json(new ApiResponse(200, statusInfo, "Server is live"));
});

app.use("/api/auth", authRouter);
app.use("/api/class", classesRouter);

app.get("*", (req, res) => {
    res.status(404).send(new apiError(404, { data: "Not Found" }, "Couldn't find the resource you were looking for"));
});

// Create HTTP server and attach Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
    cors: corsOptions
});

const rooms = new Map()
const socketToEmail = new Map()
const emailToSocket = new Map()

io.on("connection", (socket) => {
    socket.on("joinRoom", (roomId, userInfo) => {
        try {
            // Validate input
            if (!roomId || !userInfo || !userInfo.name) {
                return socket.emit("error", "Invalid room or user information");
            }

            const user = {
                ...userInfo.name,
                socketId: socket.id,
                joinedAt: Date.now()
            };

            // Atomic room and user management
            const roomInstance = rooms.get(roomId) || {
                members: [],
                createdAt: Date.now()
            };

            // Prevent duplicate users more efficiently
            const existingUserIndex = roomInstance.members.findIndex(
                member => member.email === user.email
            );

            if (existingUserIndex === -1) {
                roomInstance.members.push(user);
            } else {
                // Update existing user's socket connection
                roomInstance.members[existingUserIndex] = {
                    ...roomInstance.members[existingUserIndex],
                    socketId: socket.id
                };
            }

            // Store room data
            rooms.set(roomId, roomInstance);
            socketToEmail.set(socket.id, user.email)
            emailToSocket.set(user.email , socket.id)

            // Socket room management
            socket.join(roomId);
            socket.roomId = roomId;
            socket.user = user;

            // Broadcast events
            io.to(roomId).emit("userJoined", user);
            io.to(roomId).emit("updateMembers", roomInstance.members);

            // Optional: Log with more context
            console.log(`User ${user.name} joined room ${roomId}. Total members: ${roomInstance.members.length}`);
        } catch (error) {
            console.error("Join room error:", error);
            socket.emit("error", "Failed to join room");
        }
    });

    socket.on("leaveRoom", (roomId, userInfo) => {
        try {
            const user = userInfo.name;
            const roomInstance = rooms.get(roomId);

            if (roomInstance) {
                // Remove user from room members
                roomInstance.members = roomInstance.members.filter(
                    member => member.email !== user.email
                );

                // Clean up room if empty
                if (roomInstance.members.length === 0) {
                    rooms.delete(roomId);
                } else {
                    rooms.set(roomId, roomInstance);
                }

                // Socket management
                socket.leave(roomId);
                 socketToEmail.delete(socket.id)
                 emailToSocket.delete(socket.id)

                // Broadcast events
                io.to(roomId).emit("userLeft", user);
                io.to(roomId).emit("updateMembers", roomInstance.members);

                console.log(`User ${user.name} left room ${roomId}`);
            }
        } catch (error) {
            console.error("Leave room error:", error);
            socket.emit("error", "Failed to leave room");
        }
    });

    socket.on("disconnect", () => {
        if (socket.roomId && socket.user) {
            try {
                const roomInstance = rooms.get(socket.roomId);

                if (roomInstance) {
                    // Remove user from room members
                    roomInstance.members = roomInstance.members.filter(
                        member => member.email !== socket.user.email
                    );

                    // Clean up room if empty
                    if (roomInstance.members.length === 0) {
                        rooms.delete(socket.roomId);
                    } else {
                        rooms.set(socket.roomId, roomInstance);
                    }

                     socketToEmail.delete(socket.id);
                     emailToSocket.delete(socket.id)
                    // Broadcast events
                    io.to(socket.roomId).emit("userLeft", socket.user);
                    io.to(socket.roomId).emit("updateMembers", roomInstance.members);

                    console.log(`User ${socket.user.name} disconnected from room ${socket.roomId}`);
                }
            } catch (error) {
                console.error("Disconnect error:", error);
            }
        }
    });

    socket.on("call-user" , (data)=>{
        const fromEmail = socketToEmail.get(socket.id);
        const {newUser , offer} = data 
        const socketId = newUser.socketId
        socket.to(socketId).emit("incoming-call" , {from: fromEmail , offer  })
    })
    socket.on("call-accepted" , (data)=>{
        const {emailId , ans} = data ;
        const socketId = emailToSocket.get(emailId)
        socket.to(socketId).emit('call-accepted' , {ans})
    }) 
});



export { server };
