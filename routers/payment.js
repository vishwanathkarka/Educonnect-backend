const express = require("express")
const router = express.Router()
const {paymentcollegefree} = require("../controllers/payment")
const {isLogined,customRole} = require("../middleware/user")
router.route("/payment").post(paymentcollegefree);

module.exports = router;