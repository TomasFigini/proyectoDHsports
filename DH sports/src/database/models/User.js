module.exports = (sequelize, dataTypes)=>{
    let alias = "User";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        contraseña: {
            type: dataTypes.STRING,
        },
        categoria: {
            type: dataTypes.STRING,
        },
        avatar: {
            type: dataTypes.STRING,
        },
        role:{
            type: dataTypes.STRING
        },
        deleted:{
            type:dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "users",
        timestamps: false
    }
    
    const User = sequelize.define(alias, cols, config);
    
    User.associate = function(models){
    User.hasMany(models.Product, {
        as: "administrador",
        foreignKey: "userId"
    }) };

    return User;

}