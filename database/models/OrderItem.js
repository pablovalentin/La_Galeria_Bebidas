module.exports = (sequelize, DataTypes) => {
    const alias = 'OrderItem'
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
        productID: {
            type: dataType.INTEGER,
            unsigned: true,
        },
        orderID: {
            type: dataType.INTEGER,
            unsigned: true,
        },
        promotionID: {
            type: dataType.INTEGER,
            unsigned: true,
        },
        quantity: {
            type: dataType.INTEGER(5) 
        },
        categotyId: {
            type: dataType.INTEGER,
            allowNull: false,
            unsigned: true
        },
        quantity: {
            type: dataType.INTEGER
        },
        currentPrice: {
            type: dataType.DECIMAL(10, 2)
        }
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const OrderItemModel = sequelize.define(alias, columns, config);
    return OrderItemModel;
}