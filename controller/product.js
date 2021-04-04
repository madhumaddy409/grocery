

const Product = require("../models/product")

var faker = require('faker');

exports.postProduct = (req, res) => {
  
    const products = req.body

    Product.create(products,(err, product) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.status(200).json(product)
    })
};

exports.getProduct = async (req, res) => {

    const products = await Product.find({})
    if(products !== null && products !== '' && products.length !== 0) {
        res.status(200).send(products)
     }
     else{
         res.status(401).json("there is no products")
     }
  
};

exports.postFakerProduct = async (req, res) => {
    const product = await{ "name" : faker.fake("{{commerce.product}}"),
    "productImage" : "./src/img",
    "category" : faker.fake("{{commerce.department}}"),
    "description" : faker.fake("{{commerce.productDescription}}"),
    "brand" : faker.fake("{{company.companyName}}"),
    "price" : faker.fake("{{commerce.price}}"),
    "quantity" : 50,
    "status" : "Active",
}
    const products = req.body

    Product.create(products,(err, product) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.status(200).json(product)
    })

};

exports.deleteProduct = async (req, res) => {

    const { id } = req.body
    try {
        Product.findByIdAndDelete(id)
        res.status(200).json({ message: "product removed" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }

    

}

