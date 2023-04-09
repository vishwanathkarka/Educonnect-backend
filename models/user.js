const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Jwt = require("jsonwebtoken");

const usermodel = new mongoose.Schema({
  firstName: {
    type: String,
    // required: [true, "Name is mandatory"],
  },
  lastName: {
    type: String,
    // required: [true, "Name is mandatory"],
  },
  htno: {
    type: String,
  },
  gender: {
    type: String,
    required: [true, "Email in mandatory"],
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: [true, "Email in mandatory"],
    validate: [validator.isEmail, "enter the email correctly"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is mandatory"],
    minlength: [6, "password length should atleast 6  "],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  parentEmail: {
    type: String,

    validate: [validator.isEmail, "enter the email correctly"],
  },
  studentEmail: {
    type: String,
    validate: [validator.isEmail, "enter the email correctly"],
  },
  student_id: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  subject: {
    type: String,
  },
  photo: {
    id: {
      type: String,
      // required:true
    },
    secure_url: {
      type: String,
    },
  },
  // sections: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "Section",
  //   },
  // ],
  departments: [
    {
  department:  {
        type: mongoose.Schema.ObjectId,
        ref: "Department",
  
    },
    section:[{
      type: mongoose.Schema.ObjectId,
  ref: "Section",
  default:"641f48f11edf6915d2ba0f41"
    }
    ]
  },
  ],

  isLoginGoogle: {
    type: Boolean,
    default: false,
  },
  phoneNo: {
    type: String,
    maxlength: [10, "Number should be 10 digits"],
    validate: [
      validator.isMobilePhone,
      "en-IN",
      "enter the phone number correctly",
    ],
  },
  parentPhoneNo: {
    type: String,
    maxlength: [10, "Number should be 10 digits"],
    validate: [
      validator.isMobilePhone,
      "en-IN",
      "enter the phone number correctly",
    ],
  },
  forgotPasswordToken: String,
  forgotPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

usermodel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

usermodel.methods.isValidatePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};
usermodel.methods.getJwtToken = async function () {
  return await Jwt.sign({ id: this._id }, process.env.JWT_SCREATE, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = mongoose.model("user", usermodel);
