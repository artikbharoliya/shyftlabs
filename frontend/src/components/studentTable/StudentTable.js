import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../pages/Students/StudentContext";
import Table from 'react-bootstrap/Table';
import { getPrintableDate } from "../../utils/Utils";



const StudentTable = () => {
  const [loading, setLoading] = useState(true);
  const [students] = useContext(StudentContext);

  useEffect(() => {
    setLoading(students ? false : true);
  }, [students]);

  const renderTableData = (data) => {
    if (Array.isArray(data)) {
      return (
        data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{getPrintableDate(new Date(item.dateOfBirth))}</td>
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthdate</th>
        </tr>
      </thead>
      <tbody>
        {renderTableData(students)}
      </tbody>
    </Table>
  );
}

export default StudentTable;