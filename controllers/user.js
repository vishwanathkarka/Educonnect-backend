const mongoose = require("mongoose");
const User = require("../models/user");
const cloudinary = require("cloudinary");
const BigPromise = require("../middleware/Bigpromise");
const CustomError = require("../util/customError");
const cookieToken = require("../util/cookieToken");

//signup
exports.findEmail = BigPromise(async (req, res, next) => {
  const { email, role } = req.body;
  let userEmailExist = await User.findOne({ role, email }).populate("departments.Department").exec();
  if (userEmailExist) {
    res.status(200).json({
      success: true,
      userEmailExist,
    });
  } else {
    res.status(200).json({
      success: false,
    });
  }
});

exports.Signup = BigPromise(async (req, res, next) => {
//   console.log("&&&****" + req.body.data);

  const userData = JSON.parse(req.body.data);
  console.log(userData);
  const {
    firstName,
    lastName,
    email,
    password,
    role,
    phoneNo,
    parentEmail,
    studentEmail,
    departments,
    sections,
    htno,
    gender,
  } = userData;
  //checking the email in DB
  //  let eee = JSON.parse(req.body.data[0])
  //  console.log(eee.email)
  //  let jj = JSON.stringify(req.body.data)
  //  console.log(jj.email)
  //    const user = await User.findOne({email});
  //    if exists

  // if(user){
  //   return next(new CustomError("Email already exited ",400))

  // }

  if (!(firstName || lastName || email || password || role || departments)) {
    return next(new CustomError("Name email and password is mandatory", 400));
  }
  if (!req.files.photo) {
    return next(new CustomError("photo is mandatory", 400));
  }

  // uploading photo
  console.log("45566*******((()))))))***********" + req.files.photo);
  const photo = req.files.photo;
  console.log("*******((()))))))***********" + photo);
  let result = await cloudinary.v2.uploader.upload(photo.tempFilePath, {
    folder: "users",
    width: 150,
    crop: "scale",
  });
  console.log("***)))9990000" + result);
  let userCreated;
  if (role == "student") {
    // const userData = await  User.find({"email":parent_email})

    userCreated = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
      parentEmail,
      phoneNo,
      departments:[{"department":departments ,"section":[sections,] }],
      htno,
      gender,
      // student_id:userData._id,
      photo: {
        id: result.public_id,
        secure_url: result.secure_url,
      },
    });
    console.log("&&&&&&&^^^^&&&" + userCreated);
    // if(!parentEmail){
    //     return  next(new CustomError("Parent_email"))
    // }
    // for(let val of departments){
    //     userCreated.departments.department.push(val);
    // }

    // for(let sec of sections){
    //     userCreated.sections.department.push(sec);
    // }
  } else {
    userCreated = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
      studentEmail,
      phoneNo,
      gender,
      photo: {
        id: result.public_id,
        secure_url: result.secure_url,
      },
    });
  }
  // for(let val of departments){
  //     userCreated.departments.push(val);
  // }

  // for(let sec of sections){
  //     userCreated.sections.push(sec);
  // }

  // res.send("hello")
  res.status(200).json({
    success: true,
    userCreated,
  });
});

//login
module.exports.login = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password").populate('departments.department').populate('departments.section').exec();;
  console.log("*****)(()" + email);
  // if(!user && !password){
  //     return next(new CustomError(" email and password are required", 400));
  // }
  let validatePassword = await user.isValidatePassword(password);
  if (!validatePassword) {
    return next(new CustomError("Wrong password Entered", 400));
  }
  cookieToken(user, res);
});

//logout
exports.logout = BigPromise(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logout success",
  });
});

//get admin
exports.getAdmin = BigPromise(async (req, res, next) => {
  const user = await User.findOne({ role: "admin" });
  res.status(200).json({
    success: true,
    user,
  });
});

// get role user
exports.getUser = BigPromise(async (req, res, next) => {
  const user = await User.findOne({ role: "user" });
  res.status(200).json({
    success: true,
    user,
  });
});

// get lecture list
exports.getUsers = BigPromise(async (req, res, next) => {
  const user = await User.findOne({ role: "lecture" });
  res.status(200).json({
    success: true,
    user,
  });
});

// get Parent list
exports.getParents = BigPromise(async (req, res, next) => {
  const user = await User.findOne({ role: "parent" });
  res.status(200).json({
    success: true,
    user,
  });
});

exports.parentApprove = BigPromise(async (req, res, next) => {
  if (req.user.role == "parent") {
  }
});

// to identify the role
exports.getUserRole = BigPromise(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return next(new CustomError("Enter Valid email", 400));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

//updating the role
exports.updateRole = BigPromise(async (req, res, next) => {
  const { role, email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    next(new CustomError("Enter Valid email", 400));
  }
  const updatedRole = await User.updateOne({ _id: user._id }, { role: role });
  res.status(200).json({
    success: true,
    updatedRole,
  });
});

// get all the user
exports.getAllUserRole = BigPromise(async (req, res, next) => {
  const { role } = req.body;
  const user = await User.find({ role });
  res.status(200).json({
    success: true,
    user,
  });
});

// get all the user for attendance
exports.getAllUserForAttendance = BigPromise(async (req, res, next) => {
  const { section, department } = req.body;
  const user = await User.find({ section:[section] });
  res.status(200).json({
    success: true,
    user,
  });
});


exports.addDepartmentForUser =  BigPromise(async (req, res, next) => {
    const { sections, departments} = req.body;
    const {id} = req.params
    const user = await User.findOneAndUpdate({"_id":id},{$push:{"departments":{departments,"section":sections}}});
    res.status(200).json({
      success: true,
      user,
    });
  });

  exports.addSectionInDepartment =  BigPromise(async (req, res, next) => {
    const { section} = req.body;
    const {id,department} = req.params
    // const user = await User.findOneAndUpdate({"_id":id},{$push:{"departments[0]":{section}}});
    const user = await User.findOne({"_id":id})
    let value = null;
    for(let i =0; i<user.departments.length; i++){
        if(user.departments[i].department.toString() == department){
value = i;
break;
        }
    }
    console.log(value)
    console.log(user.departments.length)
    console.log(user.departments[value].department.toString() == department)
    if(value != null){
    user.departments[value].section.push(...section)
    user.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      user,
    });
}
  });