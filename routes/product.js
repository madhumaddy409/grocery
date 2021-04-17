var express = require("express")
var router = express.Router()

const { postProduct, getProduct , postFakerProduct ,deleteProduct, getByIdProduct } = require("../controller/product")



router.post("/product", postProduct)

router.get("/product", getProduct)


router.post("/faker/product", postFakerProduct)

router.delete("/product", deleteProduct)

router.post("/product/details", getByIdProduct);

module.exports = router