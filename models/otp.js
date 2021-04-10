const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var otpSchema = new Schema(
    {
        phoneNumber: {
            type: String
        },
        otp: {
            type: String
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

    module.exports = mongoose.model("Otp", otpSchema)