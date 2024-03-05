// const products = require("./products");
const productDB = require("../models/product");


const getAllProducts = async (req,res)=>{
    // const product = await productDB.findOne();
    const product = await productDB.find();
    res.status(200).json({number :product.length , product})
}

const getAllProductsStatic = async (req,res)=>{
    const {featured,company,price,name,ratings , sort} = req.query ;

    const queryObject = {}
    if(featured){
        queryObject.featured = featured === "true" ? true : false 
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = { $regex : name , $options : "i"}
    }
    console.log(queryObject)
    let product = productDB.find(queryObject)
    let result =  productDB.find(queryObject)
    
    if(sort){
        console.log(sort)
        const sortlist = sort.split(",").join("")
        result = result.sort(sortlist)
    }
    product = await result
    res.status(200).json({number :product.length , product})
}

const createProduct = async (req,res)=>{
    const product = await productDB.create(req.body)
    res.status(201).json(product)
}

module.exports = {getAllProductsStatic , getAllProducts , createProduct} 