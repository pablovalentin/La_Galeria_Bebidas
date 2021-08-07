const { body } = require('express-validator')
//FIXME: Modelo viejo sin sequelize
const { User } = require ('../database/models')
/* const userModel = require('../models/usersModel') */
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
        .custom(async (value, { req }) => {
            const { email } = req.body
            
            // encontrar un usuario con el email
            const userFound = await User.findOne({
                where: {
                    email
                }
            })

            if (userFound) {
                console.log(userFound)
            }
        }),

    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese una contraseña.')
        .bail(),
        /* .isStrongPassword()
        .whitMessage ('Ingrese una contraseña valida.') */
        
    body('passwordConfirmation')
        .custom((value, {req}) => {
            const {password} = req.body
            if (value !== password) {
                throw new Error('Las contraseñas no coinciden.')
            }
            return true
        }),
        /* .isStrongPassword()
        .withMessage('Por favor ingrese un password etc') */
        
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