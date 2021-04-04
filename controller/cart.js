

const Cart = require("../models/cart")

const Product = require("../models/product")

exports.postCart = (req, res) => {
  
    const carts = req.body

    Cart.create(carts,(err, cart) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.status(200).json(cart)
    })
};

exports.getCart = async (req, res) => {

    const cart = await Cart.
    find({}).
    populate({ path: 'product.product_id',
    model: 'Products'});

    if(cart !== null && cart !== '' && cart.length !== 0) {
        res.status(200).send(cart)
     }
     else{
         res.status(401).json("cart is empty")
     }
  
};