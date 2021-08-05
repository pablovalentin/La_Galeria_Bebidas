module.exports = (sequelize, DataType) => {
    const alias = 'Variety'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        name: {
            type: DataType.STRING
        },
    }
    const config = {
        timestamps: false, /* para evitar errores de timestamp */
    }
    const VarietyModel = sequelize.define(alias, columns, config);
    
    VarietyModel.associate = models => {
        VarietyModel.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        })
    }

    return VarietyModel;
}