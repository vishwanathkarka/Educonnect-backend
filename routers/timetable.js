const express = require("express")
const router = express.Router()
const {addTimeTable,getLectureTimeTable,getTimeTable} = require("../controllers/timetable")
const {isLogined,customRole} = require("../middleware/user")


router.route("/addtimetable").post(isLogined,addTimeTable)
router.route("/getlecturetable/:id").get(isLogined,getLectureTimeTable)
router.route("/gettimetable").get(isLogined,getTimeTable)
module.exports = router;