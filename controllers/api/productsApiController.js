const { Op } = require('sequelize')
const { Product, Category, Variety} = require ('../../database/models')

module.exports = {
    async listProducts(req,res) {
        try {
            const products = await Product.findAndCountAll()
            
            res.status(200).json({ 
                meta: {
                    status: "success"
                },
                data: {
                    count: products.count,
                    products: products.rows
                }
            })
    } catch(err){
        res.status(500).json({
            meta: {
                status: "error"
            },
            error: {
                msg: "Cant connect to database",
                err
            }
        })
    }   
    } 
}