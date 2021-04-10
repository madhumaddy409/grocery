

const Otp = require("../models/otp")
const user = require("../models/user")
const User = require("../models/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.postVarificationLogin = async (req, res)=>{
    const user = req.body
  

    console.log()
       const otp = await Otp.find({otp:user.otp})
    
       
       if(otp.length === 0){
           res.status(401).json({
               "error":{
                   "message":"invalid otp"
               }
           })
       }else{
           //register and login

        let users = await User.findOne({
            phoneNumber:otp[0].phoneNumber

        });
        if (users) {
            return res.status(400).json({
                msg: "phonenumber Already Exists"
            });
        }

        let username = await User.findOne({
            username: user.username

        });

        if (username) {
            return res.status(400).json({
                msg: "username Already Exists"
            });
        }
           


        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        var resUser ={
            phoneNumber: otp[0].phoneNumber,
            username: user.username,
            password: user.password
        }

        

        User.create(resUser,(err, user) => {
            if(err) {
                return res.status(400).json({
                    err: "Data not saved in DB"
                })
            }

            try{

                const payload = {
                    user: {
                        phoneNumber: otp[0].phoneNumber,
                        username: user.username,
                        id: user._id
                    }
                };
        
        
                console.log(payload)
                
            //storing user details to JWT
                    jwt.sign(
                        payload,
                        "randomString", {
                            expiresIn: 10000
                        },
                        (err, token) => {
                            if (err) throw err;
                            res.status(200).json({
                                token
                            });
                        }
                    );
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Error in Saving");
            }
                
        })

    

       }


         
    

}