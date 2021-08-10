module.exports = (sequelize, DataType) => {
    const alias = 'Promotion'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING
        },
        price: {
            type: DataType.DECIMAL(10, 2) 
        },
        quantity: {
            type: DataType.INTEGER
        },
        image: {
            type: DataType.STRING
        }
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const PromotionModel = sequelize.define(alias, columns, config);
    return PromotionModel;
}