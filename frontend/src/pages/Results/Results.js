import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResultTable from '../../components/resultTable';
import ResultForm from '../../components/resultForm';

function Results() {
  return (

    <div className="results-page">
      <Row className="justify-content-md-center me-0">
        <Col md={6} xs={8}>
          <ResultForm />
          <ResultTable />
        </Col>
      </Row>
    </div>

  );
}

export default Results;
