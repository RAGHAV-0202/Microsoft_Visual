const mongoose = require('mongoose');
const User = require("D:/Microsoft Visual/mongoDB/user.js")

mongoose
    .connect('mongodb://localhost:27017/test')
    .catch (error => console.log(error))
    .finally(console.log("connected"))

run()
async function run(){
    try{
        const user = await User.where("age").gt("12") 
        user[0].bestFriend = "656f5b8df9ec10b105c61f12"
        user[0].email = "ahahha@gmail.home"
        await user[0].save()
        console.log(user)
    }catch(e){
        console.log(e.message)
    }
    
}
    
// const user = new User({
//             name : "duct",
//             age : 13,
//             email : "hi@gmail.com",
//             hobbies : ["cricket" , "bgmi"],
//             address : {
//                 street : "main",
//                 city : "panipat"
//             }
//         })
//         await user.save()
//         console.log(user)