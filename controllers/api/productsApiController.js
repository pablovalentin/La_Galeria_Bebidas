const { Op } = require('sequelize')
const { Product, Category, Variety} = require ('../../database/models')

module.exports = {
    async listProducts(req,res) {
        try {
            const products = await Product.findAndCountAll({
                attributes: ["id", "name", "description"],
                include: [
                    {
                        association: 'category'
                    }
                ]
            }
            )      
            res.status(200).json({ 
                meta: {
                    status: "success"
                },
                data: {
                    count: products.count,
                    //countByCategory: ,
                    products: products.rows
                    /* products: [{ 
                        id: product.id
                    }] */
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
    } ,
    async detailProduct(req,res){
        //const product = await Product.findByPk(req.params.id)
        try {
            const product = await Product.findOne({
                where: {
                    id: req.params.id
                },
                include: [
                    {
                        association: 'category'
                    },
                    {
                        association: 'variety'
                    }
                ]
            })
            if (!product) {
                res.status(404).json({
                    meta: {
                        status: "not_found",
                    },
                })
                return
            }
            res.status(200).json({
                meta: {
                    status: "success",
                },
                data: {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    quantity: product.quantity,
                    image: 'http://localhost:3000' + product.image,
                    cateogory: product.category.name,
                    variety: product.variety.name
                    /* relationships: [
                                    {
                                        category: product.category.name,
                                        variety: product.variety.name
                                        
                                    }
                                ] */
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