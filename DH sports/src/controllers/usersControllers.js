const path = require('path');
const { validationResult, cookie } = require('express-validator');
const bcrypt = require('bcryptjs');

const { Sequelize } = require('../database/models');
const db = require('../database/models');
const Op = Sequelize.Op;

let usersControllers = {
    index: (req, res) => {
        db.User.findAll({
            raw: true
        })       
        .then(users => {
            let respuesta = {            
                data: users
            }
            res.json(respuesta);
        })
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
                    res.render("users/profile");
                    }else {
                        res.render("register", {
                            msg: "Ya existe un usuario registrado con esos datos",
                            oldData: req.body
                        })
                    }
                })
        }
    },

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
                        let comparacionPassword = bcrypt.compareSync(req.body.password, busquedaEmail.password)
                        if (comparacionPassword) {
                            delete busquedaEmail.password
                            req.session.usuarioLogueado = busquedaEmail
                            if (req.body.recordame != undefined) {
                                res.cookie("recordame", busquedaEmail.email,
                                    { maxAge: 6000 })
                            }
                            res.redirect("/products")
                        } else { res.render("login", { passwordIncorrecto: "La contraseña es incorrecta" }) }

                    } else { res.render("login", { emailInvalido: "El email ingresado no se encuentra registrado" }) }
                })

        } else {

            return res.render("login", {
                errors: errors.mapped(),
                oldData: req.body
            })
        }

    },

    profile:(req, res) => {
        res.render('users/profile', {
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