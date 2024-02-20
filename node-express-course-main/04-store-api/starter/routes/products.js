const express = require("express");
const router = express.Router()
const {getAllProductsStatic , getAllProducts , createProduct} = require("../controllers/products");


router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)
router.route("/").post(createProduct)


module.exports = router