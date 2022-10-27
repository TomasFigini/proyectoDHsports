const path = require('path');

let usersControllers = {
    login:(req,res) => {
        res.render('users/login');
    },
    register:(req, res) => {
        res.render('users/register')
    }
}

module.exports = usersControllers