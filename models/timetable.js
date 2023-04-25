const mongoose = require("mongoose");

const timetable = mongoose.Schema({
  section: {
    type: mongoose.Schema.ObjectId,
    ref: "section",
  },
  department: {
    type: mongoose.Schema.ObjectId,
    ref: "department",
  },
  lectureId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  monday: {
    type: Boolean,
    default: false,
  },
  tuesday: {
    type: Boolean,
    default: false,
  },
  wednesday: {
    type: Boolean,
    default: false,
  },
  thursday: {
    type: Boolean,
    default: false,
  },
  friday: {
    type: Boolean,
    default: false,
  },
  saturday: {
    type: Boolean,
    default: false,
  },
  period: {
    type: Number,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("timetable", timetable);
