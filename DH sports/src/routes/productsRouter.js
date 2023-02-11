const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

//Middlewares
const uploadFile = require("../middlewares/productImageMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/search", productsControllers.search); 

router.get('/', productsControllers.index);
router.get('/detail/:id', productsControllers.detail);

router.get('/create', productsControllers.create);
router.post('/', uploadFile.single('archivo'), productsControllers.store);

router.get('/:id/edit',authMiddleware, productsControllers.edit);
router.post('/:id/edit', uploadFile.single('archivo'), productsControllers.update);

router.get('/:id/delete', productsControllers.delete);
router.post('/:id/delete', productsControllers.destroy);

module.exports = router

