//VALIDATION
const Joi = require('@hapi/joi')


const registerValidation = (data) => {

    //Register Validation Schema
    const reg_schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    //Valiate Data befoe making user
    return reg_schema.validate(data)
}
const loginValidation = (data) => {

    //Register Validation Schema
    const reg_schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    //Valiate Data befoe making user
    return reg_schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
