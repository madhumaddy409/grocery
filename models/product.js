const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var productSchema = new Schema(
    [{
        name:{
            type: String,
            required: true,
            maxlength: 30,
            trim: true
        },
        productImage:{
            type: String,
    
        },
        category: {
            type: String,
            required: true,
            maxlength: 50,
            trim: true
            
        },
        description: {
            type: String,
            required: true,
            trim: true

        },
        brand: {
            type: String,
            required: true,
            trim: true

        },
        price:{
            type: Number,
            required: true

        },
        quantity:{
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true 

        },
        createdOn: { 
            type: Date, 
            default: Date.now 
        },
        updatedOn: { 
            type: Date, 
            default: Date.now 
        }          
    }]
);

module.exports = mongoose.model("Products", productSchema)