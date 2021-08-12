const path = require('path')

function isFileImage(fileName) {
    const AVIABLE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif']
    const extension = path.extname(fileName)

    if (AVIABLE_EXTENSIONS.includes(extension)) {
        return true
    }
    console.log('extensión no permitida')
    return false
}

module.exports = {
    isFileImage,
}