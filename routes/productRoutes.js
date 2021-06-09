const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController.js')


router.get('/product', productController.producto);
router.get('/detail/:id', productController.detail);
router.get('/:category', productController.filter);
//router.get('/vinos', productController.categoria);
router.get('/newProduct', productController.nuevoProducto);
router.get('/editProduct', productController.editarProducto);

// Update
router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);
module.exports = router;