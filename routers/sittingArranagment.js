const express = require("express")
const router = express.Router()
const {addSittingArrangement,viewSittingPlain,viewSittingPlainAddedLecturer} = require("../controllers/sittingAttangment")
const {isLogined,customRole} = require("../middleware/user")

router.route("/addSittingArrangement").post(isLogined,addSittingArrangement)
router.route("/findsittingarragement/:id").get(isLogined,viewSittingPlain)
router.route("/viewstittingarragmentadded").get(isLogined,customRole("lecturer"),viewSittingPlainAddedLecturer)

module.exports = router;