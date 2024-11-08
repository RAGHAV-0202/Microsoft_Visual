import express from "express"
const Router = express.Router();
import {GetAllClasses,GetSpecificClass,CreateClass,JoinClass,LeaveClass, isUserAMember} from "../controllers/classes.controllers.js";
import verifyJWT from "../middlewares/auth.middleware.js"



Router.route("/classes").get(verifyJWT ,GetAllClasses)
Router.route("/classes/:id").get(verifyJWT ,GetSpecificClass)
Router.route("/classes").post(verifyJWT ,CreateClass)
Router.route("/classes/:id/join").post(verifyJWT ,JoinClass)
Router.route("/classes/:id/leave").post(verifyJWT ,LeaveClass)
Router.route("/classes/:id/authenticate").get(verifyJWT , isUserAMember)


export default Router