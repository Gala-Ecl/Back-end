const sequelize = require("sequelize");
const { db } = require(".");

module.exports = db.define("bus", {
    duration: sequelize.INTEGER,
    date : sequelize.DATE,
    description : sequelize.STRING
});