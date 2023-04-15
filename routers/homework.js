const express = require("express")
const router = express.Router()
const {addHomeworkLecture,addHomeworkstudent,getHomeWorks}= require("../controllers/homework")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addhomeworklecture").post(addHomeworkLecture)
router.route("/addhomeworkbylectureid/:id").post(isLogined,addHomeworkstudent)
router.route("/gethomework/:department/:section").get(getHomeWorks);
module.exports = router;
