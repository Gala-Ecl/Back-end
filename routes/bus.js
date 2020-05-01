const { Router } = require("express");

const { bus } = require.main.require("./resources");

module.exports = new Router()

    .get("/", (req, res, next) => {
        bus
            .readAll()
            .then(found => res.json(found))
            .catch(next);
    })
    .post("/find", (req, res, next) => {
        bus
            .findOne(req)
            .then(found => res.json(found))
            .catch(next);
    })
    .post("/create", (req, res, next) => {
        bus
            .createOne(req)
            .then(() => res.json())
            .catch(next);
    })
    .delete("/", (req, res, next) => {
        bus
            .deleteOne(req)
            .then(() => res.json())
            .catch(next);
    })
