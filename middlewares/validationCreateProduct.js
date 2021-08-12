const { body } = require('express-validator')
const { isFileImage } = require('../helpers/file')


const validationCreateProduct = [
    body('name')
        .notEmpty()
        .withMessage('Por favor ingrese el nombre del producto.')
        .bail()
        .isLength({ min: 5 })
        .withMessage('Por favor ingrese un nombre más largo.'),
    body('description')
        .notEmpty()
        .withMessage('Por favor ingrese una descripción para el producto.')
        .bail()
        .isLength({ min: 20 })
        .withMessage('Por favor ingrese una descripción más larga.'),
    body('image')
        .custom((value, { req }) => {
            const { file } = req
            console.log(file)
            // chequea que haya cargado imagen
            if (!file) {
                throw new Error('Por favor ingrese una imagen para el producto.')
            }
            if (!isFileImage(file.originalname)) {
                // disparar error
                throw new Error('Por favor ingrese un archivo válido.')
            }
            
            return true
        })
        
]

module.exports = validationCreateProduct; 