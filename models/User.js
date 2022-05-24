const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{type:String,minlength:3,maxlength:58},
    email:{type:String,unique:true,required:true,minlength:3,maxlength:100},
    password:{type:String,required:true,minlentgh:6,maxlength:80},
    admin:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now}
})

const user = mongoose.model("UserModel",userSchema);

module.exports = user;