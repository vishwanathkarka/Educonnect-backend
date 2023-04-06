const mongoose = require("mongoose");

const examResult = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  subject: {
    type: String,
  },
  studentMarks: {
    type: Number,
  },
  outOfMarks: {
    type: Number,
  },
  lectureId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("ExamResult", examResult);
