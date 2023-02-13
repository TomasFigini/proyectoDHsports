const fs = require('fs');
const path = require('path');
const { Sequelize } = require('../database/models');

const db = require("../database/models");
const Op = Sequelize.Op;

let mainControllers = {

    index: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }],
            where: {
                deleted: 0
            },
            raw: true
            })
            .then((p) => {
                let products = p.filter((p => p.deleted == 0))
                res.render("index", { products })
            })

    },

    register:(req,res) => {
        res.render('users/register');
    },

    login:(req,res) => {
        res.render('users/login');
    },

    productcart:(req,res) => {
        res.render('products/productCart');
    },

    productdetail:(req,res) => {
        res.render('products/productDetail');
    },

    productedit:(req,res) => {
        res.render('products/editorProducto');
    }
}

module.exports = mainControllers;