import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import './Packages.css';

const Packages = () => {
  return (
    <div>
     <CardGroup className="m-3">
  <Card>
    <Card.Body>
      <Card.Title>PRIMARY MEMBERSHIP</Card.Title>
      <small>Self Directed Training</small>
      <h1><sup>$</sup>99.99 <sub>/ Month</sub></h1>
      <Card.Text>
        <ul>
          <li>Cardio Machines</li>
          <li>Weight Training Sets</li>
          <li>General Assistance</li>
          <li>Diet Guides</li>
          <li>Basic Stretching</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="outline-success">Enroll Now</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>PREMIUM MEMBERSHIP</Card.Title>
      <small>Fitness Trainer's Support</small>
      <h1><sup>$</sup>125.99 <sub>/ Month</sub></h1>
      <Card.Text>
      <ul>
          <li>Cardio Machines</li>
          <li>Weight Training Sets</li>
          <li>General Assistance</li>
          <li>Diet Guides</li>
          <li>Basic Stretching</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="outline-success">Enroll Now</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>ELITE MEMBERSHIP</Card.Title>
      <small>Personal Trainer Assistance</small>
      <h1><sup>$</sup>150.99 <sub>/ Month</sub></h1>
      <Card.Text>
      <ul>
          <li>Cardio Machines</li>
          <li>Weight Training Sets</li>
          <li>General Assistance</li>
          <li>Diet Guides</li>
          <li>Basic Stretching</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="outline-success">Enroll Now</Button>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  );
};

export default Packages;