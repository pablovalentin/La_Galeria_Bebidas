const path = require('path');
const viewsPath = path.join(__dirname, '../')

const mainController = {
    home: function(req, res){
        //res.sendFile(path.resolve(viewsPath, './views/index.html'))
        return res.render('index')
    }   
}
module.exports = mainController;