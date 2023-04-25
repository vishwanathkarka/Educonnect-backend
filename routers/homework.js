const express = require("express")
const router = express.Router()
const {addHomeworkLecture,addHomeworkstudent,getHomeWorks,findHomestudent,homeworkSubmittedCount,homeworkAddedLecturer}= require("../controllers/homework")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addhomeworklecture").post(isLogined,addHomeworkLecture)
router.route("/addhomeworkbylectureid/:id").post(isLogined,addHomeworkstudent)
router.route("/gethomework/:department/:section").get(isLogined,getHomeWorks);
router.route("/gethomeworkstudent/:userId/:homeworkid").get(isLogined,findHomestudent);
router.route('/homeworkcompledcount/:id').get(isLogined,homeworkSubmittedCount)
router.route('/homeworkadded/lecturer/:id').get(isLogined,homeworkAddedLecturer)

module.exports = router;
