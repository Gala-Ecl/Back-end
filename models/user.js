const sequelize = require("sequelize");
const { db } = require(".");

module.exports = db.define("user", {
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
    phoneNumber: sequelize.STRING,
    privilege: sequelize.STRING,
    tableId: sequelize.INTEGER,
    busId : sequelize.INTEGER,
    volunteerId: sequelize.ARRAY(sequelize.INTEGER)
});
