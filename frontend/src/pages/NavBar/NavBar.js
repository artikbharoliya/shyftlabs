import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ children }) {
  return (
    <div className="nav">
      <Nav className="nav-bar mx-4">
        <Link to={'/'}>Home</Link>
        <Link to={'/students'}>Students</Link>
        <Link to={'/courses'}>Courses</Link>
        <Link to={'/results'}>Results</Link>
      </Nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default NavBar;
