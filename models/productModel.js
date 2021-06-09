const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/products.json'),
    readFile() {
        // Leer nuestra informacion
        const winesPath = this.filename;
        const winesJson = fs.readFileSync(winesPath, 'utf-8');
        // Parsear la informacion
        return JSON.parse(winesJson);
    },
    findAll() {
        // Leer nuestra informacion
        const wines = this.readFile();
        // devolver la info
        return wines;
    },
    findByPk(id) {
        const wines = this.readFile();
        // Filtrar por el ID
        const wineFound = wines.find(wine => wine.id == id);
        // Devolvemos el planeta
        return wineFound;
    }
}