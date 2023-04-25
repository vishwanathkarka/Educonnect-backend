const express = require("express");
const router = express.Router()
const {addExamMarks,getStudentMarks,updateMarks,getFailedCount} = require("../controllers/examResult")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addResult").post(isLogined,customRole("lecturer"),addExamMarks)
router.route("/viewResult").get(isLogined,getStudentMarks)
router.route("/getfailedCount/:id").get(isLogined,getFailedCount)
router.route("/updateResult/:id").put(isLogined,updateMarks)

module.exports = router