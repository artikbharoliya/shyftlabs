import StudentForm from '../../components/studentForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentTable from '../../components/studentTable';

function Students() {

	return (
		<div className="students-page">
			<Row className="justify-content-md-center me-0">
				<Col md={6} xs={8}>
					<StudentForm />
					<StudentTable />
				</Col>
			</Row>
		</div >
	);
}

export default Students;
