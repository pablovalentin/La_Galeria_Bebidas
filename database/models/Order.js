module.exports = (sequelize, DataTypes) => {
    const alias = 'Order'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        userID: {
            type: dataType.INTEGER,
            unsigned: true,
            allowNull: false,
        },
        date: {
            type: dataType.DATETIME,
        },
        total: {
            type: dataType.DECIMAL(10, 2) 
        },
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const OrderModel = sequelize.define(alias, columns, config);
    return OrderModel;
}