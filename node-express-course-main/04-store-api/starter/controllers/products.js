// const products = require("./products");
const productDB = require("../models/product");


const getAllProducts = async (req,res)=>{
    // const product = await productDB.findOne();
    const product = await productDB.find();
    res.status(200).json({number :product.length , product})
}

const getAllProductsStatic = async (req,res)=>{
    const {featured,company,price,name , sort,fields,numericFilters,ratings} = req.query ;

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
    if(numericFilters){
        const operatorMap = {
            ">" : "$gt",
            ">=" : "$gte",
            "<" : "$lt",
            "<=" : "$lte",
            "=" : "$eq",
        }
        const regEx  = /\b(<|>|>=|<=|=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match)=>`-${operatorMap[match]}-`
            )
        const options = ["price" , "ratings"];
        filters = filters.split(",").forEach((item)=>{
            const [fields , operator,value] = item.split("-")
            if(options.includes(fields)){
                queryObject[fields] = {[operator]:Number(value)}
            }
        })
        console.log(filters)
    }

    console.log(queryObject)
    let result =  productDB.find(queryObject)
    
    if(sort){
        const sortlist = sort.split(",").join("")
        result = result.sort(sortlist)
    }else{
        result=result.sort("-createdAt")
    }

    if(fields){
        const fieldList = fields.split(",").join("")
        result = result.select(fieldList)
    } 


    const page = Number(req.query.page) || 1 
    const limit = Number(req.query.limit)  || 10 
    const skip = (page - 1 ) * limit
    
    result = result.skip(skip).limit(limit)
    
    const product = await result
    res.status(200).json({number :product.length , product})
}

const createProduct = async (req,res)=>{
    const product = await productDB.create(req.body)
    res.status(201).json(product)
}

module.exports = {getAllProductsStatic , getAllProducts , createProduct} 