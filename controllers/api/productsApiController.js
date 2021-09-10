const { Op } = require('sequelize')
const { Product, Category, Variety} = require ('../../database/models')

module.exports = {
    async listProducts(req,res) {
        try {
            const categories = await Category.findAll({
                order: [
                    ['id', 'ASC'],
                ],
                include: ['products']
            })
            
            const countByCategory = categories.reduce((acum, category) => {
                acum[category.name] = category.products.length
                return acum
            }, {})

            const products = await Product.findAndCountAll({
                attributes: ["id", "name", "description", "quantity", "price"],
                include: [
                    {
                        association: 'category'
                    }
                ]
            })
            const productUpdated = products.rows.map(product => {
                const productUrl = 'http://localhost:3000/api/products/' + product.id
                product.setDataValue('detail', productUrl)
                product.setDataValue('category', product.category.name)
                return product;
            })      
            
            
            res.status(200).json({ 
                meta: {
                    status: "success",
                    countByCategory: countByCategory,        
                },
                products: {
                    title: "Total de productos",
                    count: products.count,
                },
                categories: {
                    title: "Total de categorias",
                    count: categories.length
                },
                data: {
                    products: productUpdated
                    
                }
            })
    } catch(err){
        console.log(err)
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
                    category: product.category.name,
                    variety: product.variety.name
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