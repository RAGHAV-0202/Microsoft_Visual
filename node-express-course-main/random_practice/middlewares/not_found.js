require("express");

const notFound = (req,res,next)=>{
      res.status(404).send("No route found");
}

module.exports = notFound ;