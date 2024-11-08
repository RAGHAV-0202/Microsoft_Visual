import User from "../models/user.models.js";
import ApiResponse from "../utils/apiResponse.js";
import apiError from "../utils/apiError.js"
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

async function generateAccessToken(user){
    try{
        const accessToken = await user.generateAccessToken();
        return accessToken
    }catch(error){
        throw new apiError(500 , "Something went wrong while generating token")
    }
}

const Register = asyncHandler(async(req,res)=>{

    const {email , name , password} = req.body ;
    
    if(!email?.trim() || !name?.trim() || !password?.trim()){
        throw new apiError(400 , "All three fields are required !!!")
    }

    const existing_user = await User.findOne({email : email.trim()})
    if(existing_user){
        throw new apiError(400 , "Email is already in use !!!")
    }

    const user  = await User.create({
        email , name , password
    })

    const accessToken = await generateAccessToken(user)
    console.log(accessToken)
    
    const options = {
        httpOnly : true ,
        secure : true,
        sameSite: 'None',
        maxAge: 30 * 24 * 60 * 60 * 1000 ,// 30 days
        path: '/'
    }

    console.log(user)
    return res.status(200)
        .cookie("accessToken" , accessToken , options)
        .json(
            new ApiResponse(200 , {user : user , accessToken} , "user registered successfully" )
        )
})

const Login = asyncHandler(async(req,res)=>{

    const {email , password} = req.body ;
    
    if(!email?.trim() || !password?.trim() ){
        throw new apiError(400 , "email and password are required !!!")
    }

    const user = await User.findOne({email});
    if(!user){
        throw new apiError(400 , "Invalid Email or Password !!!")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    console.log(isPasswordCorrect)

    if(!isPasswordCorrect){
        throw new apiError(400 , "Invalid Email or Password !!!")
    }

    const accessToken = await generateAccessToken(user) ;

    const options = {
        httpOnly : true ,
        secure : true,
        sameSite: 'None',
        maxAge: 30 * 24 * 60 * 60 * 1000 ,// 30 days
        path: '/'
    }
    return res.status(200)
        .cookie("accessToken" , accessToken , options)
        .json(
            new ApiResponse(200 , "Success" , "user logged in successfully")
        )
})


const Logout = asyncHandler(async(req,res)=>{

    const cookieOptions = {
        httpOnly: true,
        secure: true, 
        sameSite: 'None', 
        path: '/' 
    };

    res.clearCookie('accessToken', cookieOptions);

    return res.status(200).json(new ApiResponse(200, "user logged out"));
})


const isLoggedIn = asyncHandler(async(req,res)=>{
    const AT = req.cookies.accessToken;

    if(!AT){
        throw new apiError(400 , "NO TOKEN PRESENT")
    }

    try {
        const decoded = jwt.verify(AT, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json(new ApiResponse(200 , decoded , "user is logged in"))
    } catch (error) {
        throw new apiError(400, "INVALID TOKEN");
    }
 

})

export {Register , Login , Logout , isLoggedIn}

