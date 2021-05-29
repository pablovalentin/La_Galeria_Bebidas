const path = require('path');
const viewsPath = path.join(__dirname, '../')

const productController = {
    producto: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/producto.ejs'))
        return res.render('producto')
    },
    
}

module.exports = productController;