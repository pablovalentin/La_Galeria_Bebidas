const path = require('path')

function isFileImage(fileName) {
    const AVIABLE_EXTENSIONS = ['.jpg', '.jpeg', '.png']
    const extension = path.extname(fileName)

    if (AVIABLE_EXTENSIONS.includes(extension)) {
        return true
    }

    return false
}

module.exports = {
    isFileImage,
}