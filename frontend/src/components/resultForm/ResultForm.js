import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useContext, useState } from 'react';
import { ResultContext } from '../../pages/Results/ResultContext';
import { StudentContext } from '../../pages/Students/StudentContext';
import { CourseContext } from '../../pages/courses/CourseContext';

const api_url = process.env.REACT_APP_API_URL_PROD + '/results';
const ResultForm = () => {
  // eslint-disable-next-line
  const [results, setResults] = useContext(ResultContext);
  const [students] = useContext(StudentContext);
  const [courses] = useContext(CourseContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    courseName: '',
    studentName: '',
    score: ''
  });

  const verifyData = (data) => {
    if (!data["studentName"]) {
      return ("Please provide student name. student name cannot be empty");
    } else if (!data["courseName"]) {
      return ("Please provide course name. course name cannot be empty")
    } else if (!data["score"]) {
      return ("Please provide valid score");
    } else {
      return null;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    const errorMsg = verifyData(formData);
    setError(errorMsg);
    if (!errorMsg) {
      fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, body: JSON.stringify({
          courseName: formData.courseName,
          studentName: formData.studentName,
          score: formData.score
        })
      }).then(response => response.json())
        .then((data) => {
          console.log(data);
          setSuccess('Data added successfully');
          setResults(data);
          setFormData({
            courseName: '',
            studentName: '',
            score: ''
          });
        });
    }
  }

  const renderOptions = (data, field) => {

    if (Array.isArray(data)) {
      return (
        data.map((item, index) => {
          return (
            <option key={index} value={item[field]}>
              {item[field]}
            </option>
          );
        })
      );
    }
  }

  return (
    <>
      <h1 className='mb-4'>Add courses</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="studentName">
          <Form.Label>Student:</Form.Label>
          <Form.Select aria-label="select student"
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
          >
            <option>Select student</option>
            {renderOptions(students, "firstName")}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="courseName">
          <Form.Label>Course:</Form.Label>
          <Form.Select aria-label="select course"
            onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
          >
            <option>Select course</option>
            {renderOptions(courses, "courseName")}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="score">
          <Form.Label>Score:</Form.Label>
          <Form.Select aria-label="select course"
            onChange={(e) => setFormData({ ...formData, score: e.target.value })}
          >
            <option>Select score</option>
            <option value={'A'}>A</option>
            <option value={'B'}>B</option>
            <option value={'C'}>C</option>
            <option value={'D'}>D</option>
            <option value={'E'}>E</option>
            <option value={'F'}>F</option>

          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className='my-4'>
          Submit
        </Button>
        {(error || success) &&
          <Alert variant={error ? "danger" : "success"}>
            {error || success}
          </Alert>
        }
      </Form>
    </>

  );
}

export default ResultForm;
