import jwt from "jsonwebtoken"
import asyncHandler from "../utils/asyncHandler.js"
import User from "../models/user.models.js"
import apiError from "../utils/apiError.js"
import dotenv from "dotenv"
dotenv.config();

const VerifyJWT = asyncHandler(async(req,res,next)=>{
    const accessToken = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer" , "")

    if(!accessToken){
        throw new apiError(403 , "No access token present , Unauthorized access")
    }

    const decoded = jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET)

    if(!decoded){
        throw new apiError(403 , "Invalid Access Token , Unauthorized access")
    }

    const user = await User.findById(decoded?._id).select("-password")

    if(!user){
        throw new apiError(403 , "Invalid Access Token , Unauthorized access")
    }

    req.user = user ;
    next();

})

export default VerifyJWT