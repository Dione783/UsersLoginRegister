const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {loginValidation,registerValidation} = require("../models/Verification");

const controller = {
    login:async (req,res)=>{
        const {error} = loginValidation(req.body);
        if(error){
            return res.status(400).send(error.message);
        }
        const user = await User.findOne({email:req.body.email})
        try{
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    const token = jwt.sign({id:user.id,admin:user.admin},process.env.TOKEN_SECRET);
                    res.header("Token-Secret",token);
                    res.status(200).send("Usuario encontrado");
                }else{
                    res.status(400).send("Senha incorreta");
                }
            }else{
                return res.status(400).send("Not find user");
            }
        }catch(err){
            res.send(err);
        }
    },
    register:async (req,res)=>{
        const {error} = registerValidation(req.body);
        if(error) return res.status(400).send(error.message);

        const userEmail = await User.findOne({email:req.body.email});
        if(userEmail){
            return res.status(400).send("Email already exists");
        }
        let password = req.body.password;
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:bcrypt.hashSync(password)
        });
        try{
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(400).send("Erro de registro");
        }
    },
}

module.exports = controller;