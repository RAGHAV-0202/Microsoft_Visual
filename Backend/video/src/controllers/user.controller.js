import {asyncHandler} from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"
import { apiError } from "../utils/apiErrors.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import mongoose from "mongoose"


const generateAccessAndRefreshToken = async(userId)=>{
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken() ;
        const refreshToken = user.generateRefreshToken() ;

        user.refreshToken = refreshToken 
        await user.save({validateBeforeSave : false})

        return {accessToken , refreshToken}
        
    }catch(Error){
        throw new apiError(500 , "Something went wrong while generating token")
    }
}

const registerUser = asyncHandler( async(req,res)=>{
    // try{
    //     const user = await User.create(req.body)
    //     res.status(200).json({status : "success" , data : user})
    // }catch(error){
    //     if(error.errorResponse){
    //         res.status(400).json(error.errorResponse.errmsg)
    //     }else if(error.message){
    //         res.status(400).json(error.message)
    //     }else{
    //          res.status(400).json(error)
    //     }
    // }


// get user details
// validation - not empty
// check if user already exists
// check iamges
// upload img to cloudinary
// create user object 
// remove pass 
// check for user creation
// return yes


                      // GET USER DETAILS
    const { fullName, username, email, password } = req.body;

                    // Validation
    if (!fullName?.trim() || !username?.trim() || !email?.trim() || !password?.trim()) {
        throw new apiError(400, "All fields are required");
    }


                     // CHECK IF USER ALREADY EXISTS
    const existingUser = await User.findOne({
        $or : [ { username } , { email } ]
    })

    if(existingUser){
        throw new apiError(409 , "User with this email or username already exists")
    }

                    // CHECK IMAGES
    let avatarLocalPath = ""
    const obj_avatar = (req.files?.avatar[0])
    avatarLocalPath = obj_avatar.path;

    let coverImage;
    if(req.files.coverImage){
        const CoverImageLocalPath = req.files?.coverImage[0]?.path;
        coverImage = await uploadOnCloudinary(CoverImageLocalPath)
    }

    if(avatarLocalPath == ""){
        throw new apiError(400 , "avatar local path is required")
    }
                    // UPLOAD IMAGE TO CLOUDINARY
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    
    if(!avatar){
        throw new apiError(400 , "avatar cloudinary is required")
    }

                    // CREATE USER OBJECT
    const user = await User.create({
        fullName,
        avatar : avatar.url ,
        coverImage : coverImage?.url || "", 
        email,
        password,
        username : username.toLowerCase(),
    })
                    // REMOVE PASSWORD
    const Data_WO_PASS = await User.findById(user._id , {password : 0})

    if(!Data_WO_PASS){
        throw new apiError(500 , "Something went wrong ; Couldn't Register")
    }
                     // RETURN RESPONSE
    return res.status(201).json(
        new ApiResponse(200 , Data_WO_PASS , "User registered successfully")
    )

})


const loginUser = asyncHandler( async(req,res)=>{

    // get user details
    // validate : check if all details are present
    // find the user
    // access and refresh token
    // send cookie
    // send response

    const {login , password} = req.body ;
    const email = login ;
    const username = login ;

    if(!email?.trim() && !username?.trim() ) {
        throw new apiError(400 , "Email or Username is required !!!") 
    }
    if(!password?.trim()){
        throw new apiError(400 , "Password is required !!!")
    }

    const user = await User.findOne({$or : [ {username} , {email}]})
    if(!user){
        throw new apiError(404 , "User does not exists")
    }

    const isPassTrue = await user.isPasswordCorrect(password)
    // const isPassTrue = await bcrypt.compare(password , hashPassword.password)

    if(!isPassTrue){
        throw new ApiResponse(400 , "Failed" , "Login or password Invalid" )
    } 

    const {accessToken , refreshToken} = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    
    const options = {
        httpOnly : true ,
        secure : true
    }

    return res.status(200)
        .cookie("accessToken" , accessToken , options)
        .cookie("refreshToken" , refreshToken , options)
        .json(
            new ApiResponse(200 , {user : loggedInUser , accessToken , refreshToken} , "user logged in successfully")
        )
})

const logoutUser = asyncHandler( async(req,res)=>{
    await User.findByIdAndDelete(req.user._id , {$set : {refreshToken : undefined}} , {new : true})

    const options = {
        httpOnly : true ,
        secure : true
    }
    return res.status(200).clearCookie("refreshToken" , options).json("User logged out")

});

const refreshAccessToken = asyncHandler( async(req,res)=>{
    
    const incomingRToken =  req.cookies.refreshToken || req.body.refreshToken ; 
    if(!incomingRToken){
        throw new apiError(401 , "Unauthorized access , RAT")
    }

    const decodedSecret = jwt.verify(incomingRToken , process.env.REFRESH_TOKEN_SECRET)

    const user = await User.findById(decodedSecret?._id)
    if(!user){
        throw new apiError(401 , "Invalid refresh token")
    }

    if(incomingRToken !== user?.refreshToken){
        throw new apiError(401 , "refresh token is expired or used")
    }

    const {accessToken , refreshToken} = await generateAccessAndRefreshToken(user._id);
    
    const options = {
        httpOnly : true ,
        secure : true
    }

    return res.status(200)
        .cookie("accessToken" , accessToken , options)
        .cookie("refreshToken" , refreshToken , options)
        .json(
            new ApiResponse(200 , {accessToken ,  refreshToken} , "access token refreshed")
        )

});

const changeCurrentPassword = asyncHandler(async (req,res)=>{
    const {oldPassword , newPassword} = req.body

    const user = await User.findById(req.user?._id)
    const isPassCorr = await user.isPasswordCorrect(oldPassword)
    if(!isPassCorr){
        throw new apiError(400 , "Password is incorrect")
    }
    user.password = newPassword ;
    user.save({validateBeforeSave : false})

    return res.status(200).json(new ApiResponse(200 , "password changed successfully"))

});

const getCurrentUser = asyncHandler(async(req,res)=>{
    res.status(200).json(200 , req.user , "current user fetched successfully")
});

const updateUser = asyncHandler(async (req,res)=>{
    const {fullname} = req.body
    if(!fullname){
        throw new apiError(400 , "enter fullname")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id , 
        {
            $set : {fullName : fullname }
        },
        {new : true}
    ).select("-password -refreshToken")



    if(!user){
        throw new apiError(400 , "Unauthorized access")
    }


    return res.status(200).json(new ApiResponse(200 , "Full Name changed successfully"))

});


const updateAvatar = asyncHandler(async(req,res)=>{
    const avatarLocalPath = (req.file?.path)
    if(!avatarLocalPath){
        throw new apiError(400 , "avatar file is missing")
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    if(!avatar.url){
        throw new apiError(400 , "error while uploading avatar")
    }
    const user = await findByIdAndUpdate(req.user._id , {$set : {avatar : avatar.url}},{new : true}).select("-password -refreshToken")

    return res.status(200).json(new ApiResponse(200 , "Avatar has been successfully updated"))
})


const getUserChannelProfile = asyncHandler(async(req,res)=>{

    const {username} = req.params
    // console.log(username)
    if(!username.trim()){
        throw new apiError(400 , "couldnt find username")
    }

    const channel = await User.aggregate([
        {
            $match : {
                username : username?.toLowerCase()
            }
        },
        {
            $lookup : {
                from : "subscriptions",
                localField : "_id" ,
                foreignField : "channel",
                as : "Subscribers"
            },
        },
        {
            $lookup : {
                from : "subscriptions",
                localField : "_id" ,
                foreignField : "subscriber",
                as : "SubscribedTo"     
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$Subscribers",
                },
                channelsSubscribedToCount: {
                    $size: "$SubscribedTo",
                },
                isSubscribed: {
                    $cond: {
                        if: { $in: [req.user?._id, "$Subscribers.subscriber"] },
                        then: true,
                        else: false,
                    },
                },
            },
        },
        {
            $project : {
                fullName : 1 ,
                username : 1 ,
                subscribersCount : 1 ,
                channelsSubscribedToCount : 1 ,
                avatar : 1 ,
                coverImage : 1 ,
                email : 1                

            }
        }
    ])

    if(!channel?.length){
        throw new apiError(404 , "Channel does not exists")
    }

    return res.status(200).json(new ApiResponse(200 , channel[0] , "User channel  fetched successfully"))


})

const getWatchHistory = asyncHandler(async(req,res)=>{
    const user = await User.aggregate([
        {
            $match : {
                _id : new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup : {
                from : "videos",
                localField : "watchHistory" , 
                foreignField : "_id" , 
                as : "watchHistory",
                pipeline : [
                    {
                        $lookup : {
                            from : "users" , 
                            localField : "owner",
                            foreignField : "_id" ,
                            as : "owner",
                            pipeline : [
                                {
                                    $project : {
                                        fullName : 1 ,
                                        username : 1 , 
                                        avatar : 1 ,
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields : {
                            owner : {
                                $first : "$owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res.status(200).json(
        new ApiResponse(200 , user[0].getWatchHistory , "watchHistory Fetched")
    )

})



export {registerUser , loginUser , logoutUser,refreshAccessToken , changeCurrentPassword , getCurrentUser , updateUser , updateAvatar , getUserChannelProfile , getWatchHistory} 