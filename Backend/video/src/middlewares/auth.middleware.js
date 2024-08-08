import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiErrors.js";
import asyncHandler from "../utils/asyncHandler.js";
import dotenv from "dotenv"
dotenv.config()

export const verifyJWT = asyncHandler(async(req,res,next)=>{
    // try {
        const accessToken =  req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer " , "")
    
        if(!accessToken){
            throw new apiError(401 , "Unauthorized access")
        }
    
        const decodedToken =  jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new apiError(401 , "Invalid Access Token")
        }
    
    
        req.user = user ;
        next()
    // } catch (error) {
    //     throw new apiError(401 , "invaid access token")
    // }

})