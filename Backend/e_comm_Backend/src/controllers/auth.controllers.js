import User from "../models/users.models.js"
import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js"
import nodemailer from 'nodemailer';
import fetch from 'node-fetch';
import jwt from  "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

async function generateAccessAndRefreshToken(userId){
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

const UserLogin = asyncHandler(async(req,res)=>{
    const {login , password} = req.body
    console.log({login , password})
    if(!login?.trim() || !password?.trim()){
        throw new apiError(400 , "Both Fields are required");
    }

    const user = await User.findOne({$or : [{email : login} , {phoneNumber : login}]} , { refreshToken : 0})
    console.log(user)

    if(!user){
        console.log("no user")
        throw new apiError(400 , "Invalid Login or Password")
    }

    const isPassValid = await user.isPasswordCorrect(password)

    if(!isPassValid){
        console.log("password invalid")
        throw new apiError(400 , "Invalid Login or Password")
    }

    const {accessToken , refreshToken} = await generateAccessAndRefreshToken(user._id);

    const options = {
        httpOnly : true ,
        secure : true,
        sameSite: 'None',
        maxAge: 30 * 24 * 60 * 60 * 1000 ,// 30 days
        path: '/'
    }

    return res.status(200)
        .cookie("accessToken" , accessToken , options)
        .cookie("refreshToken" , refreshToken , options)
        .json(
            new ApiResponse(200 , "Success" , "user logged in successfully")
        )
})


const UserRegister = asyncHandler(async(req,res)=>{
    const {firstName , lastName , email , phoneNumber , password} = req.body ;
    
    if(!firstName.trim() || !email.trim() || !phoneNumber.trim() || !password.trim() ){
        throw new apiError(400 , "All Fields are required");
    }

    const ExistingUser = await User.findOne({
        $or: [
            { email: email.trim() },
            { phoneNumber: phoneNumber.trim() }
        ]
    });
    
    if(ExistingUser){
        throw new apiError(400 , "User Already exists")
    }

    
    const user = await User.create({
        firstName , lastName, email, phoneNumber, password
    })
    

    const {accessToken , refreshToken} = await generateAccessAndRefreshToken(user._id);

    const options = {
        httpOnly : true ,
        secure : true,
        sameSite: 'None'
    }

    console.log("new user registered")
    console.log(user)
    return res.status(200)
        .cookie("accessToken" , accessToken , options)
        .cookie("refreshToken" , refreshToken , options)
        .json(
            new ApiResponse(200 , {user : user , accessToken , refreshToken} , "user Registered successfully")
        )


})

// const UserLogout = asyncHandler(async(req,res)=>{
//     const options = {
//         httpOnly : true , 
//         secure : true
//     }
//     return res.status(200).clearCookie("accessToken").clearCookie("refreshToken").json(new ApiResponse(200 , "user logged out"))
// })

const UserLogout = asyncHandler(async (req, res) => {
    const cookieOptions = {
        httpOnly: true,
        secure: true, // ensure it's set to true if you're using HTTPS in production
        sameSite: 'None', // should match how it was set
        path: '/' // ensure the path matches how the cookie was set
    };

    // Clear both accessToken and refreshToken cookies
    res.clearCookie('accessToken', cookieOptions);
    res.clearCookie('refreshToken', cookieOptions);

    // Return the response after clearing the cookies
    return res.status(200).json(new ApiResponse(200, "user logged out"));
});

const UserRefreshAccessToken = asyncHandler(async(req,res)=>{
    const oldRefreshToken = req.cookies.refreshToken

    if(!oldRefreshToken){
        throw new apiError(401 , "Unauthorized access , RAT")
    }

    const decoded = jwt.verify(oldRefreshToken , process.env.REFRESH_TOKEN_SECRET)
    
    const user = await User.findById(decoded._id).select("-password")

    if(!user){
        throw new apiError(401 , "Unauthorized access , RAT")
    }
    
    const {accessToken , refreshToken} = await generateAccessAndRefreshToken(user._id)

    // console.log(accessToken) 

        
    const options = {
        httpOnly : true ,
        secure : true
    }

    res.status(200)
        .cookie("accessToken" , accessToken , options )
        .cookie("refreshToken" , refreshToken , options)
        .json(new ApiResponse(200 , {accessToken} , "refreshed token"))

})


const UserPasswordResetRequest = asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw new apiError("400", "Enter Email");
    }

    const user = await User.findOne({ email: email });
    if (!user) {
        throw new apiError(400, "User not registered");
    }

    const Token = jwt.sign(
        { _id: user._id },
        process.env.RESET_PASSWORD_SECRET,
        { expiresIn: process.env.RESET_PASSWORD_EXPIRY }
    );

    user.resetToken = Token;
    await user.save();

    const link = `${process.env.BASE_URL}/${Token}`;

    // Gmail SMTP configuration


    console.log(process.env.GMAIL_USER ,  process.env.GMAIL_PASSWORD )

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,        // Your Gmail email
            pass: process.env.GMAIL_PASSWORD     // Your Gmail password or App Password
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Password Reset Request',
        html: `
            <p>Password Reset Request</p>
            <p>Click the link below to reset your password:</p>
            <a href="${link}">Reset Password</a>
            <p>This link will expire in 15 minutes.</p>
            <p>If you didn't request this password reset, please ignore this email.</p>
        `
    };

    try {
        await transporter.verify();
        
        const info = await transporter.sendMail(mailOptions);
        return res.status(200).json(
            new ApiResponse(200, info.messageId, "Reset link sent successfully")
        );
    } catch (error) {
        console.error("Email sending error:", error);
        throw new apiError(500, "Failed to send reset email");
    }
});


// Function to get access token
async function getAccessToken() {
    const tokenEndpoint = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;
    
    const formData = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials'
    });

    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const data = await response.json();
    return data.access_token;
}

const UserPasswordResetPage = asyncHandler(async(req,res)=>{
    const {token} = req.params
    if(!token){
        throw new apiError(400 , "no token present , Unauthorized Access")
    }

    const {password} = req.body
    if(!password){
        throw new apiError(400 , "Enter Password")
    }

    const decoded = jwt.verify(token , process.env.RESET_PASSWORD_SECRET)
    if(!decoded){
        throw new apiError(400 , "Token Expired or Invalid Token")
    }    

    const user = await User.findById(decoded?._id).select("-password -refreshToken")

    if(!user){
        throw new apiError(400 , "Invalid Token or Token Expired")
    }

    if(user.resetToken !== token){
        throw new apiError(400 , "Reset Link has been used !!!")
    }
    
    user.password = password
    user.resetToken = ""
    await user.save()

    res.status(200).json(new ApiResponse(200, "Password updated successfully"));

})

const isLoggedIn = asyncHandler(async(req,res)=>{
    const AT = req.cookies.accessToken;

    if(!AT){
        throw new apiError(400 , "NO TOKEN PRESENT")
    }

    const decoded = jwt.verify(AT , process.env.ACCESS_TOKEN_SECRET)

    if(!decoded){
        throw new apiError(400 , "INVALID TOKEN")
    }

    res.status(200).json(new ApiResponse(200 , decoded , "user is logged in"))

})



export {UserLogin , UserRegister,UserLogout,UserRefreshAccessToken , UserPasswordResetRequest,UserPasswordResetPage , isLoggedIn}