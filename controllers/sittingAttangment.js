const BigPromise = require("../middleware/Bigpromise")
const SittingArrangement = require("../models/sittingArranagment");


exports.addSittingArrangement = BigPromise(async(req,res,next)=>{
    const {userId,roomno,noOfRow,noOfCol, row, col,examDate} = req.user
    const arrangments = await SittingArrangement.create({userId,roomno,noOfRow,noOfCol,row,col,examDate})
    res.status(200).json({
        status:true,
        arrangments
    })
})

