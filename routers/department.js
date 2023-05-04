const express = require("express")
const router = express.Router()
const {departmentItem,ListDepartmentItem,ListDepartmentItemSpecific}= require("../controllers/department")
const {isLogined,customRole} = require("../middleware/user")
router.route("/adddepartment").post(isLogined,departmentItem);
router.route("/listdepartment").get(ListDepartmentItem);
router.route("/listdepartmentspecific").post(isLogined,ListDepartmentItemSpecific);
module.exports = router;
