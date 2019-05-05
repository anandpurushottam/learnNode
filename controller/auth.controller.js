const bcrypt = require('bcrypt-nodejs');
const response = require('../response');
const User = require('../model/User');
const jwt = require('jsonwebtoken');

const Joi = require('@hapi/joi');

function validateUser(data) {
    const schema = {
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(4).max(16).required(),
    };
    return Joi.validate(data, schema);
}


exports.signup = function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let last_name = req.body.last_name;
    let first_name = req.body.first_name;

    const validation = validateUser(req.body);
    if (validation.error) {
        const data = {
            success: false,
            message: 'failed',
            data: {
                name: validation.error.name,
                message: validation.error.details[0].message,
            }
        }
        response(res, 400, data);
        return;
    }
    User.findOne({
        attributes: ['email'],
        where: {
            email: email
        }
    }).then(exists => {
        if (exists) {
            const data = {
                success: false,
                message: 'failed',
                data: {
                    message: "email_exists"
                }
            }
            response(res, 401, data);
        } else {
            let createObj = {};
            createObj['email'] = req.body.email;
            createObj['password'] = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
            createObj['first_name'] = first_name;
            createObj['last_name'] = last_name;
         
            User.create(createObj).then(user => {
                // console.log(JSON.stringify(user, null, 4));
                const token = jwt.sign({id : user._id}, "somesupessfnja", {
                    //expiresIn: 86400 // expires in 24 hours
                });
            
                    const data = {
                        success: true,
                        message: 'sucess',
                        data: {
                            first_name:user.first_name,
                            last_name:user.last_name,
                            email:user.email,
                            ceatedAt:user.ceatedAt,
                            token:token
                        }
                    }
                    response(res, 200, data);
                
            });
        }
    }).catch(err => {
        if (err) {
            const data = {
                success: false,
                message: 'failed',
                data: err.message
            }
            response(res, 500, data);
            return;
        }
    });
}



