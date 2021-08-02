const fs = require('fs')
const { validationResult } = require('express-validator')
const bcrypt = require ('bcryptjs');
const usersModel = require('../models/usersModel')
// FIXME: CRUD DB sprint 06, requerir modelos users de DB
/* const { User } = requiere ('../database/models') */
const { maxAgeUserCookie } = require('../config/config')

const path = require('path');
const viewsPath = path.join(__dirname, '../')

const usersController = {
    login: function(req, res){
        
        return res.render('users/login')      
    },
    processLogin: (req, res) => {
        const formValidation = validationResult(req)
        const oldValues = req.body

        if (!formValidation.isEmpty()) {
            return res.render('users/login', { oldValues, errors: formValidation.mapped() })
        } 

        const { email, remember } = req.body
        
/*         //FIXME: CRUD DB sprint 06, requerir modelos users de DB
        User.findOne({
            where: {
                email
            }
        })
            .then ((user) => {
                delete user.password

        req.session.logged = user

        if (remember) {
            res.cookie('user', user.id, {
                maxAge: maxAgeUserCookie
            })
        }

        res.redirect('/user/profile')
    },
    }), */
        //Eliminar cuando este preparado el sequelize
        const user = usersModel.findByField('email', email)

        delete user.password

        req.session.logged = user

        if (remember) {
            res.cookie('user', user.id, {
                maxAge: maxAgeUserCookie
            })
        }

        res.redirect('/user/profile')
    },
    registro: function(req, res) {
        return res.render('users/registro')
    },
    processRegister: function (req,res){
        const formValidation = validationResult(req)
        const oldValues = req.body
        
        if (!formValidation.isEmpty()) {
            if (req.file) {
                fs.unlinkSync(req.file.path)
            }
            res.render('users/registro', { oldValues, errors: formValidation.mapped() })
        return  
        } 

        const { name, lastName, email, password } = req.body;

        const { file } = req
        
        const image = file.filename

        const haspassword = bcrypt.hashSync (password)

        const user = {
            name,
            lastName,
            email,
            password: haspassword,
            image: '/images/profile/' + image,
        }
        
    //FIXME: CRUD DB sprint 06 refactor creacion de usuario
    /*     User.create (user)
            .then(()=> {
                res.redirect('/user/login')
            }) */

    //Eliminar cuando este preparado el sequelize
        usersModel.create(user);
    //Eliminar cuando este preparado el sequelize
        res.redirect('/user/login');
    },
    profile: (req, res) => {
        res.render('users/profile')
    },

    logout: (req, res) => {

        req.session.destroy()
        res.clearCookie('user')
        
        res.redirect('/')
    }
}

module.exports = usersController;