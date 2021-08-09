module.exports = (sequelize, DataType) => {
    const alias = 'Order'
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
        date: {
            type: DataType.DATE,
        },
        total: {
            type: DataType.DECIMAL(10, 2) 
        },
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const OrderModel = sequelize.define(alias, columns, config);

    OrderModel.associate = models => {
        OrderModel.belongsTo(models.user, {
            as: 'user',
            foreignKey: 'userID'
        })
    }

    return OrderModel;
}