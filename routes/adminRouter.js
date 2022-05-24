const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authController = require("../controllers/authController");

router.get('/',authController,async(req,res)=>{
    try{
        if(req.user.admin == true){
            res.status(201).send("Connectado como admin");
        }else{
            res.status(401).send("Erro");
        }
    }catch(err){
        res.send(err);
    }
})
router.get("/free",authController,(req,res)=>{
    res.send("Free user");
})


module.exports = router;