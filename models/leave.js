const mongoose = require("mongoose");

const leave = new mongoose.Schema({
    htno:{
        type:String,
        require:true
    },
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: 'user',  
    },
    subject:{
        type:String,
        maxlength: [20, "password length should less than 20  "],
    },
    description:{
        type:String
    },
    fromDate:{
        type:Date,
        require:true
    },
    toDate:{
        type:Date,
        require:true 
    },
    Duration:{
        type:Number
    },
    isParentApproved:{
        type:Boolean,
        default:false
    },
    isLectureApproved:{
        type:Boolean,
        default:false
    },
    role:{
        type:String
    }    
})
module.exports = mongoose.model("leave",leave)
