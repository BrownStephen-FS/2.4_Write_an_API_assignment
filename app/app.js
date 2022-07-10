const express = require("express");
const dataUSARouter = require("../router/dataUSARouter");

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).json({message: "Service is working"});
});

app.use("/:dataUSA", dataUSARouter);

app.use((req,res,next) => {
    const err = new Error("HTTP Status: 404 Not Found");
    err.status = 404;
    next(err);
});

app.use((err,req,res,next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            status: err.status,
            method: req.method,
        }
    })
});

module.exports = app;