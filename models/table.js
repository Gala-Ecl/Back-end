const sequelize = require("sequelize");
const { db } = require(".");

module.exports = db.define("table", {
    number : sequelize.INTEGER,
    capacity : sequelize.INTEGER
});