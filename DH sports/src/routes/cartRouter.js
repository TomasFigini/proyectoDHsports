const express = require('express');
const cartControllers = require('../controllers/cartControllers');


const router = express.Router();

router.get('/productcart', cartControllers.index);
//router.post('/productcart', cartControllers.add)

module.exports = router