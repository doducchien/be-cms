const {DataTypes} = require("sequelize")
const sequelize = require('../connection/sequelize')

const User = sequelize.define("user", {
    id:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.INTEGER,
    googleId: DataTypes.STRING,
    microsoftId: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    avatar: DataTypes.STRING,
    plan: DataTypes.STRING,
},
    {
        tableName: 'user',
        timestamps: true
    }
)

module.exports = User;