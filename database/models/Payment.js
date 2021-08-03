module.exports = (sequelize, DataType) => {
    const alias = 'Payment'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        type: {
            type: DataType.STRING,
            allowNull: false,
        },
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const PaymentModel = sequelize.define(alias, columns, config);
    return PaymentModel;
}