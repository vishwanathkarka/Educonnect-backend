const BigPromise = require("./Bigpromise")
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const CustomError = require("../util/customError")

exports.isLogined = async(req,res,next)=>{
    const token =  req.cookies.token
    
    if(!token){
        next(new CustomError("Login to access page",400))
    }
     const userToken =await jwt.verify(token,process.env.JWT_SCREATE)
     req.user  = await User.findById(userToken.id);
    
next()
}

exports.customRole = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
           return next(CustomError("role is not matching ",403))
        }
        next();
    }
}

