const fs = require('fs');
const path = require('path');
const { Sequelize } = require('../database/models');
const { validationResult, cookie } = require("express-validator");

const db = require("../database/models");
const Op = Sequelize.Op;

const productController = {

    index: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }]
        })
            .then((p) => {
                let products = p.filter((p => p.deleted == 0))
                res.render("products", { products })
            })

    },
    
    search: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }],
            where: {
                name: { [Op.like]: "%" + req.query.search + "%" }
            }
        })
            .then((p) => {
                let products = p.filter((p => p.deleted == 0))
                res.render("products", { products })
            })
            .catch((e) => res.send(e))
    },

    detail: function (req, res) {
        db.Product.findByPk(req.params.id,{
            include: [{ association: "talle" },
        {association: "categoria"}]
        })
            .then((product) => {
        
                res.render("products/productDetail", { product })
            })
    },

    cart: function (req, res) { res.render("products/productCart") },

    create: function (req, res) {

        let size = db.Size.findAll();
        let sport = db.Sport.findAll();
        let brand = db.Brand.findAll();
        let category = db.Category.findAll();
        let color = db.Color.findAll();

        Promise.all([size, sport, brand, category, color])
            .then(([size, sport, brand, category, color]) => {
                res.render("products/create", { fk: [size, sport, brand, category, color] })
            })

    },

    store: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Product.create({
                nombre: req.body.nombreProducto,
                descripcion: req.body.descripcion,
                avatar: req.file.archivo,
                descuento: req.body.descuento,
                precio: req.body.precio,
                deporteId: req.body.sport,
                userId: req.session.usuarioLogueado.id,
                marcaId: req.body.brand,
                talleId: req.body.size,
                categoriaId: req.body.category,
                deleted: 0
            })
                .then(() => {

                    res.redirect("/products")
                })
                .catch((error) => res.send(error));
        } else {

            let size = db.Size.findAll();
            let sport = db.Sport.findAll();
            let brand = db.Brand.findAll();
            let category = db.Category.findAll();
            let color = db.Color.findAll();
            Promise.all([size, sport, brand, category, color])
                .then(([size, sport, brand, category, color]) => {
                    res.render("products/create", {
                        fk: [size, sport, brand, category, color],
                        errors: errors.mapped()
                    })
                })


        }

    },

    edit: function (req, res) {
        let producto = db.Product.findByPk(req.params.id)
        let size = db.Size.findAll();
        let sport = db.Sport.findAll();
        let brand = db.Brand.findAll();
        let category = db.Category.findAll();
        Promise.all([producto, size, sport, brand, category])
            .then(([producto, size, sport, brand, category]) => {
                res.render("products/edit", { producto: producto, size: size, sport: sport, brand: brand, category: category })
            })

    },

    update: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.Product.update({
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                discount: req.body.discount,
                price: req.body.price,
                sportId: req.body.sport,
                userId: req.session.usuarioLogueado.id,
                brandId: req.body.brand,
                sizeId: req.body.size,
                genre: req.body.genre,
                categoryId: req.body.category,
                deleted: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.redirect("/products/productDetail/" + req.params.id)
        } else {
            let producto = db.Product.findByPk(req.params.id)
            let size = db.Size.findAll();
            let sport = db.Sport.findAll();
            let brand = db.Brand.findAll();
            let category = db.Category.findAll();
            Promise.all([producto, size, sport, brand, category])
                .then(([producto, size, sport, brand, category]) => {
                    res.render("edit" + req.params.id, { producto: producto, size: size, sport: sport, brand: brand, category: category, errors: errors.mapped() })
                })

        }


    },

    destroy: (req, res) => {
        db.Product.update({
            deleted: 1
        }, {
            where: {
                id: req.params.id
            }
        }),
            res.redirect("/products")
    }

}

module.exports = productController;