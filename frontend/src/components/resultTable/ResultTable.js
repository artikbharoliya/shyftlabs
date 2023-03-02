import { useContext, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { ResultContext } from "../../pages/Results/ResultContext";


const ResultTable = () => {
  const [loading, setLoading] = useState(true);
  const [results] = useContext(ResultContext);

  useEffect(() => {
    setLoading(results ? false : true);
  }, [results]);

  const renderTableData = (data) => {
    if (Array.isArray(data)) {
      return (
        data.map((item, index) => {
          if (!item.student || !item.course) return
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.course.courseName}</td>
              <td>{item.student.firstName + " " + item.student.lastName}</td>
              <td>{item.score}</td>
            </tr>
          );
        })
      );
    }
  }

  if (loading) return (<h1>Loading...</h1>);
  return (
    <Table striped bordered className="my-5">
      <thead>
        <tr>
          <th>Number</th>
          <th>Course Name</th>
          <th>Student Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {renderTableData(results)}
      </tbody>
    </Table>
  );
}

export default ResultTable;