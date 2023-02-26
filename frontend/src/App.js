import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Students from './pages/Students';
import Courses from './pages/courses';
import Results from './pages/Results';

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
    <RouterProvider router={router} />
  );
}

export default App;
