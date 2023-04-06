const express = require("express");
const router = express.Router();
const {
  addattendance,
  getAttendance,
  BulkAttendanceAdd,
} = require("../controllers/attendance");
const { isLogined, customRole } = require("../middleware/user");
router.route("/addattendance").post(isLogined, addattendance);
router.route("/getattendance").post(getAttendance);
router.route("/bulkattendanceadd").post(BulkAttendanceAdd);

module.exports = router;
