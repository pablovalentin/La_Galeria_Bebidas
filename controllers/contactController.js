const path = require('path');

const contactCartController = {
    contacto: function(req, res) {
        return res.render('contactForm')
    },
}

module.exports = contactCartController;