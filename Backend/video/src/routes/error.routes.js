import express from "express";
import {registerUser} from "../controllers/user.controller.js"
const router = express.Router()

router.get("*" , (req,res)=>{
    res.send("404")
})


export default router