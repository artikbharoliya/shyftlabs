import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext({});

const api_url = process.env.REACT_APP_API_URL_PROD + '/students';
const StudentContextProvider = (props) => {
  const [students, setStudents] = useState({});

  const fetchStudents = async () => {
    fetch(api_url)
      .then((response) => (response.json()))
      .then((studentsData) => {
        setStudents(studentsData);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentContext.Provider>
  );
}

export default StudentContextProvider;