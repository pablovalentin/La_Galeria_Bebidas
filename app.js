const express = require('express');
const path = require('path');
const session = require('express-session')

const config = require('./config/config')

const app = express();

// middlewares

app.use(session({
    secret: config.sessionSecret
  }))

let rutasUsers = require ('./routes/usersRoutes.js')
let rutasMain = require ('./routes/mainRoutes.js')
let rutasShoppingCart = require ('./routes/shoppingCartRoutes.js')
let rutasProduct = require ('./routes/productRoutes.js')
const publicPath = path.resolve(__dirname, 'public');
const method = require('method-override');


app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(method('_method'));
app.set('view engine', 'ejs');
app.set('views', 'views')
// use
app.use(express.static(publicPath));
app.use('/user', rutasUsers);
app.use('/', rutasMain);
app.use('/carrito', rutasShoppingCart);
app.use('/producto', rutasProduct);

// No olvidarse esto para que la data se envie correctamente desde un formulario
