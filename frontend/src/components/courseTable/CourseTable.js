import { useContext, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { CourseContext } from "../../pages/courses/CourseContext";

const api_url = process.env.REACT_APP_API_URL_PROD + '/courses';

const CourseTable = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useContext(CourseContext);

  const fetchCourses = async () => {
    fetch(api_url)
      .then((response) => (response.json()))
      .then((courseData) => {
        setCourses(courseData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchCourses();
  }, []);

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