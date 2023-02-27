const mongoose = require('mongoose');

let resultSchema = new mongoose.Schema({
  course: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'course'
  },
  student: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'student'
  },
  score: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F", "none"],
    default: "none"
  }
});

const resultModel = mongoose.model("result", resultSchema);
module.exports = resultModel;

