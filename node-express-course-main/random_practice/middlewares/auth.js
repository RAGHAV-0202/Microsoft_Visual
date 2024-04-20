const jwt = require("jsonwebtoken");

const authWithMiddleware = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(404).json("No token present");
    }else{
        const token = authHeader.split(' ')[1];
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            const {db_id , username , iat , exp} = decoded

            const IST_iat = toIST(iat);
            const IST_exp = toIST(exp);

            req.user = {db_id,username};
            next()
            console.log({db_id , username , IST_iat , IST_exp})
        }catch(error){
            console.log(error);
        }
    }
}

const toIST = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { timeZone: 'Asia/Kolkata', hour12: false };
    return date.toLocaleString('en-IN', options);
};

module.exports = authWithMiddleware ;