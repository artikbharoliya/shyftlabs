import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Students from './pages/Students';
import Courses from './pages/courses';
import Results from './pages/Results';
import StudentContextProvider from './pages/Students/StudentContext';
import CourseContextProvider from './pages/courses/CourseContext';
import ResultContextProvider from './pages/Results/ResultContext';

const componentWithNavBar = (children) => {
  return (
    <NavBar>
      {children}
    </NavBar>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: componentWithNavBar(<Home />),
  },
  {
    path: "/students",
    element: componentWithNavBar(<Students />),
  },
  {
    path: "/courses",
    element: componentWithNavBar(<Courses />),
  },
  {
    path: "/results",
    element: componentWithNavBar(<Results />),
  },
]);

function App() {
  return (
    <StudentContextProvider>
      <CourseContextProvider>
        <ResultContextProvider>
          <RouterProvider router={router} />
        </ResultContextProvider>
      </CourseContextProvider>
    </StudentContextProvider>
  );
}

export default App;
