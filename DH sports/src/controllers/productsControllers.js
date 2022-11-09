const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

let productsControllers = {
    index: (req, res) => {
        res.render('products/products', {products})
    },
    detail: (req, res) => {
        let productId = req.params.id;
        let product = products.find(product => product.id == productId)
        res.render('products/productDetail', {product})
    },
    edit: (req, res) => {
        res.render('products/editorProducto', {products})
    },

    crear:(req,res)=>{

    },

    cambio:(req,res)=>{

    },

    borrar:(req,res)=>{

    }
}

module.exports = productsControllers