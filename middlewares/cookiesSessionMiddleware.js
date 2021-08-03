//Eliminar cuando este preparado el sequelize
//const usersModel = require('../models/usersModel')
// FIXME: CRUD DB sprint 06, requerir modelos users de DB
const { User } = require ('../database/models')

module.exports = (req, res, next) => {
    
    // Lo guardamos en la session
    const userCookie = req.signedCookies.user
    

    // Si existe buscamos en el modelo el usuario
    if (userCookie) {
        Users.findByPk(userCookie)
            .then(user => {
                delete user.password 
                // pasar a la sesión
                req.session.logged = user
                next();
            })
        
    } else {
        next();
    }
}
//Eliminar cuando este preparado el sequelize
/* module.exports = (req, res, next) => {
    
    // Lo guardamos en la session
    const userCookie = req.signedCookies.user
    

    // Si existe buscamos en el modelo el usuario
    if (userCookie) {
        const user = usersModel.findByPk(userCookie)
        
        delete user.password
        // pasar a la sesión
        req.session.logged = user
    }

    next()
} */