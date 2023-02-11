const { check } = require('express-validator');

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
    check('password')
    .notEmpty().withMessage('El campo contraseña es obligatorio')
    .isLength({min: 8}).withMessage('El campo tiene que ser mayor a 8 caracteres'),
    // Validación del campo "repetir_contraseña"
    check('repitpassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden');
      }
      return true;
    }),
    // Validacion del avatar
    check('avatar').custom((value, { req }) => {
      let file = req.file
      if(!file){
        throw new Error('Tienes que subir una imagen');
      }
      return true;
    })
];

function validate(req, res, next) {
  Promise.all(validations.map(validation => validation.run(req)))
    .then(() => next())
    .catch(errors => res.status(400).json({ errors }));
}

module.exports = validate;