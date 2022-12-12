const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const multer = require('multer');
const path = require('path');
const { check }= require('express-validator');

const validations = [
    // Validación del campo "nombre"
    check('nombre').notEmpty().withMessage('El campo nombre es obligatorio'),
    // Validación del campo "apellido"
    check('apellido').notEmpty().withMessage('El campo apellido es obligatorio'),
    // Validación del campo "dni"
    check('dni').isNumeric().withMessage('El campo dni debe ser un número'),
    // Validación del campo "email"
    check('email').isEmail().withMessage('El campo email debe ser una dirección de correo electrónico válida'),
    // Validación del campo "fecha_nacimiento"
    check('fecha').isISO8601().withMessage('El campo fecha de nacimiento debe tener un formato válido (YYYY-MM-DD)'),
    // Validación del campo "contraseña"
    check('password').notEmpty().withMessage('El campo contraseña es obligatorio'),
    // Validación del campo "repetir_contraseña"
    check('repitpassword').custom((value, { req }) => value === req.body.contraseña).withMessage('El campo repetir contraseña debe ser igual a "contraseña"')
]

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

router.get('/login', usersControllers.login);

router.get('/register', usersControllers.register);
router.post('/register',uploadFile.single('avatar'),validations, usersControllers.processRegister);

module.exports = router