require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require("./routes/userRouter")
const adminRouter = require("./routes/adminRouter");
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_CONNECTION,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("TD Ok");
    }
});

app.use('/user',express.json(),userRouter);
app.use('/admin',express.json(),adminRouter);

app.listen(process.env.PORT,()=>{
    console.log("Connectado na porta:"+3000);
})