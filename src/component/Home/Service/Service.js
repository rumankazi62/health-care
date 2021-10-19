import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = () => {
  const [services, setSerivces] = useState([]);
  useEffect(() => {
    fetch('./gym.json')
    .then(res => res.json())
    .then(data => setSerivces(data))
  }, [])
  return (
    <div className="row m-3">
      {
        services.map(service => 
          <div className="col-lg-4 col-sm-12 p-3">
            <Card style={{ width: '18rem', height:'22rem'}}>
        <Card.Img style={{height:'10rem'}} variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>
            {service.describeiton.slice(0,70)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/about">
          <Button variant="outline-warning">Details</Button>
          </Link>
    </Card.Footer>
      </Card>
          </div>
          )
      }
    </div>
  );
};

export default Service;