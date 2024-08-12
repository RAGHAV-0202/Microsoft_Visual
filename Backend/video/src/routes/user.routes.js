import express from "express";
import {changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateAvatar, updateUser} from "../controllers/user.controller.js"
const router = express.Router()
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

router.route("/register").post(upload.fields([{name : "avatar" , maxCount : 1},{ name : "coverImage" , maxCount : 1 }]) , registerUser)
router.route("/login").post(loginUser)
router.route("/channel/:username").get(getUserChannelProfile)


// secured routes
router.route("/logout").post(verifyJWT ,  logoutUser)
router.route("/refreshtoken").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT , changeCurrentPassword)
router.route("/update-fullname").patch(verifyJWT , updateUser)
router.route("/current-user").get(verifyJWT , getCurrentUser)
router.route("/update-avatar").patch(verifyJWT , upload.fields({name : "avatar" , maxCount : 1}) , updateAvatar)
router.route("/history/").get(verifyJWT,getWatchHistory)


export default router