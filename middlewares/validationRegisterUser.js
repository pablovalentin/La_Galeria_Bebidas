const { body } = require('express-validator')
const { User } = require ('../database/models')
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
            const { email, password } = req.body
            
            // encontrar un usuario con el email
            const userFound = await User.findOne({
                where: {
                    email
                }
            })

            // chequear que userFound exista
            if (userFound) {
                // comparar contraseñas
                const passwordMatch = bcrypt.compareSync(password, userFound.password)
                if (!passwordMatch) {
                    return Promise.reject('El usuario o la contraseña son inválidas');
                }
                return true             
            } else {
                return Promise.reject('El usuario o la contraseña son inválidas');
            }
        }),

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

            // chequea que la extensión sea la correcta
            
            return true
        })
]

module.exports = validationRegisterUser