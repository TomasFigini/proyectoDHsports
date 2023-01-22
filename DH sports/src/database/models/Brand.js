module.exports = (sequelize, dataTypes)=>{
    let alias = "Brand";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: {
            type: dataTypes.STRING,
        }
    };

    let config = {
        tableName: "brands",
        timestamps: false
    }

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models){
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'marcaId'
        })
    }

    return Brand;

}