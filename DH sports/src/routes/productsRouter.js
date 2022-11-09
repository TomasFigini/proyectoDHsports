const express = require('express');
const productsControllers = require('../controllers/productsControllers');


const router = express.Router();

router.get('/', productsControllers.index);
router.get('/detail/:id', productsControllers.detail);

router.get('/edit', productsControllers.edit);
router.post('/', productsControllers.crear);

router.put('/:id', productsControllers.cambio);

router.delete('/:id', productsControllers.borrar);

module.exports = router

