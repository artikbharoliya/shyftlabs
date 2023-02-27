import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useContext, useState } from 'react';
import { CourseContext } from '../../pages/courses/CourseContext';

const api_url = process.env.REACT_APP_API_URL_PROD + '/courses';
const CourseForm = () => {
  const [courses, setCourses] = useContext(CourseContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    courseName: '',
  });

  const verifyData = (data) => {
    if (!data["courseName"]) {
      return ("Please provide course name, course name cannot be empty");
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
          courseName: formData.courseName
        })
      }).then(response => response.json())
        .then((data) => {
          setSuccess('Data added successfully');
          setCourses([...courses, data]);
          setFormData({
            courseName: '',
          });
        });
    }
  }

  return (
    <>
      <h1 className='mb-4'>Add courses</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="courseName">
          <Form.Label>Course name</Form.Label>
          <Form.Control type="text" placeholder="Programming 101" value={formData.courseName}
            onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
          />
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

export default CourseForm;
