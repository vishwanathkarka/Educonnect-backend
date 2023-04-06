const mongoose = require("mongoose");

const attendance = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  isPresent: {
    type: Boolean,
    default: false,
  },
  AttendanceDate: {
    type: Date,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  lectureId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("Attendance", attendance);
