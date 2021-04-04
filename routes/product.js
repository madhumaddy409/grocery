var express = require("express")
var router = express.Router()

const { postProduct, getProduct , postFakerProduct} = require("../controller/product")



router.post("/product", postProduct)

router.get("/product", getProduct)


router.post("/faker/product", postFakerProduct)

// router.get("/product/:productId", getByIdProduct);

module.exports = router