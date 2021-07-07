const usersModel = require('../models/usersModel')
module.exports = (req, res, next) => {
    
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
}