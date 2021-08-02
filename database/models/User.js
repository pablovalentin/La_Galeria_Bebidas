module.exports = (sequelize, DataTypes) => {
    const alias = 'User'
    const columns = {
        id : { /* La declaración del ID no es necesaria */
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        name: {
            type: dataType.STRING
        },
        email: {
            type: dataType.STRING,
            allowNull: false,
        },
        password: {
            type: dataType.STRING(64),
            is: /^[0-9a-f]{64}$/i
        },
        image: {
            type: dataType.STRING
        },
        roleID: {
            type: dataType.INTEGER,
            allowNull: false           
        }
    }
    const config = {
        timestamps: true, /* para evitar errores de timestamp */
    }
    const UserModel = sequelize.define(alias, columns, config);
    return UserModel;
}