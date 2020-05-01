const { Router } = require("express");

const { content } = require.main.require("./resources");

module.exports = new Router()

  .get("/", (req, res, next) => {
    content
      .readAll(req)
      .then((found) => {
        console.log(found);
        res.json(found);
      })
      .catch(next);
  })
  .post("/", (req, res, next) => {
    content
      .modifyOne(req)
      .then((found) => res.json(found))
      .catch(next);
  })
  .delete("/", (req, res, next) => {
    content
      .deleteOne(req)
      .then(() => res.json())
      .catch(next);
  });
