const express = require("express")
const router = express.Router()
const {addHomeworkLecture,addHomeworkstudent}= require("../controllers/homework")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addhomeworklecture").post(isLogined,addHomeworkLecture)
router.route("/addhomeworkbylectureid/:id").post(isLogined,addHomeworkstudent)
module.exports = router;
