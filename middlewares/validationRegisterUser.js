const { body } = require('express-validator')
const userModel = require('../models/usersModel')
const { isFileImage } = require('../helpers/file')


const validationRegisterUser = [
    body('name')
        .notEmpty()
        .withMessage('Por favor ingrese su nombre.'),
    body('lastName')
        .notEmpty()
        .withMessage('Por favor ingrese su apellido.'),    
    body('email')
        .notEmpty()
        .withMessage('Por favor ingrese su e-mail.')
        .isEmail()
        .withMessage('No es en formato e-mail.')
        .bail()
        .custom((email) => {
            const userFound = userModel.findByField('email', email)
            if (userFound) {
                return false
            }
            return true
        })
        .withMessage('El usuario ya existe.'),
    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese una contraseña.')
        .bail(),
    body('passwordConfirmation')
        .custom((value, {req}) => {
            const {password} = req.body
            if (value !== password) {
                throw new Error('Las contraseñas no coinciden.')
            }
            return true
        })
        /* .isStrongPassword()
        .withMessage('Por favor ingrese un password etc') */
        ,
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

            // chequea que la extensión sea la correcta
            
            return true
        }) 
]

module.exports = validationRegisterUser