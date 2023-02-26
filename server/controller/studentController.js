const studentModel = require('../model/studentModel');

exports.createStudent = async (req, res) => {
  const id = req.body._id;
  const student = await studentModel.findOne({
    _id: id
  });
  if (student) {
    console.log("Student already exists, updating the fields: ");
    res.json(student);
  } else {
    const newStudent = new studentModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
    });

    newStudent.save()
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Cannot create a student record in database" });
      });
  }
};

exports.getAllStudents = (req, res) => {
  studentModel.find()
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not fetch records from database" });
    });
};

exports.getStudent = async (req, res) => {
  console.log("GET request on student api");
};

exports.updateStudent = async (req, res) => {
  console.log("PUT request on student api");
};

exports.deleteStudent = async (req, res) => {
  console.log("DEL request on student api");
};