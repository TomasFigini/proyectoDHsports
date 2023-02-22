const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.index);
router.get('/api', mainControllers.api);

router.get('/register', mainControllers.register);

router.get('/productdetail', mainControllers.productdetail);

router.get('/productcart', mainControllers.productcart);

router.get('/productedit', mainControllers.productedit);


module.exports = router;