import mongoose from "mongoose";
import User from "../model/user.model.js";

const validate = async(req,res)=>{
    try{
        const {name , certificateNumber} = req.body
        console.log({name , certificateNumber})

        if(!name.trim() || !certificateNumber.trim()){
            res.status(400).json("enter both name and certificate number")
        }

        const user = await User.findOne({Name : name})

        if(!user){
            res.status(400).json("No Member found")
        }
        if(user.certificateID != certificateNumber){
            res.status(400).json("Invalid Certificate Number")
        }
        res.status(200).json("Certificate is Valid")
        res.status(200).json({cerificateSrc : user.certificateLink})


    }catch(error){
        console.log("error while validation")
        console.log(error)
    }
}

export {validate}
