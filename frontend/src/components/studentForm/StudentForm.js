import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';

const getStringDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

const StudentForm = () => {
  const [selected, setSelected] = useState();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);


  return (
    <Row className="justify-content-md-center me-0">
      <Col md={6} xs={8}>
        <h1 className='mb-4'>Add student data</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="email" placeholder="John" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name:</Form.Label>
            <Form.Control type="email" placeholder="Doe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='me-4'>Date of Birth:</Form.Label>
            <Button variant='light' onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>Pick a Date</Button>
            {isDatePickerOpen &&
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={selected && `Selected date is: ${getStringDate(selected)}`}
              />
            }
          </Form.Group>
          <Button variant="primary" type="submit" className='my-4'>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default StudentForm;
