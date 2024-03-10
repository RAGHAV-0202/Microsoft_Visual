const express = require("express");
const router = express.Router();
const {getAllProducts , createProduct , getProduct} = require("./controllers")

router.route("/").get(getAllProducts).post(createProduct);
router.route("/static").get(getProduct)

module.exports = router
