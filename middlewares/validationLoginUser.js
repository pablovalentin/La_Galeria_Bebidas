const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const { User } = require ('../database/models')

const validationLoginUser = [
    body('email')
        .notEmpty()
        .withMessage('Por favor ingrese su e-mail')
        .isEmail()
        .withMessage('No es en formato e-mail'),
    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese una contraseña valida')
        .bail()
        .custom((value, { req }) => {
            const { email, password } = req.body
            
            return User.findOne({
                where: { 
                    email
                }
            })
                .then(userFound => {
                    
                    if (userFound) {

                        const passwordMatch = bcrypt.compareSync(password, userFound.password)

                        if (!passwordMatch) {
                            return Promise.reject ('El usuario o la contraseña son inválidas');
                        }
                    }else{
                        return Promise.reject ('El usuario o la contraseña son inválidas');
                    }
                })
            })
        ]


module.exports = validationLoginUser