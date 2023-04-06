const BigPromise = require("../middleware/Bigpromise")
const Attendance = require("../models/attendance")
const WhereClause = require("../util/whereClause")

// add attendance
exports.addattendance = BigPromise(async(req,res,next)=>{
    const {userId,AttendanceDate,isPresent} = req.body
    const att = await Attendance.create({userId,AttendanceDate,isPresent,lectureId:req.user._id})
    res.status(200).json({
        success:true,
        att
    })
})

// get attendance
exports.getAttendance = BigPromise(async(req,res,next)=>{
    const attendanceList =  new WhereClause(Attendance.find(req.body),req.query).pager(2) 
    let products = await attendanceList.base.populate("userId").exec();
    res.status(200).json({
success:true,
products
    })
})

// adding bulk attendance
exports.BulkAttendanceAdd = BigPromise(async(req,res,next)=>{
    
    const att = await Attendance.insertMany(req.body.data)
    res.status(200).json({
        success:true,
        att
    })
})


