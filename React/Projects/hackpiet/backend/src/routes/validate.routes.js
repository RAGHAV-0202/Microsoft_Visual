import express from "express";
import { upload, validate } from "../controllers/validate.controller.js";
const router = express.Router()


router.route("/validate").post(validate)
router.route("/upload").post(upload)

export default router