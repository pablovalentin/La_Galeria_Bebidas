module.exports = (sequelize, DataType) => {
    const alias = 'Role'
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
    const RoleModel = sequelize.define(alias, columns, config);

    RoleModel.associate = models => {
        RoleModel.hasMany(models.User, {
            as: 'users',
            foreignKey: 'roleId'
        })
    }

    return RoleModel;
}