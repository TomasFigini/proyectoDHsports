const express = require('express');
const productsControllers = require('../controllers/productsControllers');


const router = express.Router();

router.get('/', productsControllers.index)
router.get('/detail', productsControllers.detail)
router.get('/edit', productsControllers.edit)

module.exports = router

