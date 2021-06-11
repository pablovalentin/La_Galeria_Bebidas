const path = require('path');
const viewsPath = path.join(__dirname, '../')
const productModel = require('../models/productModel')

const mainController = {
    home: function(req, res){
        const wineCategory = 'vinos'
        const whiskyCategory = 'whiskies'
        const winesList = productModel.findFiltered(wineCategory)
        const whiskiesList = productModel.findFiltered(whiskyCategory)
        return res.render('index',{winesList, whiskiesList})
    }    
}
module.exports = mainController;