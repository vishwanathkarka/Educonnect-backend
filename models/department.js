const mongoose = require("mongoose");

const Departments = mongoose.Schema({
  department: {
    type: String,
  },
});

module.exports = mongoose.model("Departments", Departments);
