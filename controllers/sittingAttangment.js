const BigPromise = require("../middleware/Bigpromise");
const SittingArrangement = require("../models/sittingArranagment");

exports.addSittingArrangement = BigPromise(async (req, res, next) => {
  const { userId, roomno, noOfRow, noOfCol, row, col, examDate,examName } = req.body;
  const arrangments = await SittingArrangement.create({
    userId,
    roomno,
    noOfRow,
    noOfCol,
    row,
    col,
    examDate,
    examName,
    lecturerId:req.user._id
  });
  res.status(200).json({
    status: true,
    arrangments,
  });
});

exports.viewSittingPlain = BigPromise(async(req,res,next)=>{
  const {id}= req.param;
  const arrangement = await SittingArrangement.find({"userId":req.user.id})
  res.status(200).json({
    status :true,
    arrangement
  })
})
exports.viewSittingPlainAddedLecturer = BigPromise(async(req,res,next)=>{
  const {id}= req.param;
  const arrangement = await SittingArrangement.find({"lecturerId":req.user.id})
  res.status(200).json({
    status :true,
    arrangement
  })
})

