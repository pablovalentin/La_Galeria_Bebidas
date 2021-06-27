const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController.js')
const validationRegisterUser = require('../middlewares/validationRegisterUser')

const path = require('path');
const multer = require('multer')

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // guardamos el destino de la carpeta absoluta
        const detinationPath = path.join(__dirname, './../public/images/profile')
        // llamamos al callback con error (null) y el path de donde guardaría el archivo
        cb(null, detinationPath)
    },
    filename: (req, file, cb) => {
        console.log('file', file)
        // El nombre del archivo original es: file.originalname
        const extension = path.extname(file.originalname) // .jpg

        // generamos un identificador único a partir de la fecha
        const now = Date.now() // 32173821637218631

        // generar un nombre para nuestro archivo
        //const filename = `${now}${extension}` es la sintaxis nueva par alo que esta abajo.
        const filename = now + extension
        
        // ejecutamos callback con null (error) y el nombre del archivo
        cb(null, filename)
    },
})

const upload = multer({ storage })

router.get('/login', guestMiddleware,usersController.login);
router.get('/registro', guestMiddleware, usersController.registro);

router.post('/registro', guestMiddleware, upload.single('profileImage'),validationRegisterUser, usersController.processRegister)

router.get('/profile', authMiddleware, usersController.profile)

module.exports = router;