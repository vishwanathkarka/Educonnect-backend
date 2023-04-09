const express = require("express")
const router = express.Router()
const {Signup,findEmail,login,getAdmin,getUser,updateRole,getUserRole,getAllUserRole,getAllUserForAttendance,addDepartmentForUser} = require("../controllers/user")
const {isLogined,customRole} = require("../middleware/user")

router.route("/signup").post(Signup);
router.route("/findemail").get(findEmail);
router.route("/login").post(login);
router.route("/getadmins").get(isLogined,getAdmin);
router.route("/getusers").get(isLogined,getUser);
router.route("/updaterole").put(isLogined,customRole("admin"),updateRole);
router.route("/viewrole").post(isLogined,customRole("admin"),getUserRole);
router.route("/getallroles").post(isLogined,customRole("admin"),getAllUserRole);
router.route("/getalluserforattendance").get(getAllUserForAttendance);
router.route("/adddepartmentforuser/:id").put(addDepartmentForUser);

module.exports = router;
