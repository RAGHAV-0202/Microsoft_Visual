const express = require("express");
const router = express.Router();

const {function1 , function2} = require("../controllers/controllers")

router.route("/").get(function1).post(function2)

module.exports = router