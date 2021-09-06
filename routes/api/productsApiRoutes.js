const express = require('express')
const productsApiRoutes = express.Router()
const productsApiController = require('../../controllers/api/productsApiController')

// endpoints
productsApiRoutes.get('/', productsApiController.listProducts)
productsApiRoutes.get('/:id', productsApiController.detailProduct)


module.exports = productsApiRoutes