
const express = require("express");
const routerResults = express.Router();

let controller = require("../controller/resultController");

routerResults.post("/", controller.createResult);

routerResults.get("/", controller.getAllResults);

module.exports = routerResults;
