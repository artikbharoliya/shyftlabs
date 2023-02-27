const courseModel = require('../model/courseModel');

exports.createCourse = async (req, res) => {
  const courseName = req.body.courseName;
  console.log(req.body);
  if (!courseName) {
    res.status(500).json({ error: "Cannot create a course record in database, please provide all the fields" });
  } else {
    const newCourse = new courseModel({
      courseName,
    });

    newCourse.save()
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Cannot create a course record in database" });
      });
  }
}

exports.getAllCourses = (req, res) => {
  courseModel.find()
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Could not fetch courses from the database' })
    })
}