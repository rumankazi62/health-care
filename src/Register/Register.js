import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const {createUserWithEmail, googleSignIn} = useAuth();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = e => {
    setEamil(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleName = e => {
    setName(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    createUserWithEmail(email, password, name);
  }

  return (
    <div>
    <h3>Please Register</h3>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control onChange={handleName} type="text" placeholder="Enter name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Link to="/login">
    <Form.Check type="checkbox" label="Login" />
    </Link>
  </Form.Group>
  <Button variant="primary" type="submit">
    Register
  </Button>
  <br/>
  ------Or------<br/>
  <Button onClick={googleSignIn}>Google SignIn</Button>
</Form>
    </div>
  );
};

export default Register;