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
    detail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const planetDetail = productModel.findByPk(id)
        
        res.render('producto', { planetDetail })
    },
    categoria: function(req,res){
        const winesList = productModel.findAll()
        res.render('category', { winesList })
        /* console.log('category', { winesList })
        return res.render('category') */
    }
}

module.exports = productController;