import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Courses.css';
import CourseForm from '../../components/courseForm/CourseForm';
import CourseContextProvider from './CourseContext';
import CourseTable from '../../components/courseTable';

function Courses() {
  return (
    <CourseContextProvider>
      <div className="courses-page">
        <Row className="justify-content-md-center me-0">
          <Col md={6} xs={8}>
            <CourseForm />
            <CourseTable />
          </Col>
        </Row>
      </div>
    </CourseContextProvider>
  );
}

export default Courses;
