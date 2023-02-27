import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { DayPicker } from 'react-day-picker';
import Alert from 'react-bootstrap/Alert';
import { useContext, useState } from 'react';
import { getPrintableDate } from '../../utils/Utils';
import { StudentContext } from '../../pages/Students/StudentContext';

const api_url = process.env.REACT_APP_API_URL_PROD + '/students';
const StudentForm = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [students, setStudents] = useContext(StudentContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const verifyData = (data) => {
    if (!data["firstName"]) {
      return ("Please provide first name, first name cannot be empty");
    } else if (!data["lastName"]) {
      return ("Please provide last name, last name cannot be empty");
    } else if (!data["dateOfBirth"]) {
      return ("Please provide date of birth, date of birth cannot be empty");
    } else if ((new Date().getFullYear() - new Date(data["dateOfBirth"]).getFullYear()) < 10) {
      return ("Age cannot be less than 10 years.");
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
      // TODO: make fetch request to post student data
      fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          dateOfBirth: formData.dateOfBirth,
        })
      }).then(response => response.json())
        .then((data) => {
          setSuccess('Data added successfully');
          setStudents([...students, data]);
          setFormData({
            firstName: '',
            lastName: '',
            dateOfBirth: ''
          });
        });
    }
  }

  return (
    <>
      <h1 className='mb-4'>Add student data</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" placeholder="John" value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control type="text" placeholder="Doe" value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dateOfBirth">
          <Form.Label className='me-4'>Date of Birth:</Form.Label>
          <Button variant='light' onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>Pick a Date</Button>
          {isDatePickerOpen &&
            <DayPicker
              captionLayout="dropdown"
              fromYear={1900} toYear={new Date().getFullYear()}
              mode="single"
              selectedDate={selectedDate}
              onSelect={(date) => {
                setSelectedDate(new Date(date));
                setFormData({ ...formData, dateOfBirth: new Date(date) })
              }}
              footer={selectedDate && `Selected date is: ${getPrintableDate(selectedDate)}`}
            />
          }
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

export default StudentForm;
