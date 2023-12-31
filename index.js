const mongoose = require("mongoose");
const path = require('path');
const dotenv = require('dotenv').config();


mongoose.connect("mongodb://127.0.0.1:27017/user_management_system", { useNewUrlParser: true, useUnifiedTopology: true });

const express = require("express");
const app   = express();

app.use("/static", express.static(path.join(__dirname, "public")));





const PORT = process.env.PORT || process.env.port

//for user routes
const userRoute = require('./routes/userRoute');
app.use('/',userRoute)

//for admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute)


app.listen(PORT,()=>{
    console.log(`server is running port http://localhost:${PORT}`);
})

//"WORKING"