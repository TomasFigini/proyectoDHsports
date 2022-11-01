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
        res.render('products/productdetail', {product: product})
    },
    edit: (req, res) => {
        res.render('products/editorproducto', {products})
    }
}

module.exports = productsControllers