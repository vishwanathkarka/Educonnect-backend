const express = require("express")
const router = express.Router()
const {SectionItem,ListSectionItem}= require("../controllers/section")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addsection").post(SectionItem)
router.route("/listsection").get(ListSectionItem)
module.exports = router;
