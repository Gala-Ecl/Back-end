const { Router } = require("express");

module.exports = new Router()

    .use("/user", require("./user"))
    .use("/bus", require("./bus"))
    .use("/table", require("./table"))
    .use("/volunteer", require("./volunteer"))
    .use("/content", require("./content"))
    .use((err, req, res, next) => {
        console.log(err)
        res.status(500).json(err.message);
    });