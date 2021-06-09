const path = require('path');
const viewsPath = path.join(__dirname, '../')
const productModel = require('../models/productModel')

const mainController = {
    home: function(req, res){
        const winesList = productModel.findAll()
        return res.render('index',{winesList})
    }    
}
module.exports = mainController;