const express = require ('express')
const usersApiRoutes = express.Router()
const usersApiController = require ('../../controllers/api/usersApiController') 

// endpoints
usersApiRoutes.get ('/', usersApiController.listUsers)
usersApiRoutes.get ('/:id', usersApiController.detailUser)
usersApiRoutes.put ('/:id', usersApiController.updateUserRolID)

module.exports = usersApiRoutes