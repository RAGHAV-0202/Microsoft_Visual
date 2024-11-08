import mongoose from "mongoose";
import User from "../model/user.model.js";

const validate = async (req, res) => {
    try {
        const { name, certificateNumber } = req.body;

        if (!name?.trim() || !certificateNumber?.trim()) {
            return res.status(400).json("enter both name and certificate number");
        }

        const user = await User.findOne({ Name: name });
        if (!user) {
            return res.status(400).json("No Member found");
        }

        if (user.certificateID !== certificateNumber) {
            return res.status(400).json("Invalid Certificate Number");
        } else {
            return res.status(200).json("Certificate is Valid");
        }
    } catch (error) {
        console.log("error while validation");
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }
};

const upload = async (req, res) => {
    try {
        const { name, certificateNumber } = req.body;

        if (!name.trim() || !certificateNumber.trim()) {
            return res.status(400).json("enter both name and certificate number");
        }

        const user = await User.create({ Name: name, certificateID: certificateNumber });
        
        return res.status(200).json(
            `${name} with certificate id ${certificateNumber} added to the Data base , with id ${user._id}`
        );
    } catch (error) {
        console.log("error while adding certificate");
        console.log(error);
        return res.status(500).json("couldnt upload");
    }
};

export { validate, upload };
