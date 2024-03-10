const express = require("express");

const getAllProducts = (req,res)=>{
    res.json("all products")
}

const getProduct = (req,res)=>{
    res.status(200).json("Single Product")
}

const createProduct = (req,res)=>{
    res.json("product created")
}

module.exports = {getAllProducts , getProduct , createProduct}