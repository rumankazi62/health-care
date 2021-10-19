import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className="slider">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-75"
      src="https://i2-prod.hulldailymail.co.uk/incoming/article2829800.ece/ALTERNATES/s1200/0_PW_HM_030519TEMPLE.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-75"
      src="https://s.wsj.net/public/resources/images/BN-JO488_0727WO_M_20150727110300.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75"
      src="https://www.playspots.in/wp-content/uploads/2020/07/gym-AP-002.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;