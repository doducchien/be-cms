const {Sequelize} = require("sequelize");
const connection = require('./connection')


console.log(connection)
const sequelize = new Sequelize(
    connection.development.database,
    connection.development.username,
    connection.development.password,
    {
        host: connection.development.host,
        dialect: connection.development.dialect,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    },
);

async function checkConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection()
console.log(sequelize)

module.exports = sequelize