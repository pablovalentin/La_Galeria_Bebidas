const path = require('path');
const viewsPath = path.join(__dirname, '../')
const productModel = require('../models/productModel')

const productController = {
    producto: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/producto.ejs'))
        return res.render('producto')
    },
    nuevoProducto: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/producto.ejs'))
        return res.render('newProduct')
    },
    editarProducto: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/producto.ejs'))
        return res.render('editProduct')
    },
    edit: function(req,res){
        const product = productModel.findByPk(req.params.id);

        res.render('editProduct', {
            product
        });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;
    
        const originalProduct = productModel.findByPk(id)
        productModel.update(data, id);

        res.redirect('/producto/detail/' + id);
    },
    detail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const productDetail = productModel.findByPk(id)
        
        res.render('producto', { productDetail })
    },
    filter: function (req, res){
        const category = req.params.category
        const productsFiltered = productModel.findFiltered(category)
        res.render('category', { productsFiltered })
    },
    categoria: function(req,res){
        const winesList = productModel.findAll()
        res.render('category', { winesList })
        /* console.log('category', { winesList })
        return res.render('category') */
    }
}

module.exports = productController;