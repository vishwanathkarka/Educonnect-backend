const express = require("express")
const router = express.Router()
const {Signup,login,getAdmin,getUser,updateRole,getUserRole,getAllUserRole} = require("../controllers/user")
const {isLogined,customRole} = require("../middleware/user")

router.route("/signup").post(Signup)
router.route("/login").post(login)
router.route("/getadmins").get(isLogined,getAdmin)
router.route("/getusers").get(isLogined,getUser)
router.route("/updaterole").put(isLogined,customRole("admin"),updateRole)
router.route("/viewrole").post(isLogined,customRole("admin"),getUserRole)
router.route("/getallroles").post(isLogined,customRole("admin"),getAllUserRole)
module.exports = router;