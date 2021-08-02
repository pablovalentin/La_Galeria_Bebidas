module.exports = (sequelize, DataTypes) => {
    const alias = 'Promotion'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        name: {
            type: dataType.STRING,
            allowNull: false
        },
        description: {
            type: dataType.STRING
        },
        price: {
            type: dataType.DECIMAL(10, 2) 
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
    const PromotionModel = sequelize.define(alias, columns, config);
    return PromotionModel;
}