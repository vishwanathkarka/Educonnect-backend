const mongoose = require("mongoose")
const User = require("../models/user")
const cloudinary = require("cloudinary")
const BigPromise = require("../middleware/Bigpromise")
const CustomError = require("../util/customError")
const cookieToken = require("../util/cookieToken")


//signup
exports.Signup = BigPromise(async(req,res,next)=>{
    const {name,email,password,role,sections,departments,phoneNo,student_email,parent_email} = req.body
  //checking the email in DB
   const user = await User.findOne({email});

//    if exists
if(user){
   next(new CustomError("Email already exited ",400))
}

   if(!(name|| email|| password || role || departments )){
    next(new CustomError("Name email and password is mandatory",400));
   } 
   if(!req.files){
    next(new CustomError("photo is mandatory",400));
   }

console.log(req.files)
// uploading photo
let result = await cloudinary.v2.uploader.upload(req.files.photo.tempFilePath,{
    folder:"users",
    width:150,
    crop:"scale"
            })
if(role == "parent"){
    const userData = await  User.find({"email":student_email})

    const userCreated = await User.create({
        name,
        email,
        password,
       role,
       student_email,
        phoneNo,
        student_id:userData._id,
        photo:{
            id:result.public_id,
            secure_url :result.secure_url
        }
    
    })

    if(!student_email){
        next(new CustomError("Parent_email"))
    }
    for(let val of departments){
        userCreated.departments.push(val);
    }
    
    for(let sec of sections){
        userCreated.sections.push(sec);
    }
    
    await userCreated.save({ validateBeforeSave: false })
    
    res.status(200).json({
        success:true,
        userCreated
    }) 
  }
else{
const userCreated = await User.create({
    name,
    email,
    password,
   role,
   student_email,
    phoneNo,
    photo:{
        id:result.public_id,
        secure_url :result.secure_url
    }

})
 
for(let val of departments){
    userCreated.departments.push(val);
}

for(let sec of sections){
    userCreated.sections.push(sec);
}

await userCreated.save({ validateBeforeSave: false })

res.status(200).json({
    success:true,
    userCreated
})
}

})

//login
exports.login = BigPromise(async(req,res,next)=> {
    const {email,password} = req.body
    const user = await User.findOne({email}).select("+password")
    if(!user){
        next(new CustomError("Signup first then login",400));
    }
   let validatePassword = await user.isValidatePassword(password)
   if(!validatePassword){
    next(CustomError("Wrong password Entered",400))
   }
   cookieToken(user,res)
})

exports.logout  = BigPromise(async(req,res,next)=> {
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });
    res.status(200).json({
        success:true,
        message:"Logout success"
    })
})

//get admin
exports.getAdmin = BigPromise(async(req,res,next)=>{
   const user = await User.findOne({role:"admin"})
   res.status(200).json({
    success :true,
user
   })
})


// get user
exports.getUser = BigPromise(async(req,res,next)=>{
    const user = await User.findOne({role:"user"})
    res.status(200).json({
     success :true,
 user
    })
 })

 // get lecture
exports.getUsers = BigPromise(async(req,res,next)=>{
    const user = await User.findOne({role:"lecture"})
    res.status(200).json({
     success :true,
 user
    })
 })

  // get Parent
exports.getParents = BigPromise(async(req,res,next)=>{
    const user = await User.findOne({role:"parent"})
    res.status(200).json({
     success :true,
 user
    })
 })

 exports.parentApprove = BigPromise(async(req,res,next)=>{
    if(req.user.role == "parent"){

    }
 })

 // to identify the role
 exports.getUserRole = BigPromise(async(req,res,next)=>{
    const {email}= req.body
    const user = await User.findOne({email})
    if(!user){
        next( new CustomError("Enter Valid email",400));
    }
    res.status(200).json({
        success:true,
        user
    })
 })

//updating the role
exports.updateRole = BigPromise(async(req,res,next)=>{
    const {role,email} = req.body
const user = await User.findOne({email});
if(!user){
    next( new CustomError("Enter Valid email",400));
}
const updatedRole = await User.updateOne({"_id":user._id},{"role":role})
res.status(200).json({
    success:true,
    updatedRole
})
})

// get all the user
exports.getAllUserRole = BigPromise(async(req,res,next)=>{
    const {role} = req.body;
    const user = await User.find({role});
    res.status(200).json({
        success:true,
        user
    })
})
