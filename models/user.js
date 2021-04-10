const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var userSchema = new Schema(
    {
        phoneNumber: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        createdOn: { 
            type: Date, 
            default: Date.now 
        },
        updatedOn: { 
            type: Date, 
            default: Date.now 
        } 

    })

    module.exports = mongoose.model("User", userSchema)