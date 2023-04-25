const express = require("express")
const router = express.Router()
const {addLeave,viewLeave,viewStudent,viewLeaveLecture,updatePermission,deletePermission,updatePermissionuser,permissionPendingCount}= require("../controllers/leave")
const {isLogined,customRole} = require("../middleware/user")

router.route("/addleave").post(isLogined ,addLeave)
router.route("/viewleaveuser/:id").get(isLogined,viewLeave);
router.route("/permissionpendingcount/:id").get(isLogined,permissionPendingCount);
router.route("/viewleavelecture").get(isLogined ,customRole("lecturer"),viewLeaveLecture);
router.route("/viewleavestudent").get(isLogined,viewStudent);
router.route("/updateleave/:id").put(isLogined,updatePermission);
router.route("/updateleavestudent/:id").put(isLogined,updatePermissionuser);
router.route("/deleteleave/:id").delete(isLogined,deletePermission);

// customRole
module.exports = router;