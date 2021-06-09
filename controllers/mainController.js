const path = require('path');
const viewsPath = path.join(__dirname, '../')
const productModel = require('../models/productModel')

const mainController = {
    home: function(req, res){
        const category = 'vinos'
        const winesList = productModel.findFiltered(category)
        return res.render('index',{winesList})
    }    
}
module.exports = mainController;