const path = require('path');
const { validationResult }= require('express-validator');
//asdasd
let usersControllers = {
    login:(req,res) => {
        res.render('users/login');
    },

    register:(req, res) => {
        res.render('users/register');
    },
    processRegister:(req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        res.redirect('/index');
    }
}

module.exports = usersControllers