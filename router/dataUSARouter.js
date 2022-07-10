const express = require("express");
const dataUSARouter = express.Router();
const {dataUSAService,dataUSAServiceByYear} = require("../services/dataUSAService");

dataUSARouter.get("/", (req, res, next) => {
  dataUSAService()
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

dataUSARouter.get("/:year", (req, res, next) => {
  dataUSAServiceByYear(req.params.year)
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

module.exports = dataUSARouter;
