const path = require('path');
const { Product, Category} = require ('../database/models')

const mainController = {
    home: async function(req, res){
        const wineCategory = 'vinos'
        const whiskyCategory = 'whiskies'
        const wineCategoryId = await Category.findAll({
            where: {
                name: wineCategory
            }
        })
        const whiskiesCategoryId = await Category.findAll({
            where: {
                name: whiskyCategory
            }
        })
        const winesList = await Product.findAll({
            where: {
                categoryId: wineCategoryId[0].id
            }
        })
        const whiskiesList = await Product.findAll({
            where: {
                categoryId: whiskiesCategoryId[0].id
            }
        })
        return res.render('index',{winesList, whiskiesList})
    }    
}
module.exports = mainController;