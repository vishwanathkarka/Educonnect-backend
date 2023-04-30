const BigPromise = require("./Bigpromise")
const User = require("../models/user")
const Jwt = require("jsonwebtoken")
const CustomError = require("../util/customError")

exports.isLogined = BigPromise( async(req,res,next)=>{
    const token =   req.header("Authorization") || req.cookies.token ;
    if(!token){
        next(new CustomError("Login is mandatory",400))
    }
     const userToken = await Jwt.verify(token,process.env.JWT_SCREATE) 
     req.user  = await User.findById(userToken.id);
     
    
next()
})

exports.customRole =  (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
           return next( new CustomError("role is not matching ",403))
        }
        next();
    }
}


