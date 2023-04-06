const mongoose = require("mongoose");

const collegeModel = new mongoose.Schema({
  email: {
    type: String,
  },
});

exports.module = mongoose.model("college", collegeModel);
