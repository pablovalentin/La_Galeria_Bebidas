const express = require ('express')
const usersApiRoutes = express.Router()
const usersApiController = require ('../../controllers/api/usersApiController') 
const usersController = require('../../controllers/usersController')

// endpoints
usersApiRoutes.get ('/', usersApiController.listUsers)
usersApiRoutes.get ('/:id', usersApiController.detailUser)

module.exports = usersApiRoutes