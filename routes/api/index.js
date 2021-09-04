const express = require('express')
const apiRoutes = express.Router()

//const usersApiRoutes = require('./usersApiRoutes')
const productsApiRoutes = require('./productsApiRoutes')

// apiRoutes.use('/users', usersApiRoutes)
apiRoutes.use('/products', productsApiRoutes)

module.exports = apiRoutes