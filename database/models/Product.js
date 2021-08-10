module.exports = (sequelize, DataType) => {
    const alias = 'Product'
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
        varietyId: {
            type: DataType.DECIMAL,
            allowNull: false,
            unsigned: true
        },
        description: {
            type: DataType.STRING
        },
        price: {
            type: DataType.DECIMAL(10, 2) 
        },
        categoryId: {
            type: DataType.INTEGER,
            allowNull: false,
            unsigned: true
        },
        quantity: {
            type: DataType.INTEGER
        },
        image: {
            type: DataType.STRING
        }
    }
    const config = {
        timestamps: false, /* para evitar errores de timestamp */
    }
    const ProductModel = sequelize.define(alias, columns, config);
    
    ProductModel.associate = models => {
        ProductModel.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoryId'
        }),
        ProductModel.belongsTo(models.Variety, {
            as: 'variety',
            foreignKey: 'varietyId'
        })
    }
    
    return ProductModel;
}