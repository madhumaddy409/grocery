const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require("mongoose")


const app = express()

mongoose.connect('mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/grocery?retryWrites=true&w=majority', 
{ useNewUrlParser: true ,
useUnifiedTopology: true 
})
.then(() => {
    console.log("DB CONNECTED")
})
.catch(() => {
    console.log("DB not connected")
});

const prodRoutes = require("./routes/product")
const cartRoutes = require("./routes/cart")
const smsRoutes = require("./routes/sms")
const verificationRoutes = require("./routes/verificationLogin")

//MiddleWares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


//Routes
app.use("/api", prodRoutes)
app.use("/api", cartRoutes)
app.use("/api", smsRoutes)
app.use("/api", verificationRoutes)

const port = Number(process.env.PORT || 3000)

app.listen(port, () =>{
    console.log(`server is started at port ${port}`)
})