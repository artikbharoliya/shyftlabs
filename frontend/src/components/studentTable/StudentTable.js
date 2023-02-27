import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../pages/Students/StudentContext";
import Table from 'react-bootstrap/Table';
import { getPrintableDate } from "../../utils/Utils";


const api_url = process.env.REACT_APP_API_URL_PROD + '/students';

const StudentTable = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useContext(StudentContext);

  const fetchStudents = async () => {
    fetch(api_url)
      .then((response) => (response.json()))
      .then((studentsData) => {
        setStudents(studentsData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchStudents();
    console.log(students);
  }, []);

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