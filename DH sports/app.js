const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
app.set("view engine","ejs");

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log('Server corriendo en el puerto 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/productdetail', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

app.get('/productcart', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'));
});