
const express = require("express");
const routerCourses = express.Router();

let controller = require("../controller/courseController");

routerCourses.post("/", controller.createCourse);

routerCourses.get("/", controller.getAllCourses);

module.exports = routerCourses;