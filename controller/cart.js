

const Cart = require("../models/cart")

const Product = require("../models/product")

exports.postCart = async (req, res) => {
  
    const carts = req.body

    const userId = carts.user_id
    

    console.log(userId,'test')

    let cart = await Cart.findOne({
        user_id : userId
      });
      if (cart){

        console.log(cart._id)
        try {
            var cartProd = await Cart.findById(cart._id)
            cartProd.set(req.body);
            var result = await cartProd.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
      
    }else{
            Cart.create(carts,(err, cart) => {
            if(err) {
                return res.status(400).json({
                    err: "Data not saved in DB"
                })
            }
                res.status(200).json(cart)
            })
    }
  
};

exports.getCart = async (req, res) => {
    
    const userId = req.body

    console.log(userId)

    const cart = await Cart.
    find(userId).
    populate({ path: 'product.product_id',
    model: 'Products'});

    if(cart !== null && cart !== '' && cart.length !== 0) {
        res.status(200).send(cart)
     }
     else{
         res.status(401).json("cart is empty")
     }
  
};