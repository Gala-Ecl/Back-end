const { Router } = require("express");

const { user } = require.main.require("./resources");

module.exports = new Router()

    .post("/", (req, res, next) => {
        user
            .findOne(req)
            .then(found => res.json(found))
            .catch(next);
    })
    .post("/create", (req, res, next) => {
        user
            .createOne(req)
            .then(() => res.json())
            .catch(next);
    })
    .delete("/", (req, res, next) => {
        user
            .deleteOne(req)
            .then(() => res.json())
            .catch(next);
    })
    .patch("/", (req, res, next) => {
        user
            .changeOne(req)
            .then(() => res.json())
            .catch(next);
    });
