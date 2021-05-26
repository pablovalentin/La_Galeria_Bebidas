const path = require('path');
const viewsPath = path.join(__dirname, '../')

const mainController = {
    home: function(req, res){
        res.sendFile(path.resolve(viewsPath, './views/index.html'))
    }   
}
module.exports = mainController;