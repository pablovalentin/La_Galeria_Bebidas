const express = require('express');
const path = require('path');

const app = express();
let rutasUsers = require ('./routes/usersRoutes.js')
let rutasMain = require ('./routes/mainRoutes.js')
const publicPath = path.resolve(__dirname, 'public');


app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000");
});

// use
app.use(express.static(publicPath));
app.use('/user', rutasUsers);
app.use('/', rutasMain);


app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/shoppingCart.html'));
});

app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/producto.html'));
});