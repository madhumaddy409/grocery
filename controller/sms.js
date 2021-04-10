const axios = require("axios");
const { response } = require("express");
const NotifmeSdk  = require('notifme-sdk').default;

require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const Otp = require("../models/otp")


exports.postSms =  async (req, res) =>{

    const user = req.body

    

    const otp = Math.floor(100000 + Math.random() * 900000)

    const notifmeSdk = new NotifmeSdk({
        useNotificationCatcher: true,
        channels: {
          sms : {
            providers: [{
              type: 'twilio',
              accountSid: accountSid,
              authToken: authToken
              }]
            }
        }
      })
    
    notifmeSdk.send({
        sms: {
          from: process.env.TWILIO_PHONE_NUMBER,
          to: user.phone,
          text: `please verify you are account using OTP: ${otp}`
        }
      }).then(
        message => {
        //   res.status(200).send(message)
            var otpStore = {
                "phoneNumber":user.phone,
                "otp":otp

            }
            
            //otp already in schema
            console.log(user.phone)
            try{

                Otp.findOne({
                    phoneNumber: user.phone 
                }).then(msg => {
                    if(msg === null)
                    {
                        Otp.create(otpStore,(err, otpres) => {
                        if(err) {
                            return res.status(400).json({
                                err: "Data not saved in DB"
                            })
                        }
                        res.status(200).json(otpres)

                        })
                    }
                    else{
                        
                        Otp.findByIdAndUpdate({_id:msg._id},{otp: otp})
                        .then(msg => {
                        res.send(msg)
                        })
                    }
                })

            }catch (err) {
                console.log(err.message);
                res.status(500).send("Error in Saving");
            }
            
        })
      
}
    

