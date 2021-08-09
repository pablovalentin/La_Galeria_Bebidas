module.exports = (sequelize, DataType) => {
    const alias = 'Rol'
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
    const RolModel = sequelize.define(alias, columns, config);

    RolModel.associate = models => {
        RolModel.hasMany(models.user, {
            as: 'users',
            foreignKey: 'roleId'
        })
    }

    return RolModel;
}