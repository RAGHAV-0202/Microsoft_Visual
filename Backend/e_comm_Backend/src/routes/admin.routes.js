import express from "express"
import { VerifyJWT } from "../middlewares/auth.middleware.js"
const router = express.Router()
import {AdminGetAllUsers} from "../controllers/admin.controllers.js"

router.route("/api/admin/get-all-users").get(AdminGetAllUsers)

export default router