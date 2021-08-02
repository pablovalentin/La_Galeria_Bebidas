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
    },
    findAll() {
        // Leer nuestra informacion
        const users = this.readFile();
        // devolver la info
        return users;
    },
    findByPk(id) {
        const users = this.readFile();
        
        const userFound = users.find(user => user.id == id);
        
        return userFound;
    },
    findByField(field, value) {
        const users = this.readFile();

        const userFound = users.find(user => user[field] == value);
       
        return userFound;
    },
    generateId() {
        const users = this.readFile();
        const lastuser = users.pop();
        return lastuser ? lastuser.id + 1 : 0;
    },
    create(user) {
        user.id = this.generateId();

        const users = this.readFile();

        const usersUpdated = [...users, user];

        this.writeFile(usersUpdated);
        return user;
    },
    writeFile(newData) {
 
        const dataJson = JSON.stringify(newData, null, 2);

        fs.writeFileSync(this.filename, dataJson);
    }
}