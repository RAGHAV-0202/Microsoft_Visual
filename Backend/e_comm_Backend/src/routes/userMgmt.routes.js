import express from "express"
import { VerifyJWT } from "../middlewares/auth.middleware.js"
import {UserProfile,UserUpdateFirstName, UserUpdateLastName, UserUpdatePhoneNumber, UserUpdateEmail, UserUpdateAddress, UserUpdateDOB, UserUpdatePaymentMethods} from "../controllers/userMgmt.controllers.js"
const router = express.Router()

router.route("/profile").get(VerifyJWT , UserProfile)

router.route("/profile/update-firstname")   .patch(VerifyJWT, UserUpdateFirstName);
router.route("/profile/update-lastname")    .post(VerifyJWT, UserUpdateLastName);
router.route("/profile/update-phonenumber") .post(VerifyJWT, UserUpdatePhoneNumber);
router.route("/profile/update-email")       .post(VerifyJWT, UserUpdateEmail);
router.route("/profile/update-address")     .post(VerifyJWT, UserUpdateAddress);
router.route("/profile/update-dob")         .post(VerifyJWT, UserUpdateDOB);
router.route("/profile/update-payment-methods").post(VerifyJWT, UserUpdatePaymentMethods);




export default router