const sequelize = require("sequelize");
const { db } = require(".");

module.exports = db.define("bus", {
    letter : sequelize.STRING,
    date : sequelize.DATE,
    capacity : sequelize.INTEGER
});