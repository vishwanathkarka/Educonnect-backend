const BigPromise = require("../middleware/Bigpromise")
const Leave = require("../models/leave");
const WhareClause = require("../util/whereClause")
const User = require("../models/user")

exports.addLeave = BigPromise(async(req,res,next)=> {
    const permission = await Leave.create(req.body);
    permission.userId = req.user.id;
    permission.save({ validateBeforeSave: false })
  
   return  res.status(200).json({
      status: true,
      permission,
    });
})

//get all the user leaves
exports.viewLeave = BigPromise(async(req,res,next)=>{
  const {pageno} = req.body
  const skipVal = 7 * (pageno - 1);
  const products =  await Leave.find({"role":"user"}).limit(10).skip(skipVal).populate("userId").exec();

    return  res.status(200).json({
        status: true,
        products, 
      });
});

// get all the lecture leaves
exports.viewLeaveLecture = BigPromise(async(req,res,next)=>{
    const permission = await Leave.find({"role":"lecture"}).limit(10).skip(skipVal).populate("userId").exec()
    return  res.status(200).json({
        status: true,
        permission, 
        
      });
})

// parent view student leave
exports.viewStudent  = BigPromise(async(req,res,next)=>{
    const permission = await Leave.find({"_id":req.user.student_id}).populate("userId").exec()
    return  res.status(200).json({
        status: true,
        permission, 
        
      });
})
