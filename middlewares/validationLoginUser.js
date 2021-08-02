const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const userModel = require('../models/usersModel')
// FIXME: CRUD DB sprint 06, requerir modelos users de DB
/* const { User } = requiere ('../database/models') */

const validationLoginUser = [
    body('email')
        .notEmpty()
        .withMessage('Por favor ingrese su e-mail')
        .isEmail()
        .withMessage('No es en formato e-mail'),
    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese su password')
        .bail()
        //Eliminar cuando este preparado el sequelize
        .custom((value, { req }) => {
            const { email, password } = req.body
            
            // encontrar un usuario con el email
            const userFound = userModel.findByField('email', email)

            // chequear que userFound exista
            if (userFound) {

                // comparar contraseñas
                const passwordMatch = bcrypt.compareSync(password, userFound.password)

                if (passwordMatch) {
                    return true
                }
            }

            return false
        })
        .withMessage('El usuario o la contraseña son inválidas'),  
        // FIXME: CRUD DB sprint 06, requerir modelos users de DB
        /* .custom((value, { req }) => {
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
 */]

module.exports = validationLoginUser