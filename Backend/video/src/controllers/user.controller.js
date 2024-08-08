import {asyncHandler} from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"
import { apiError } from "../utils/apiErrors.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"
import bcrypt from "bcrypt";


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

    const {email , password , username} = req.body ;

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

    const {accessToken , refreshToken} = generateAccessAndRefreshToken(user._id);
    
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    res.status(200).json(loggedInUser)

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

})







export {registerUser , loginUser , logoutUser} 