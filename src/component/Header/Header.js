import React from 'react';
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="warning" variant="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className="text-primary fs-3" href="#">FitHealth</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action2">Packages</Nav.Link>
      </Nav>
      <Form className="d-flex">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
        <Button className="ms-3" variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;