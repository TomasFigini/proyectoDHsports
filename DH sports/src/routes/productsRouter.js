const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

//Middlewares
const uploadFile = require("../middlewares/productImageMiddleware");


router.get("/search", productsControllers.search); 

router.get('/', productsControllers.index);
router.get('/detail/:id', productsControllers.detail);

router.get('/create', productsControllers.create);
router.post('/', uploadFile.single('archivo'), productsControllers.store);

router.get('/:id/edit', productsControllers.edit);
router.post('/:id/edit', productsControllers.update);

// router.get('/delete/:id', productsControllers.delete);
router.delete('/:id', productsControllers.destroy);

module.exports = router

