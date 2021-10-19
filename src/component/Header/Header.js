import React from 'react';
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <div>
      <Navbar bg="warning" variant="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className="text-primary fs-3" href="#">FitHealth</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/packages">Packages</Link>
        <Link className="nav-link" to="/trainer">Trainer</Link>
      </Nav>
      <Form className="d-flex">
       { user.email ? 
       <div>
        {user.displayName}
       <Button onClick={logOut} className="ms-3" variant="outline-danger">LogOut</Button>
       </div>
       :
        <Link to="/login">
        <Button className="ms-3" variant="outline-primary">Login</Button>
        </Link>}
      </Form> 
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;