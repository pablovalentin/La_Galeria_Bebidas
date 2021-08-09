module.exports = (sequelize, DataType) => {
    const alias = 'User'
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
        lastName: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        password: {
            type: DataType.STRING(64),
            is: /^[0-9a-f]{64}$/i
        },
        image: {
            type: DataType.STRING
        },
        roleID: {
            type: DataType.INTEGER,
            allowNull: false           
        }
    }
    const config = {
        timestamps: false, /* para evitar errores de timestamp */
    }
    const UserModel = sequelize.define(alias, columns, config);

    UserModel.associate = models => {
        UserModel.hasMany(models.order, {
            as: 'order',
            foreignKey: 'userID'
        }),
        UserModel.belongsTo(models.role, {
            as: 'role',
            foreignKey: 'roleID'
        })
    }

    return UserModel;
}