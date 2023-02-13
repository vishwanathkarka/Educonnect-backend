const express = require("express")
const router = express.Router()
const {addLeave,viewLeave,viewStudent,viewLeaveLecture}= require("../controllers/leave")
const {isLogined,customRole} = require("../middleware/user")

router.route("/addleave").post(isLogined ,addLeave)
router.route("/viewleaveuser").post(isLogined ,viewLeave);
router.route("/viewleavelecture").post(isLogined ,customRole("admin"),viewLeaveLecture);
router.route("/viewleavestudent").get(isLogined ,customRole("parent"),viewStudent);

// customRole
module.exports = router;