const mongoose = require('mongoose');

let courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
});

const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel;

