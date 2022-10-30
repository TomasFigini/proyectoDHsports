const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

let mainControllers = {

    index:(req,res) => {
        res.render('index', { products });
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