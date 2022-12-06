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
    create: (req, res) => {
        res.render('products/create', {products})
    },

    store: (req, res) => {

        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const data = req.body;

        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            ...data,
            image: req.file ? req.file.filename : 'default-image.png'
        };

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('productCreate', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        res.redirect('/products');
    },

    cambio:(req,res)=>{

    },

    delete: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const id = req.params.id;

        const product = products.find(product => product.id == id);

        res.render('productDelete', { product });
    },
    destroy: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const id = req.params.id;

        const product = products.find(product => product.id == id);

        const index = products.indexOf(product);

        products.splice(index, 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        res.redirect('/products');
    }
}

module.exports = productsControllers