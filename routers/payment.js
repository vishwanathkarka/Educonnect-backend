const express = require("express")
const router = express.Router()

const {paymentcollegefree,addNewPayment} = require("../controllers/payment")
const {isLogined,customRole} = require("../middleware/user")
router.route("/payment").post(paymentcollegefree);
router.route("/addpayment").post(isLogined,addNewPayment);

module.exports = router;