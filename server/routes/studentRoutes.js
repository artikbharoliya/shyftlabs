
const express = require("express");
const routerStudent = express.Router();

let controller = require("../controller/studentController");

routerStudent.post("/", controller.createStudent);

routerStudent.get("/", controller.getAllStudents);

routerStudent.put("/", controller.updateStudent);

routerStudent.delete("/", controller.deleteStudent);

module.exports = routerStudent;