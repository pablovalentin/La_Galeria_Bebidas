const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/users.json'),
    readFile() {
        // Leer nuestra informacion
        const usersPath = this.filename;
        const usersJson = fs.readFileSync(usersPath, 'utf-8');
        // Parsear la informacion
        return JSON.parse(usersJson);
    },findAll() {
        // Leer nuestra informacion
        const users = this.readFile();
        // devolver la info
        return users;
    },
    findByPk(id) {
        const users = this.readFile();
        // Filtrar por el ID
        const userFound = users.find(user => user.id == id);
        // Devolvemos el user
        return userFound;
    },
    findByField(field, value) {
        const users = this.readFile();
        // Filtrar por el [field]

        // [] los usamos para que sea dinámica el nombre de la propiedad
        const userFound = users.find(user => user[field] == value);
        // Devolvemos el user
        return userFound;
    }
}