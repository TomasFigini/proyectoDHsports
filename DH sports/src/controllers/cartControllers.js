const path = require('path');

let cartControllers = {
    index: (req, res) => {
        res.render('products/productCart')
    }
}

module.exports = cartControllers