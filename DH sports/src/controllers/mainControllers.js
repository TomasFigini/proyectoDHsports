const path=require('path');

let mainControllers={

    index:(req,res)=>{
        res.render('index');
    },

    register:(req,res)=>{
        res.render('users/register');
    },

    login:(req,res)=>{
        res.render('users/login');
    },

    productcart:(req,res)=>{
        res.render('productcart');
    },

    productdetail:(req,res)=>{
        res.render('productdetail');
    }
}

module.exports= mainControllers;