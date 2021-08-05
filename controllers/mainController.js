const path = require('path');
const { Product} = require ('../database/models')

const mainController = {
    home: async function(req, res){
        const wineCategory = '1'
        const whiskyCategory = '2'
        const winesList = await Product.findAll({
            where: {
                categoryId: wineCategory
            }
        })
        const whiskiesList = await Product.findAll({
            where: {
                categoryId: whiskyCategory
            }
        })
        return res.render('index',{winesList, whiskiesList})
    }    
}
module.exports = mainController;