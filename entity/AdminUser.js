const {DataTypes} = require("sequelize")
const sequelize = require('../connection/sequelize')

const AdminAccount = sequelize.define("adminAccount", {
    username:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,

},
    {
        tableName: 'adminAccount',
        timestamps: false
    }
)

module.exports = AdminAccount;