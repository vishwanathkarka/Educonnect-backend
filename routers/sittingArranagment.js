const express = require("express")
const router = express.Router()
const {addSittingArrangement} = require("../controllers/sittingAttangment")
const {isLogined,customRole} = require("../middleware/user")

router.route("/addSittingArrangement").post(isLogined,addSittingArrangement)

module.exports = router;