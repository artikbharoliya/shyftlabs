import { createContext, useState } from "react";

export const CourseContext = createContext({});

const CourseContextProvider = (props) => {
  const [courses, setCourses] = useState({});
  return (
    <CourseContext.Provider value={[courses, setCourses]}>
      {props.children}
    </CourseContext.Provider>
  );
}

export default CourseContextProvider;