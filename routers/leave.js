const express = require("express")
const router = express.Router()
const {addLeave,viewLeave,viewStudent,viewLeaveLecture}= require("../controllers/leave")
const {isLogined,customRole} = require("../middleware/user")

router.route("/addleave").post(isLogined ,addLeave)
router.route("/viewleaveuser").get(viewLeave);
router.route("/viewleavelecture").get(isLogined ,customRole("lecture"),viewLeaveLecture);
router.route("/viewleavestudent").get(isLogined ,customRole("lecture"),viewStudent);

// customRole
module.exports = router;