const BigPromise = require("../middleware/Bigpromise");
const Leave = require("../models/leave");
const WhereClause = require("../util/whereClause");
const User = require("../models/user");

// add permission
exports.addLeave = BigPromise(async (req, res, next) => {
  const permission = await Leave.create(req.body);
  permission.userId = req.user.id;
  permission.save({ validateBeforeSave: false });
  return res.status(200).json({
    status: true,
    permission,
  });
});

//get all the user permissions
exports.viewLeave = BigPromise(async (req, res, next) => {
  // const {pageno} = req.body
  const resultPerPage = 4;
  // const skipVal = 7 * (pageno - 1);

  let leaveObj = new WhereClause(Leave.find({ role: "user" }), req.query)
    .search()
    .filter();
  let leave = await leaveObj.base
    .populate({ path: "userId", populate: { path: "departments.department" } })
    .exec();
  const filteredLeaveCount = leave.length;
  leaveObj.pager(resultPerPage);
  leaves = await leaveObj.base.clone();

  // const permission =  await Leave.find({"role":"user"}).limit(10).skip(skipVal).populate("userId").exec();

  return res.status(200).json({
    status: true,
    leaves,
    filteredLeaveCount,
  });
});

// get all the lecture leaves
exports.viewLeaveLecture = BigPromise(async (req, res, next) => {
  const permission = await Leave.find({ role: "lecture" })
    .limit(10)
    .skip(skipVal)
    .populate("userId")
    .exec();
  return res.status(200).json({
    status: true,
    permission,
  });
});

// parent view student leave
exports.viewStudent = BigPromise(async (req, res, next) => {
  const permission = await Leave.find({ _id: req.user.student_id })
    .populate("userId")
    .exec();
  return res.status(200).json({
    status: true,
    permission,
  });
});

// let resultperPage = req.query.result;
//     const skipVal = resultperPage * (currentPage - 1)
//     const attendanceList = await Attendance.find(req.body).limit(resultperPage).skip(skipVal);;
