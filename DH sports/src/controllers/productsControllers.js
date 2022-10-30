const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

let productsControllers = {
    index: (req, res) => {
        res.render('products/products', {products})
    },
    detail: (req, res) => {
        res.render('products/productdetail')
    },
    edit: (req, res) => {
        res.render('products/editorproducto')
    }
}

module.exports = productsControllers