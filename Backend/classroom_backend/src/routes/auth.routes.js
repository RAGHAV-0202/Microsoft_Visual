import express from "express"
const Router = express.Router();
import { Register , Login , Logout , isLoggedIn} from "../controllers/auth.controllers.js";

Router.route("/register").post(Register)
Router.route("/login").post(Login)
Router.route("/logout").post(Logout)
Router.route("/verifyLogin").get(isLoggedIn)

export default Router