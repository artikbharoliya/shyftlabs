import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { getPrintableDate } from '../../utils/Utils';

const StudentForm = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h1 className='mb-4'>Add student data</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name: {formData.firstName}</Form.Label>
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
              mode="single"
              selectedDate={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setFormData({ ...formData, dateOfBirth: date })
              }}
              footer={selectedDate && `selectedDate date is: ${getPrintableDate(selectedDate)}`}
            />
          }
        </Form.Group>
        <Button variant="primary" type="submit" className='my-4'>
          Submit
        </Button>
      </Form>
    </>

  );
}

export default StudentForm;
