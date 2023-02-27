import { createContext, useEffect, useState } from "react";

export const CourseContext = createContext({});

const api_url = process.env.REACT_APP_API_URL_PROD + '/courses';

// Context for storing courses data.
const CourseContextProvider = (props) => {
  const [courses, setCourses] = useState({});

  // fetching the data to initialize the context.
  const fetchCourses = async () => {
    fetch(api_url)
      .then((response) => (response.json()))
      .then((courseData) => {
        setCourses(courseData);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchCourses();
  }, []);


  return (
    <CourseContext.Provider value={[courses, setCourses]}>
      {props.children}
    </CourseContext.Provider>
  );
}

export default CourseContextProvider;