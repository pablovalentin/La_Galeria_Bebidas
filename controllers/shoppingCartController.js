const path = require('path');
const viewsPath = path.join(__dirname, '../')

const shoppingCartController = {
    carrito: function(req, res) {
        //res.sendFile(path.resolve(viewsPath, './views/shoppingCart.ejs'))
        return res.render('shoppingCart')
    },
}

module.exports = shoppingCartController;