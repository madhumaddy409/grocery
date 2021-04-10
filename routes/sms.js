var express = require("express")
var router = express.Router()

const { postSms } = require("../controller/sms")



router.post("/sms", postSms)

// router.get("/sms", getSms)



module.exports = router