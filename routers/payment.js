const express = require("express")
const router = express.Router()

const {paymentcollegefree,addNewPayment,findPaymentList,checkstatus,findPaymentPendingCount} = require("../controllers/payment")
const {isLogined,customRole} = require("../middleware/user")
router.route("/payment/:id").get( isLogined,paymentcollegefree);
router.route("/addpayment").post(isLogined, addNewPayment);
router.route("/getpaymentlist/:sid").get(isLogined, findPaymentList);
router.route("/findpaymentpendingcount/:sid").get(isLogined,findPaymentPendingCount);
router.route("/findpaymentadded/lecturer/:sid").get(isLogined,findPaymentPendingCount);

router.route("/checkstatus/:id").get(isLogined ,checkstatus);

module.exports = router;