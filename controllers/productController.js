const path = require('path');
const fs = require('fs')
const { validationResult } = require('express-validator')
const { Product, Variety, Category} = require ('../database/models')
const { Op } = require('sequelize')

const productController = {
    nuevoProducto: async function(req, res){
        const varieties = await Variety.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        const categories = await Category.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        return res.render('products/newProduct', {varieties, categories})
    },
    ABMProducto: async function(req, res){
        const productsList = await Product.findAll({
            order: [
                ['id', 'ASC'],
            ] ,
            include: [
                {
                    association: 'category'
                }
            ] 
        })

        res.render('products/productABM', {productsList})    
    },
    edit: async function(req,res){
        const formValidation = validationResult(req)
        const { id } = req.params
        const product = await Product.findByPk(id)
        const varieties = await Variety.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        const categories = await Category.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        res.render('products/editProduct', {
            product, varieties, categories
        });
    },
    update: async (req, res) => {
        const { id } = req.params;
        const originalProduct = await Product.findByPk(id)
        const formValidation = validationResult(req)
        
        const oldValues = req.body
        const varieties = await Variety.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        const categories = await Category.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        //res.send(formValidation)
        if (!formValidation.isEmpty()) {
            if (req.file) {
                fs.unlinkSync(req.file.path)
            }
            //res.send(oldValues)
            res.render('products/editProduct', { oldValues, product: originalProduct, varieties,categories, errors: formValidation.mapped() })
        return  
        } 

        const data = req.body;
        
        const { file } = req
        let image
        if (file) {
                    image = '/images/' + file.filename
                } else {
                image = originalProduct.image
                }
        data.image = image
        data.category = originalProduct.category
        
        const productUpdated = await Product.update(data, {
                    where: {
                        id
                    }
                })
        
        res.redirect('/producto/detail/' + id)
                    

    },
    detail: async (req, res) => {
        // levantamos el id desde la url (parámetro)
        const { id } = req.params
        const productDetail = await Product.findByPk(id, {
            include: [{
                association: 'variety'
            }]
        })
        res.render('products/producto', { productDetail })  
    },
    filter: async function (req, res){
        const category = req.params.category
        console.log(category)
        const categoryId = await Category.findAll({
            where: {
                name: category
            }
        });
        //res.json(identifyCategory)
        const productsFiltered = await Product.findAll({
                    where: {
                        categoryId: categoryId[0].id
                    }
                })
        //res.json(productsFiltered)
        res.render('products/category', { productsFiltered })
    },
    create: async (req,res) => {
        const formValidation = validationResult(req)
        const varieties = await Variety.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        const categories = await Category.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        const oldValues = req.body
        //res.send(formValidation)
        if (!formValidation.isEmpty()) {
            if (req.file) {
                fs.unlinkSync(req.file.path)
            }
            //res.send(oldValues)
            res.render('products/newProduct', { oldValues, varieties,categories, errors: formValidation.mapped() })
        return  
        } 

        const {name, varietyId, price, description, categoryId, quantity} = req.body;
        // Agregamos la imagen del producto utilizando Multer
        const {file} = req; // Esta es la info del archivo 
        const image = '/images/' + file.filename// Esta es la ruta al mismo.
        const product = {image, name, varietyId, price, description, categoryId, quantity}
        console.log(product)
        const productCreated = await Product.create(product)        
        res.redirect('/producto/productABM/');
    },
    delete: (req,res) => {
        const id = req.params.id;
        Product.destroy({
            where: {
                id
            }
        })
            .then(() => {
                res.redirect('/producto/productABM/');
            })
        
    },
    search: async (req,res) => {
        const {searchTerm} = req.query
        console.log('entré al search')
        console.log(req.query)
        const results = await Product.findAll({
            where: {
                name: {
                    [Op.like]: '%' + searchTerm+ '%', 
                }
            }
        })
        res.render('products/searchResults', { results })
        res.json(results)
    }
}

module.exports = productController;