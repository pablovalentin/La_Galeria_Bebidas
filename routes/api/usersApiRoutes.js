const express = require ('express')
const usersApiRoutes = express.Router()
const usersApiController = require ('../../controllers/api/usersApiController') 

// endpoints
usersApiRoutes.get ('/', usersApiController.listUsers)
usersApiRoutes.get ('/:id', usersApiController.detailUser)

module.exports = usersApiRoutes