const path = require('path');

let productsControllers = {
    index: (req, res) => {
        res.render('products/products')
    },
    detail: (req, res) => {
        res.render('products/productdetail')
    },
    edit: (req, res) => {
        res.render('products/editorproducto')
    }
}

module.exports = productsControllers