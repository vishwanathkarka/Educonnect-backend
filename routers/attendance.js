const express = require("express");
const router = express.Router();
const {
  addattendance,
  getAttendance,
  BulkAttendanceAdd,
  getIndividualAttendance
} = require("../controllers/attendance");

const { isLogined, customRole } = require("../middleware/user");
router.route("/addattendance").post(isLogined, addattendance);
router.route("/getattendance").post(isLogined,getAttendance);
router.route("/bulkattendanceadd").post(isLogined,customRole("lecturer"),BulkAttendanceAdd);
router.route("/getindividualattendance/:id").get(isLogined,getIndividualAttendance);

module.exports = router;
