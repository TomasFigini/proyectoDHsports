const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

//Middlewares
const uploadFile = require("../middlewares/productImageMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');
const userLogged = require('../middlewares/userLoggedMiddleware')

router.get("/search",userLogged ,productsControllers.search);
 

router.get('/', productsControllers.index);
router.get('/detail/:id',userLogged , productsControllers.detail);

router.get('/create', productsControllers.create);
router.post('/', uploadFile.single('archivo'), productsControllers.store);

router.get('/:id/edit',authMiddleware, productsControllers.edit);
router.post('/:id/edit', uploadFile.single('archivo'), productsControllers.update);

router.get('/:id/delete', productsControllers.delete);
router.post('/:id/delete', productsControllers.destroy);

//// Rutas para API de productos
router.get('/api', productsControllers.index);
router.get('/api/search', productsControllers.search);
router.get('/api/create', productsControllers.create);
router.post('/api/create', productsControllers.store);
router.get('/api/detail/:id', productsControllers.detail);
router.get('/api/edit/:id', productsControllers.edit);
router.put('/api/edit/:id', productsControllers.update);
router.delete('/api/delete/:id', productsControllers.destroy);

module.exports = router

