const { body } = require('express-validator')
const { User } = require ('../database/models')
const { isFileImage } = require('../helpers/file')
const bcrypt = require ('bcryptjs');

const validationRegisterUser = [
    body('name')
        .notEmpty()
        .withMessage('Por favor ingrese su nombre.')
        .bail()
        .isLength({ min: 2 })
        .withMessage('Por favor ingrese un nombre más largo.'),
    body('lastName')
        .notEmpty()
        .withMessage('Por favor ingrese su apellido.')
        .bail()
        .isLength({ min: 2 })
        .withMessage('Por favor ingrese un apellido más largo.'), 
    body('email')
        .notEmpty()
        .withMessage('Por favor ingrese su e-mail.')
        .isEmail()
        .withMessage('No es en formato e-mail.')
        .bail()
        .custom(async (value, { req }) => {
            const { email, password } = req.body
            
            // encontrar un usuario con el email
            const userFound = await User.findOne({
                where: {
                    email
                }
            })
            // chequear que userFound exista
            if (userFound) {
                return Promise.reject('El usuario ya está registrado');
            }
        }),

    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese una contraseña.')
        .bail()
        .isLength({ min: 8 })
        .withMessage('La contraseña debe ser de al menos 8 caracteres.'), 
        
    body('passwordConfirmation')
        .custom((value, {req}) => {
            const {password} = req.body
            if (value !== password) {
                throw new Error('Las contraseñas no coinciden.')
            }
            return true
        }),
        
    body('profileImage')
        .custom((value, { req }) => {
            const { file } = req
            // chequea que haya cargado imagen
            if (!file) {
                throw new Error('Por favor ingrese una foto de perfil.')
            }
            if (!isFileImage(file.originalname)) {
                // disparar error
                throw new Error('Por favor ingrese un archivo válido.')
            }
            
            return true
        })
]

module.exports = validationRegisterUser