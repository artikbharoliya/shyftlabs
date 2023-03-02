const courseModel = require('../model/courseModel');
const resultModel = require('../model/resultModel');
const studentModel = require('../model/studentModel');

exports.createResult = async (req, res) => {

  const courseName = req.body.courseName;
  const studentName = req.body.studentName;
  const score = req.body.score;
  console.log(courseName);
  if (!courseName || !studentName || !score) {
    res.status(500).json({ error: "Cannot create a result record in database, please provide all the fields" });
  } else {

    const course = await courseModel.findOne({ courseName });
    const student = await studentModel.findOne({ firstName: studentName });

    if (course && student) {
      const newResult = new resultModel({
        course: course._id,
        student: student._id,
        score: score,
      });

      newResult.save()
        .then(() => {
          res.redirect('/api/results');
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: "Cannot create a result record in database" });
        });
    }
  }
}

exports.getAllResults = (req, res) => {
  resultModel.find()
    .populate({ path: 'course' })
    .populate({ path: 'student' })
    .then(data => {
      const validResults = data.filter((result) => (result.student && result.course));
      console.log(validResults)
      res.json(validResults);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Could not fetch results from the database' });
    })
}