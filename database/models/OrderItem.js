module.exports = (sequelize, DataType) => {
    const alias = 'OrderItem'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        userID: {
            type: DataType.INTEGER,
            unsigned: true,
            allowNull: false,
        },
        productID: {
            type: DataType.INTEGER,
            unsigned: true,
        },
        orderID: {
            type: DataType.INTEGER,
            unsigned: true,
        },
        promotionID: {
            type: DataType.INTEGER,
            unsigned: true,
        },
        quantity: {
            type: DataType.INTEGER(5) 
        },
        categotyId: {
            type: DataType.INTEGER,
            allowNull: false,
            unsigned: true
        },
        quantity: {
            type: DataType.INTEGER
        },
        currentPrice: {
            type: DataType.DECIMAL(10, 2)
        }
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const OrderItemModel = sequelize.define(alias, columns, config);
    return OrderItemModel;
}