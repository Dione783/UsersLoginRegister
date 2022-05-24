const Joi = require("@hapi/joi");

const registerValidation = (data)=>{
    const schema = Joi.object({
        name:Joi.string().required().min(3).max(25),
        email:Joi.string().required().min(4).max(25),
        password:Joi.string().required().min(6).max(100),
    })
    return schema.validate(data);
    
}

const loginValidation = (data)=>{
    const schema = Joi.object({
        email:Joi.string().required().min(4).max(25),
        password:Joi.string().required().min(6).max(100),
    })
    return schema.validate(data);
}

module.exports = {loginValidation,registerValidation};