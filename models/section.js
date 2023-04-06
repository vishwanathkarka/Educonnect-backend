const mongoose = require("mongoose");

const Section = mongoose.Schema({
  section: {
    type: String,
  },
});

module.exports = mongoose.model("Section", Section);
