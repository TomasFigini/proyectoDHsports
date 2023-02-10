const path = require('path');
const { validationResult, cookie } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require("express-session");

const { Sequelize } = require('../database/models');
const db = require('../database/models');
const Op = Sequelize.Op;

const usersControllers = {

    login:(req,res) => {
        res.render('users/login');
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.findAll()
                .then(user => {
                    let busquedaEmail = user.find(u => u.email == req.body.email)
                    if (busquedaEmail) {
                        let comparacionPassword = bcrypt.compareSync(req.body.password, busquedaEmail.contraseña)
                        if (comparacionPassword) {
                            delete busquedaEmail.contraseña
                            req.session.userLogged = busquedaEmail
                            if (req.body.rememberMe != undefined) {
                                res.cookie("recordame", busquedaEmail.email,
                                    { maxAge: 6000 })
                            }
                            res.redirect("profile")
                        } else { res.render('./users/login', { passwordIncorrecto:[{msg:"La contraseña es incorrecta" }]}) }
                    } else { res.render("./users/login", { emailInvalido:[{msg: "El email ingresado no se encuentra registrado"}] }) }
                })
        } else {

            return res.render("/login", {
                errors: errors.mapped(),
                oldData: req.body
            })
        }

    },

    register:(req, res) => {
        res.cookie('testing', 'hola mundo', { maxAge: 1000 * 30});
        res.render('users/register');
    },

    processRegister:(req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });            
        }else{
            db.User.findAll()
                .then(user => {
                    let chequeado = user.find(u => (u.email == req.body.email));
                    if (!chequeado) {
                        db.User.create({
                            nombre: req.body.nombre,
                            apellido: req.body.apellido,
                            dni: req.body.dni,
                            email: req.body.email,
                            contraseña: bcrypt.hashSync(req.body.password, 10),
                            avatar: req.file ? req.file.filename : "systemusers_94754.png",
                            role:"",
                            deleted: 0
                        })
                    res.render("./users/profile");
                    }else {
                        res.render("register", {
                            msg: "Ya existe un usuario registrado con esos datos",
                            oldData: req.body
                        })
                    }
                })
        }
    },

    profile:(req, res) => {
        res.render('./users/profile', {
            user: req.session.userLogged
        });
    },

    logout:(req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = usersControllers;