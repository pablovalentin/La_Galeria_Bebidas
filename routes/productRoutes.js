const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController.js')


router.get('/product', productController.producto);
router.get('/newProduct', productController.nuevoProducto);
router.get('/editProduct', productController.editarProducto);

module.exports = router;