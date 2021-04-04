const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var cartSchema = new Schema(
    {
        product:[{
            _id: false,
            product_id:{
            type: Schema.Types.ObjectId,
            ref:"Products"
            },
            quantity:{
                type: Number,
                required:true
            }
        }],
        user_id:{
            type: String
        },
        
    }
);

module.exports = mongoose.model("cartProducts", cartSchema)