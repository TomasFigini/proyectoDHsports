const path = require('path');

let usersControllers = {
    login:(req,res) => {
        res.render('users/login');
    },

    register:(req, res) => {
        res.render('users/register');
    },
    create:(req, res) => {
        return res.send({
            body: req.body,
            file: req.file
        });
    }
}

module.exports = usersControllers