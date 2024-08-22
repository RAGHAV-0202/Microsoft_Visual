import  asyncHandler from "../utils/asyncHandler.js"
import Products from  "../models/Products.models.js"
import apiError from "../utils/apiError.js"
import mongoose from "mongoose"

const MenProducts =  asyncHandler(async(req,res)=>{

    const page = req.query.page || 1
    const data = await Products.find({broadCategory : "Men"}).skip((page - 1) * 25).limit(25).exec()
    return res.status(200).json(data)
})

const LadiesProducts =  asyncHandler(async(req,res)=>{
    const page = req.query.page || 1
    const data = await Products.find({broadCategory : "Ladies"}).skip((page - 1) * 25).limit(25).exec()
    return res.status(200).json(data)
})

const SportsProducts =  asyncHandler(async(req,res)=>{
    const page = req.query.page || 1
    const data = await Products.find({broadCategory : "Sports"}).skip((page - 1) * 25).limit(25).exec()
    return res.status(200).json(data)
})

const newArrivalProducts =  asyncHandler(async(req,res)=>{
    const page = req.query.page || 1
    const data = await Products.find({broadCategory : "newArrival"}).skip((page - 1) * 25).limit(25).exec()
    return res.status(200).json(data)
})

const KidsProducts = asyncHandler(async(req,res)=>{
    const page = req.query.page || 1
    const data = await Products.find({broadCategory : "Kids"}).skip((page - 1) * 25).limit(25).exec()
    return res.status(200).json(data)

})

const HomeProducts =  asyncHandler(async(req,res)=>{
    const page = req.query.page || 1
    const data = await Products.find({broadCategory : "Home"}).skip((page - 1) * 25).limit(25).exec()
    return res.status(200).json(data)

})

const BabyProducts = asyncHandler(async(req,res)=>{
    const page = req.query.page || 1
    const data = await Products.find({broadCategory : "Baby"}).skip((page - 1) * 25).limit(25).exec()
    return res.status(200).json(data)

})

const AllProducts =  asyncHandler(async(req,res)=>{
    const data = await Products.find()
    return res.status(200).json(data)

})

const getProduct =  asyncHandler(async(req ,res)=>{
    const {id} = req.params
    const product = await Products.findOne({articleCode : id})

    if(!product){
        throw new apiError(401 , "Product not found ; Invalid Product Id")
    }
    return res.status(200).json(product)
})



export {MenProducts,LadiesProducts,SportsProducts,newArrivalProducts,KidsProducts,HomeProducts,BabyProducts,AllProducts , getProduct }