const path = require('path');
const { validationResult }= require('express-validator');
const User = require('../models/Users');

const bcryptjs = require('bcryptjs')

let usersControllers = {
    register:(req, res) => {
        res.render('users/register');
    },
    processRegister:(req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });            
        }

        let userInDb = User.findByField('email', req.body.email);
        
        if (userInDb) {
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            repitpassword: bcryptjs.hashSync(req.body.repitpassword, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);
        
        res.redirect('/users/login');
    },
    login:(req,res) => {
        res.render('users/login');
    },
    processLogin: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (isOkPassword){
                return res.redirect('profile')
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            })
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'El email ingresado no se encuentra registrado'
                }
            }
        })
    },
    profile:(req, res) => {
        res.render('users/profile');
    }
}

module.exports = usersControllers