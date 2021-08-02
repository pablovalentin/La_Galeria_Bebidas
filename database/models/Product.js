module.exports = (sequelize, DataTypes) => {
    const alias = 'Product'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        name: {
            type: dataType.STRING
        },
        varietyID: {
            type: dataType.DECIMAL,
            allowNull: false,
            unsigned: true
        },
        description: {
            type: dataType.STRING
        },
        price: {
            type: dataType.DECIMAL(10, 2) 
        },
        categotyId: {
            type: dataType.INTEGER,
            allowNull: false,
            unsigned: true
        },
        quantity: {
            type: dataType.INTEGER
        },
        image: {
            type: dataType.STRING
        }
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const ProductModel = sequelize.define(alias, columns, config);
    return ProductModel;
}