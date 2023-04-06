const express = require("express")
const router = express.Router()
const {departmentItem,ListDepartmentItem,ListDepartmentItemSpecific}= require("../controllers/department")
const {isLogined,customRole} = require("../middleware/user")
router.route("/adddepartment").post(departmentItem)
router.route("/listdepartment").get(ListDepartmentItem)
router.route("/listdepartmentspecific").post(ListDepartmentItemSpecific)
module.exports = router;
