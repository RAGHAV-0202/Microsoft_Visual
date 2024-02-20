// const products = require("./products");
const productDB = require("../models/product");


const getAllProducts = async (req,res)=>{
    const product = await productDB.findOne();
    res.status(200).json({product})
}

const getAllProductsStatic = async (req,res)=>{
    const products = await productDB.find()
    res.status(200).json({products})
}

const createProduct = async (req,res)=>{
    const product = await productDB.create(req.body)
    res.status(201).json(product)
}

module.exports = {getAllProductsStatic , getAllProducts , createProduct}