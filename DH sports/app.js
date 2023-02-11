const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');
const methodOverride = require('method-override');
const cookies = require('cookie-parser');
const userLogged = require('./src/middlewares/userLoggedMiddleware');

//Rutas
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');
const cartRouter = require('./src/routes/cartRouter');
const mainRouter = require('./src/routes/mainRouter');


app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname,'./src/views'));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookies());
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
}))
app.use(userLogged);

app.listen(3000, ()=>{
    console.log('Server corriendo en el puerto 3000');
});

app.use('/', mainRouter);

app.use('/users', usersRouter);

app.use('/products', productsRouter);

app.use('/productcart', cartRouter);
