module.exports = (sequelize, DataType) => {
    const alias = 'Category'
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
        timestamps: true, /* para evitar errores de timestamp */
    }
    const CategoryModel = sequelize.define(alias, columns, config);
    return CategoryModel;
}