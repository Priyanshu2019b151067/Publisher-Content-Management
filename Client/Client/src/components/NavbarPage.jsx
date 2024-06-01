
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from '../state';


function NavbarComponent() {
    const expand = 'lg';
    const user = useSelector((state) => state.user);
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        dispatch(setLogout({
            user : null,
            token : null
        }))
        navigate('/');
    }
  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to={'/'}> TodayQ</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to={'/cart'}>My Cart</Nav.Link>
                    <Nav.Link as={Link} to={'/home'}>{user.userName}</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
                {/* user information */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavbarComponent;