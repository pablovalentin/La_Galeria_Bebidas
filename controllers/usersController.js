const fs = require('fs')
const { validationResult } = require('express-validator')
const bcrypt = require ('bcryptjs');
const usersModel = require('../models/usersModel')
const path = require('path');
const viewsPath = path.join(__dirname, '../')

const usersController = {
    login: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/login.ejs'))
        return res.render('users/login')
        
    },
    processLogin: (req, res) => {
        const formValidation = validationResult(req)
        const oldValues = req.body

        if (!formValidation.isEmpty()) {
            return res.render('users/login', { oldValues, errors: formValidation.mapped() })
        } 

        //y aca?

        // redirigimos al profile
        res.redirect('/users/profile')
    },
    registro: function(req, res) {
        //res.sendFile(path.resolve(viewsPath, './views/registro.ejs'))
        return res.render('users/registro')
    },
    processRegister: function (req,res){
        const formValidation = validationResult(req)
        const oldValues = req.body
        
        if (!formValidation.isEmpty()) {
            // borrar imagen
            if (req.file) {
                // primero chequeamos que exista
                fs.unlinkSync(req.file.path)
            }
            // tenemos errores
            res.render('users/registro', { oldValues, errors: formValidation.mapped() })
        return  
        } 

        //chequear que no exista en la bd  

        // Crear el objeto usuario
        const { name, lastName, email, password } = req.body;

         // dentro de req.file va a venir la información del archivo
        const { file } = req
        
         // nuestra ruta al archivo
        const image = file.filename

        //hashear el password
        const haspassword = bcrypt.hashSync (password)

        const user = {
            name,
            lastName,
            email,
            password: haspassword,
            image: '/images/profile/' + image,
        }
        
        usersModel.create(user);

        res.redirect('/user/login');
    },
    
}

module.exports = usersController;