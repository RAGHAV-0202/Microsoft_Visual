


// const asyncHandler = (fn) => async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(500).json({
//             success : false , 
//             message : error.message,
//         })
//     }
// }

const asyncHandler = (reqHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next))
        .catch((err)=> next(err))
    }
}


export default asyncHandler;


export {asyncHandler}