const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const multer = require('multer');
const path = require('path');
const { check }= require('express-validator');

//Middlewares de validaciones
// const uploadFile = require("../middlewares/avatar");
const validations = require('../middlewares/validaciones');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/avatars');
    },
    filename: function (req, file, cb) {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, file.originalname);
    }
  });

const uploadFile = multer({ storage: storage });

const router = express.Router();

router.get('/login', guestMiddleware, usersControllers.login);
router.post('/login', usersControllers.processLogin);

router.get('/register', guestMiddleware, usersControllers.register);
router.post('/register', uploadFile.single('avatar'), validations, usersControllers.processRegister);

router.get('/profile', authMiddleware, usersControllers.profile)

router.get('/logout', usersControllers.logout);


module.exports = router