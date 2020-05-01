const { Router } = require("express");

const { table } = require.main.require("./resources");

module.exports = new Router()

    .get("/", (req, res, next) => {
        table
            .readAll()
            .then(found => res.json(found))
            .catch(next);
    })
    .post("/find", (req, res, next) => {
        table
            .findOne(req)
            .then(found => res.json(found))
            .catch(next);
    })
    .post("/create", (req, res, next) => {
        table
            .createOne(req)
            .then(() => res.json())
            .catch(next);
    })
    .delete("/", (req, res, next) => {
        table
            .deleteOne(req)
            .then(() => res.json())
            .catch(next);
    })
