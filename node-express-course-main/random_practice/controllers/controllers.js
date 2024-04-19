const express = require("express");
const schema = require("../models/sign_up")


const login = async(req,res)=>{
    const data = req.body;
    const user = await schema.create(res.body);
    // const {username , password} = data;

    // res.status(200).send(`Username : ${username} , password : ${password}`);
    res.status(200).send({user});
}

module.exports = login ;