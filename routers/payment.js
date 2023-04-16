const express = require("express")
const router = express.Router()

const {paymentcollegefree,addNewPayment,findPaymentList,checkstatus} = require("../controllers/payment")
const {isLogined,customRole} = require("../middleware/user")
router.route("/payment/:id").get(paymentcollegefree);
router.route("/addpayment").post(addNewPayment);
router.route("/getpaymentlist/:sid").get(findPaymentList);
router.route("/checkstatus/:id").get(checkstatus);

module.exports = router;