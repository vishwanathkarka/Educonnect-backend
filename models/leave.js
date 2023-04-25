const mongoose = require("mongoose");
const { userSchema } = require("./user");
const leave = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  subject: {
    type: String,
    maxlength: [20, "password length should less than 20  "],
  },
  description: {
    type: String,
  },
  fromDate: {
    type: Date,
    require: true,
  },
  toDate: {
    type: Date,
    require: true,
  },
  Duration: {
    type: Number,
  },
  isParentApproved: {
    type: Number,
    default: 0,
  },
  isLectureApproved: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  }
});
const user = mongoose.model("user", userSchema);
module.exports = mongoose.model("leave", leave);
