import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const About = () => {
  const {id} = useParams();
  // const [service, setService] = useState({});
  // useEffect(()=> {
  //   fetch(./gym.json${id})
  //   .then(res => res.json())
  //   .then(data => setService(data))
  // },[])
  
  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default About;