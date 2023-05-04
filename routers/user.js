const express = require("express")
const router = express.Router()
const {Signup,findEmail,login,getAdmin,getUser,updateRole,getUserRole,getAllUserRole,getAllUserForAttendance,addDepartmentForUser,addSectionInDepartment,getuserInfoWithId,getusersforAdmin,updateUserData} = require("../controllers/user")
const {isLogined,customRole} = require("../middleware/user")
router.route("/signup").post(Signup);
router.route("/findemail").get(isLogined,findEmail);
router.route("/login").post(login);
router.route("/getadmins").get(isLogined,getAdmin);
router.route("/getusers").get(isLogined,getUser);
router.route("/updaterole").put(isLogined,customRole("Admin"),updateRole);
router.route("/viewrole").post(isLogined,customRole("Admin"),getUserRole);
router.route("/getallroles").post(isLogined,customRole("Admin"),getAllUserRole);
router.route("/getalluserforattendance").post(getAllUserForAttendance);
router.route("/adddepartmentforuser/:id").put(addDepartmentForUser);
router.route("/addsectionindepartment/:id/:department").put(addSectionInDepartment);
router.route("/getuserinfowithid/:id").get(getuserInfoWithId);
router.route("/getusersforadmin/:department/:section/:role").get(isLogined,customRole("Admin"),getusersforAdmin);
router.route("/updateuserdata/:id").put(isLogined,customRole("Admin"),updateUserData)


module.exports = router;
