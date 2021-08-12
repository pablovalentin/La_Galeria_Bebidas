const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController.js');
const validationCreateProduct = require('../middlewares/validationCreateProduct')
const validationUpdateProduct = require('../middlewares/validationUpdateProduct')

const path = require('path');
const multer = require('multer')

// destino donde guardar el archivo
// nombre del archivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // guardamos el destino de la carpeta absoluta
        const detinationPath = path.join(__dirname, './../public/images')
        // llamamos al callback con error (null) y el path de donde guardaría el archivo
        cb(null, detinationPath)
    },
    filename: (req, file, cb) => {
        // El nombre del archivo original es: file.originalname
        const extension = path.extname(file.originalname) // .jpg

        // generamos un identificador único a partir de la fecha
        const now = Date.now() // 32173821637218631

        // generar un nombre para nuestro archivo
        //const filename = `${now}${extension}` es la sintaxis nueva para lo que esta abajo.
        const filename = now + extension
        
        // ejecutamos callback con null (error) y el nombre del archivo
        cb(null, filename)
    },
})

const upload = multer({ storage })

router.get('/detail/:id', productController.detail);
router.get('/productABM', productController.ABMProducto);
router.get('/search', productController.search);
router.get('/newProduct', productController.nuevoProducto);
router.get('/:category', productController.filter);

//New
router.post('/create', upload.single('image'), validationCreateProduct, productController.create);

// Update
router.get('/:id/edit', productController.edit);
router.put('/:id', upload.single('image'),validationUpdateProduct, productController.update);

//Delete
router.delete('/:id', productController.delete);

module.exports = router;