const express = require("express");
const router = express.Router()
const {addExamMarks,getStudentMarks,updateMarks} = require("../controllers/examResult")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addResult").post(isLogined,addExamMarks)
router.route("/viewResult").get(isLogined,getStudentMarks)
router.route("/updateResult/:id").put(isLogined,updateMarks)

module.exports = router