const { body } = require('express-validator')
const { isFileImage } = require('../helpers/file')
const { Variety, Category} = require ('../database/models')

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
    body('categoryId')
        .custom((categoryId) => {
            const idCategory = Number(categoryId) ? Number(categoryId) : null
            return Category.findByPk(idCategory)
                .then(function (category) {
                    if(!category){
                        return Promise.reject('La categoría no es válida')
                    }
                })
                
        }),
        body('varietyId')
        .custom((varietyId) => {
            const idVariety = Number(varietyId)  ? Number(varietyId) : null 
            return Variety.findByPk(idVariety)
                .then(function (variety) {
                    if(!variety){
                        return Promise.reject('La variedad no es válida')
                    }
                })
                
        }),
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