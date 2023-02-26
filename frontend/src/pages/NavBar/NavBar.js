import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ children }) {
  return (
    <div className="nav">
      <Nav className="nav-bar mx-4">
        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
        <Nav.Link><Link to={'/students'}>Students</Link></Nav.Link>
        <Nav.Link><Link to={'/courses'}>Courses</Link></Nav.Link>
        <Nav.Link><Link to={'/results'}>Results</Link></Nav.Link>
      </Nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default NavBar;
