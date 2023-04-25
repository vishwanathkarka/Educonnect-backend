const mongoose = require("mongoose");

const SittingArrangement = new mongoose.Schema({
  roomno: {
    type: String,
    // required: true,
  },
  noOfRow: {
    type: Number,
    // required: true,
  },
  noOfCol: {
    type: Number,
    // required: true,
  },
  row: {
    type: Number,
    // required: true,
  },
  col: {
    type: Number,
    // required: true,
  },
  examName:{
    type:String
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    // required: true,
  },
  lecturerId:{
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  examDate: {
    type: Date,
    // required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SittingArrangement", SittingArrangement);
