const express = require('express');
const router = express.Router();
const shoppingCartController = require ('../controllers/shoppingCartController.js')

router.get('/shoppingCart', shoppingCartController.carrito);

module.exports = router;