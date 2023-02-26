const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;

