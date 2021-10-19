import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const About = () => {
  const {id} = useParams();
  
  return (
    <div>
      <h3>{id}</h3>
      <p>{id.name}</p>
    </div>
  );
};

export default About;