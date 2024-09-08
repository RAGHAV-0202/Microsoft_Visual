import express from "express";
import { validate } from "../controllers/validate.controller.js";
const router = express.Router()


router.route("/validate").post(validate)

export default router