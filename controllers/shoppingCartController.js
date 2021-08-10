const path = require('path');
const viewsPath = path.join(__dirname, '../')

const shoppingCartController = {
    carrito: function(req, res) {
        return res.render('shoppingCart')
    },
}

module.exports = shoppingCartController;