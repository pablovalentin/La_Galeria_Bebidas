const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/products.json'),
    readFile() {
        // Leer nuestra informacion
        const productsPath = this.filename;
        const productsJson = fs.readFileSync(productsPath, 'utf-8');
        // Parsear la informacion
        return JSON.parse(productsJson);
    },
    findAll() {
        // Leer nuestra informacion
        const products = this.readFile();
        // devolver la info
        return products;
    },
    findFiltered(category){
        const products = this.readFile();
        const productsFiltered = products.filter(product => product.category == category);
        return productsFiltered
    },
    findByPk(id) {
        const wines = this.readFile();
        // Filtrar por el ID
        const wineFound = wines.find(wine => wine.id == id);
        // Devolvemos el planeta
        return wineFound;
    }
}