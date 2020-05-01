require("dotenv").config();
const sequelize = require("sequelize");

module.exports.db = new sequelize(process.env.DATABASE_URL, {
    dialectOptions: { ssl: true },
    logging: false
});

module.exports.User = require("./user");
module.exports.Bus = require("./bus");
module.exports.Table = require("./table");
module.exports.Volunteer = require("./volunteer");
