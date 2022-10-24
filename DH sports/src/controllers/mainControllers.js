const path = require('path');

let mainControllers = {

    index:(req,res) => {
        res.render('index');
    },

    register:(req,res) => {
        res.render('users/register');
    },

    login:(req,res) => {
        res.render('users/login');
    },

    productcart:(req,res) => {
        res.render('products/productcart');
    },

    productdetail:(req,res) => {
        res.render('products/productdetail');
    },

    productedit:(req,res) => {
        res.render('products/editorProducto');
    }
}

module.exports = mainControllers;