const path = require('path');
const viewsPath = path.join(__dirname, '../')

const usersController = {
    login: function(req, res){
        res.sendFile(path.resolve(viewsPath, './views/login.html'))
        
    },
    registro: function(req, res) {
        res.sendFile(path.resolve(viewsPath, './views/registro.html'))
    },
}

module.exports = usersController;