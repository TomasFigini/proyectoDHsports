const express = require('express');
const app = express();
const path=require('path');
const ejs = require('ejs');
const routerMain= require('./src/routes/routerMain');
const productsRouter = require('./src/routes/productsRouter')
const usersRouter = require('./src/routes/usersRouter')

app.use(express.static(path.join(__dirname, "public")));
app.set('views',path.join(__dirname,'./src/views'));
app.set('view engine','ejs')

app.listen(3000, ()=>{
    console.log('Server corriendo en el puerto 3000');
});

app.use('/',routerMain);

app.use('/register',routerMain);

app.use('/login',routerMain);

app.use('/productdetail',routerMain);

app.use('/productcart',routerMain);