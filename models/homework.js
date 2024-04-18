const mongoose = require("mongoose");

const homework = mongoose.Schema({
  title: {
    type: String,
  },
  submissionDate: {
    type: Date,
    require: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  lectureId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  submittedDate: {
    type: Date,
  },
  lectureworkFile: {
    id: {
      type: String,
    },
    secure_url: {
      type: String,
    },
  },
  description:{
    type: String,
  },
  homeworkid: {
    type: mongoose.Schema.ObjectId,
    ref: "homework",
  },
  homeworkFile: {
    id: {
      type: String,
      
    },
    secure_url: {
      type: String,
    },
  },
  
  department:{
    type: mongoose.Schema.ObjectId,
    ref:"department"
  },
  section:{
    type: mongoose.Schema.ObjectId,
    ref:"Section"
  },
  isSubmittedWork: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Homework", homework);
