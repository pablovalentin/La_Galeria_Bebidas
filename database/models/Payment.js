module.exports = (sequelize, DataTypes) => {
    const alias = 'Payment'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        type: {
            type: dataType.STRING,
            allowNull: false,
        },
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const PaymentModel = sequelize.define(alias, columns, config);
    return PaymentModel;
}