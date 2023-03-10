import { useContext, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { CourseContext } from "../../pages/courses/CourseContext";


const CourseTable = () => {
  const [loading, setLoading] = useState(true);
  const [courses] = useContext(CourseContext);

  useEffect(() => {
    setLoading(courses ? false : true);
  }, [courses]);

  const renderTableData = (data) => {
    if (Array.isArray(data)) {
      return (
        data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.courseName}</td>
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
        </tr>
      </thead>
      <tbody>
        {renderTableData(courses)}
      </tbody>
    </Table>
  );
}

export default CourseTable;