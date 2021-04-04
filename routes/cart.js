var express = require("express")
var router = express.Router()

const { postCart, getCart } = require("../controller/cart")



router.post("/cart", postCart)

router.get("/cart", getCart)



// router.get("/product/:productId", getByIdProduct);

module.exports = router