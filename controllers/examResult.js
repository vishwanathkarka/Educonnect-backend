const BigPromise = require("../middleware/Bigpromise")
const ExamResult = require("../models/examResult")
const CustomError = require("../util/customError")

exports.addExamMarks = BigPromise(async(req,res)=>{
    const { outOfMarks,studentMarks,subject, userId} = req.body
    const addedResult = await ExamResult.create({outOfMarks,studentMarks,subject,userId,lectureId:req.user._id})
    res.status(200).json({
        success:true,
        addedResult
    })
})

exports.getStudentMarks = BigPromise(async(req,res,next)=>{
    const studetMarks = await ExamResult.find({"userId":req.user._id})
    if(!studetMarks){
        next( new CustomError("Marks is not uploaded", 400) );
    }
    res.status(200).json({
        success:true,
        studetMarks
    })
})

exports.updateMarks = BigPromise(async(req,res,next)=>{
const updatedMarks = await ExamResult.findOneAndUpdate({"_id":req.params.id},req.body)
res.status(200).json({
    success:true,
    updatedMarks
})
})