const express = require('express');
const cartControllers = require('../controllers/cartControllers');


const router = express.Router();

router.get('/:idPorducto')

module.exports = router