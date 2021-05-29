const path = require('path');
const viewsPath = path.join(__dirname, '../')

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
}

module.exports = productController;