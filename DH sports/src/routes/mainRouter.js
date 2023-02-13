const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.index);

router.get('/register', mainControllers.register);



router.get('/productdetail', mainControllers.productdetail);

router.get('/productcart', mainControllers.productcart);

router.get('/productedit', mainControllers.productedit);

//Rutas Api
router.get('/api', mainControllers.index);

router.get('/api/productdetail', mainControllers.productdetail);

module.exports = router;