const { User } = require ('../database/models')

module.exports = (req, res, next) => {
    
    // Lo guardamos en la session
    const userCookie = req.signedCookies.user
    

    // Si existe buscamos en el modelo el usuario
    if (userCookie) {
        User.findByPk(userCookie)
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