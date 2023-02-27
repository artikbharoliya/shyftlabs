import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseForm from '../../components/courseForm';
import CourseTable from '../../components/courseTable';

function Courses() {
  return (
    <div className="courses-page">
      <Row className="justify-content-md-center me-0">
        <Col md={6} xs={8}>
          <CourseForm />
          <CourseTable />
        </Col>
      </Row>
    </div>

  );
}

export default Courses;
