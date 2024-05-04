const express = require("express");
const router = express.Router()
const {addExamMarks,getStudentMarks,updateMarks,getFailedCount,getLecturerAddedData} = require("../controllers/examResult")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addResult").post(isLogined,customRole("lecturer"),addExamMarks)
router.route("/viewResult/:id").get(isLogined,getStudentMarks)
router.route("/getfailedCount/:id").get(isLogined,getFailedCount)
router.route("/updateResult/:id").put(isLogined,updateMarks)
router.route("/getLecturerAddedResult").get(isLogined,customRole("lecturer"),getLecturerAddedData)

module.exports = router