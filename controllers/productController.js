const path = require('path');
const viewsPath = path.join(__dirname, '../')
const productModel = require('../models/productModel')

const productController = {
    /* producto: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/producto.ejs'))
        return res.render('producto')
    }, */
    nuevoProducto: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/producto.ejs'))
        return res.render('products/newProduct')
    },
    /* editarProducto: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/producto.ejs'))
        return res.render('editProduct')
    }, */
    ABMProducto: function(req, res){
        const productsList = productModel.findAll()
        return res.render('products/productABM', {productsList})
    },
    edit: function(req,res){
        const product = productModel.findByPk(req.params.id);

        res.render('products/editProduct', {
            product
        });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;
    
        const originalProduct = productModel.findByPk(id)
        const { file } = req
        let image
        if (file) {
            image = '/images/' + file.filename
        } else {
            image = originalProduct.image
        }
        data.image = image
        data.category = originalProduct.category

        productModel.update(data, id);

        res.redirect('/producto/detail/' + id);
    },
    detail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const productDetail = productModel.findByPk(id)
        
        res.render('products/producto', { productDetail })
    },
    filter: function (req, res){
        const category = req.params.category
        const productsFiltered = productModel.findFiltered(category)
        res.render('products/category', { productsFiltered })
    },
    create: (req,res) => {
        const {name, cepa, price, cata, sugerencia, category, quantity} = req.body;
        // Agregamos la imagen del producto utilizando Multer
        const {file} = req; // Esta es la info del archivo 
        const image = '/images/' + file.filename// Esta es la ruta al mismo.
        const product = {image, name, cepa, price, cata, sugerencia, category, quantity}
        const productCreated = productModel.create(product)        
        res.redirect('/producto/productABM/');
    },
    delete: (req,res) => {
        const id = req.params.id;
        productModel.delete(id);
        res.redirect('/producto/productABM/');
    }
}

module.exports = productController;