const { Router } = require("express");

const { volunteer } = require.main.require("./resources");

module.exports = new Router()

    .get("/", (req, res, next) => {
        volunteer
            .readAll()
            .then(found => res.json(found))
            .catch(next);
    })
    .post("/find", (req, res, next) => {
        volunteer
            .findOne(req)
            .then(found => res.json(found))
            .catch(next);
    })
    .post("/create", (req, res, next) => {
        volunteer
            .createOne(req)
            .then(() => res.json())
            .catch(next);
    })
    .delete("/", (req, res, next) => {
        volunteer
            .deleteOne(req)
            .then(() => res.json())
            .catch(next);
    })
