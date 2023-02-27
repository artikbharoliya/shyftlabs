const studentModel = require('../model/studentModel');

exports.createStudent = async (req, res) => {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const dateOfBirth = req.body.dateOfBirth;

  if (!firstName || !lastName || !dateOfBirth) {
    res.status(500).json({ error: "Cannot create a student record in database, please provide all the fields" });
  } else if ((new Date().getFullYear() - new Date(dateOfBirth).getFullYear()) < 10) {
    res.status(500).json({ error: "Cannot create a student record in database, age cannot be less than 10 years" });
  } else {
    const newStudent = new studentModel({
      firstName,
      lastName,
      dateOfBirth,
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
      res.status(500).json({ error: "Could not fetch students from the database" });
    });
};
