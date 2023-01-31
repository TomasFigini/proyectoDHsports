module.exports = (sequelize, dataTypes)=>{
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        },
        precio: {
            type: dataTypes.DECIMAL(10,2),
        },
        descuento: {
            type: dataTypes.DECIMAL(5,2),
        },
        deporteId: {
            type: dataTypes.INTEGER,
            forenKey: true
        },
        marcaId: {
            type: dataTypes.INTEGER,
            forenKey: true
        },
        categoriaId: {
            type: dataTypes.INTEGER,
            forenKey: true
        },
        talleId: {
            type: dataTypes.INTEGER,
            forenKey: true
        },
        colorId: {
            type: dataTypes.INTEGER,
            forenKey: true
        },
        userId:{
            type: dataTypes.INTEGER,
            forenKey: true
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        deleted:{
            type:dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "products",
        timestamps: false
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: 'categoria',
            foreignKey: 'categoriaId'
        }),

        Product.belongsTo(models.Brand, {
            as: 'marca',
            foreignKey: 'marcaId'
        }),

        Product.belongsTo(models.Color, {
            as: 'color',
            foreignKey: 'colorId'
        }),

        Product.belongsTo(models.Size, {
            as: 'talle',
            foreignKey: 'talleId'
        }),
        Product.belongsTo(models.Sport, {
            as: 'deporte',
            foreignKey: 'deporteId'
        }),
        Product.belongsTo(models.User, {
            as: "administrador",
            foreignKey: "userId"
        })
    }

    return Product;

}