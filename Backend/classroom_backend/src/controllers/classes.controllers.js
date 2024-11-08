import Class from "../models/classroom.models.js";
import ApiResponse from "../utils/apiResponse.js";
import apiError from "../utils/apiError.js"
import asyncHandler from "../utils/asyncHandler.js";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";


const GetAllClasses = asyncHandler(async(req,res)=>{
    const classes = await Class.find();
    res.status(200).send(new ApiResponse(200 , classes , "Classes Fetched Successfully !!!"))
})

const GetSpecificClass = asyncHandler(async(req,res)=>{
    const {id} = req.params 
    if(id.length !=7){
        throw new apiError(400 , "Invalid Room ID")
    }
    console.log(id.length)

    const specificClass = await Class.findOne({classCode : id}).select("-password")

    console.log(specificClass)
    
    if (!specificClass) {
        throw new apiError(404, "Class not found");
    }

    res.status(200).json(new ApiResponse(200 , specificClass , "id"))
})

const CreateClass = asyncHandler(async (req, res) => {
    const { password } = req.body; 
    const userId = req.user._id; 

    console.log({password , userId})

    if (!password) {
        throw new apiError(400, "Password is required");
    }

    const newClass = await Class.create({
        password,
        members: [userId], 
    });

    res.status(201).json(new ApiResponse(201, newClass, "Class created successfully"));
});

const JoinClass = asyncHandler(async(req,res)=>{
    const { id } = req.params; 
    const userId = req.user._id; 
    const {password} = req.body ;

    if(!id){
        throw new apiError(400 , "No Room ID present")
    }

    const classRequested = await Class.findOne({classCode : id})

    console.log(classRequested)

    const isPasswordCorrect = await classRequested.isPasswordCorrect(password) ;

    console.log(isPasswordCorrect)
    console.log(password)

    if(!isPasswordCorrect){
        throw new apiError("400" , "Invalid Password")
    }

    const updatedClass = await Class.findByIdAndUpdate(
        classRequested._id,  
        { $addToSet: { members: userId } },
        { new: true }
    );


    if (!updatedClass) {
        throw new apiError(404, "Class not found");
    }

    res.status(200).json(new ApiResponse(200, updatedClass, "Joined class successfully"));
})

const LeaveClass = asyncHandler(async (req, res) => {
    const { id } = req.params; 
    const userId = req.user._id;

    if(!id){
        throw new apiError(400 , "No Room ID present")
    }

    const classRequested = await Class.findOne({classCode : id})

    const updatedClass = await Class.findByIdAndUpdate(
        classRequested._id,
        { $pull: { members: userId } },
        { new: true } 
    );

    if (!updatedClass) {
        throw new apiError(404, "Class not found");
    }


    if (updatedClass.members.length === 0) {
        await Class.findByIdAndDelete(updatedClass._id);
        return res.status(200).json(new ApiResponse(200, null, "Class deleted as it had no members"));
    }

    res.status(200).json(new ApiResponse(200, updatedClass, "Left class successfully"));
});

const isUserAMember = asyncHandler(async(req,res)=>{
    const user = req.user ;
    const {id} = req.params ;

    if(!id){
        throw new apiError(400 , "Room ID not present") 
    }

    const roomMembers = await Class.findOne({classCode : id} , {members : 1})

    if(!roomMembers){
        throw new apiError(400 , "Invalid Room ID")
    }

    const isAuthorized = (roomMembers.members.includes(user._id))

    if(!isAuthorized){
        throw new apiError(401, "Not authorized , not a member of this Room")
    }

    res.status(200).json(new ApiResponse(200 , {isAuthorized} , "Authorized"))


})

export {GetAllClasses,GetSpecificClass,CreateClass,JoinClass,LeaveClass , isUserAMember}