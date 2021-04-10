var express = require("express")
var router = express.Router()

const { postVarificationLogin } = require("../controller/verificationLogin")



router.post("/verification", postVarificationLogin)



module.exports = router