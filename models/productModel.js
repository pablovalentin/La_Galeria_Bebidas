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
    },
    update(data, id) {
        const products = this.readFile();

        const newProducts = products.map(product => {
            if(product.id == id){
                product = {
                    id: product.id,
                    ...data
                }
            }
            return product;
        });

        this.writeFile(newProducts);
    },
    writeFile(newData) {
        // Pasar la data a json
        const dataJson = JSON.stringify(newData, null, 2);
        // Escribir el archivo
        fs.writeFileSync(this.filename, dataJson);
    },
    create(product) {  
        product.id =  this.generateId();
        products = this.readFile();
        productsUpdated = [...products, product]
        this.writeFile(productsUpdated)
        return product;
    },
    generateId() {
        const product = this.readFile();
        const lastProduct = product.pop();
        return lastProduct.id + 1;
    },
    delete (id) {
        const product = this.readFile();
        const newProducts = product.filter(product => product.id != id);
        this.writeFile(newProducts);       
    }
}