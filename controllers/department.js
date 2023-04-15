const BigPromise = require("../middleware/Bigpromise");
const Department = require("../models/department");
const CustomError = require("../util/customError");

// create an department
exports.departmentItem = BigPromise(async (req, res, next) => {
  const { department } = req.body;
  const alreadyExistDep = await Department.findOne({ department });
  if (alreadyExistDep) {
    next(new CustomError("Already Department existed", 400));
  }
  const Dep = await Department.create({ department });
  res.status(200).json({
    success: true,
    Dep,
  });
});

//getting all the departments list
exports.ListDepartmentItem = BigPromise(async (req, res, next) => {
  const listOfDepartment = await Department.find();

  res.status(200).json({
    success: true,
    listOfDepartment,
  });
});

//getting specific department with id passing
exports.ListDepartmentItemSpecific = BigPromise(async (req, res, next) => {
  const { department } = req.body;
  const listOfDepartment = await Department.find({ _id: department })
  // .populate("department").exec();

  res.status(200).json({
    success: true,
    listOfDepartment,
  });
});
